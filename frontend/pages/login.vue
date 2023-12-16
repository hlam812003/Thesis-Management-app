<template>
    <Body>
        <section class="w-full h-screen flex items-center overflow-hidden">
            <div class="test w-[64%] h-screen p-10">
                <div 
                class="w-full flex items-center justify-between"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="100"
                >
                    <ULink to="/" class="flex items-center gap-1">
                        <UIcon name="i-heroicons-chevron-left" class="text-[1.4rem]"/>
                        <p class="font-[Roboto] text-[1rem] font-light capitalize">quay về</p>
                    </ULink>
                    <p class="font-[Roboto] text-[1rem] font-light">Bạn chưa có tài khoản? <ULink to="signup" class="font-bold uppercase transition-all hover:text-[rgb(0,220,130)]">tạo ngay</ULink></p>
                </div>
                <div class="w-full h-full flex items-center justify-center"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="300"
                >
                    <div class="w-[80%] h-[80%] flex items-center justify-center flex-col mt-[1.2rem]">
                        <h2 class="text-[1.5rem] font-bold font-[Roboto] uppercase mb-[1.1rem] mt-[-.6rem]">Chào mừng đã quay trở lại</h2>
                        <p class="text-[1rem] font-[Roboto] font-light uppercase mb-[2rem]">đăng nhập để tiếp tục</p>
                        <div class="w-full flex items-center justify-center relative mb-[2rem]">
                            <button class="login__google--btn" @click="toast.add({ icon: 'i-heroicons-exclamation-circle-20-solid', title: 'Chức năng đang được phát triển', timeout: 2500, color: 'yellow' })">
                                <Icon icon="devicon:google"/>
                                <span class="font-[Roboto] font-medium text-[.9rem] transition-all">Đăng nhập với Google</span>
                            </button>
                        </div>
                        <div class="w-[26rem] flex items-center justify-center gap-2 mb-[-6rem]">
                            <span class="w-full h-[.05rem] bg-[#ffffffc0]"></span>
                            <span class="w-full font-[Roboto] text-center font-light text-[.85rem]">Hoặc đăng nhập với</span>
                            <span class="w-full h-[.05rem] bg-[#ffffffc0]"></span>
                        </div>
                        <UForm class="w-full h-full flex items-center justify-center flex-col gap-[2.5rem] mb-[-5.5rem]" action="" :state="formState" @submit="onFormSubmit">
                            <UFormGroup label="Email của bạn" name="email" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-envelope-open-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input type="email" class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" v-model="formState.email" autocomplete="off">
                            </UFormGroup>
                            <UFormGroup label="Mật khẩu" name="password" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-lock-closed-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input :type="isPasswordVisible ? 'text' : 'password'" class="w-full h-[3rem] outline-none pl-10 pr-11 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" v-model="formState.password" autocomplete="off">
                                <UIcon :name="isPasswordVisible ? 'i-heroicons-eye-solid' : 'i-heroicons-eye-slash-solid'" class="absolute top-[.95rem] right-4 cursor-pointer" @click="togglePasswordVisibility"/>
                            </UFormGroup>
                            <div class="w-[26rem] flex items-center justify-between">
                                <div class="flex items-center">
                                    <Checkbox />
                                    <span class="font-light font-[Roboto] text-[1rem]">Ghi nhớ tôi</span>
                                </div>
                                <UButton
                                    type="submit"
                                    class="transition-all ease-out duration-300 w-[8rem] h-[3rem] flex items-center justify-center"
                                    size="xl"
                                    variant="solid"
                                    :ui="{ rounded: 'rounded-full' }"
                                    @click="onFormSubmit">
                                    <span class="font-['Roboto'] uppercase text-[.9rem] font-bold">đăng nhập</span>
                                </UButton>
                            </div>
                        </UForm>
                        <p class="font-[Roboto] text-[.85rem] font-light">Bạn đang gặp vấn đề? <ULink class="font-bold uppercase transition-all hover:text-[rgb(0,220,130)]" to="forgot">quên mật khẩu</ULink></p>
                    </div>
                </div>
            </div>
            <div class="w-[36%] h-screen"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="10"
                >
                <NuxtImg src="/photo2.jpg" class="w-full h-full" />
            </div>
        </section>
    </Body>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import jwtDecode from 'jwt-decode';
import authService from '~/services/AuthService';
import { useUserStore } from '~/stores/User';

useHead({
    title: 'Đăng Nhập',
});

const userStore = useUserStore();
const router = useRouter();

const formState = reactive({
  email: '',
  password: '',
});

const isPasswordVisible = ref(false);

const toast = useToast();

const togglePasswordVisibility = (): void => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

async function onFormSubmit(e: Event) {
    e.preventDefault();
    if (!formState.email || !formState.password) {
        toast.add({
            title: 'Lỗi!',
            icon: 'i-heroicons-no-symbol-solid',
            color: 'red',
            description: 'Vui lòng nhập email và mật khẩu!',
            timeout: 2500
        });
    } else {
        try {
            const { data } = await authService.login(formState);
            console.log(data);
            if (data.token) {
                const decodedToken = jwtDecode(data.token);
                userStore.setUser({ name: decodedToken.name, email: decodedToken.email });
                localStorage.setItem('token', data.token);
                toast.add({
                    title: 'Đăng nhập thành công!',
                    icon: 'i-heroicons-check-circle-solid',
                    color: 'green',
                    description: `Chào mừng ${decodedToken.name} đã trở lại!`,
                    timeout: 3000
                });
                router.push('/');
            }
        } catch (err) {
            toast.add({
                title: 'Đăng nhập thất bại!',
                icon: 'i-heroicons-no-symbol-solid',
                color: 'red',
                description: (err as any).userData?.data?.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!',
                timeout: 3000
            });
        }
    }
}

</script>

<style scoped lang="postcss">

.login__google--btn {
    @apply  flex items-center justify-center gap-4 w-[26rem] h-[3.25rem] outline-none border-[.1rem] rounded-full transition-all hover:border-[rgb(0,220,130)];
    &:hover span {
        @apply  text-[rgb(0,220,130)];
    }
}

</style>~/services/AuthService~/services/AuthService