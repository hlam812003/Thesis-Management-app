<template>
    <Body>
        <section class="w-full h-screen flex items-center overflow-hidden">
            <div class="w-[38%] h-screen"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, scale: 1 }"
            :delay="10"
            >
                <NuxtImg src="/photo3.jpg" class="w-full h-full"/>
            </div>
            <div class="w-[62%] h-screen p-10 bg-[#000000]">
                <div class="w-full flex items-center justify-between"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="100"
                >
                    <ULink to="login" class="flex items-center gap-1">
                        <UIcon name="i-heroicons-chevron-left" class="text-[1.4rem]"/>
                        <p class="font-[Roboto] text-[1rem] font-light capitalize">quay về đăng nhập</p>
                    </ULink>
                </div>
                <div class="w-full h-full flex items-center justify-center"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="300"
                >
                    <div class="w-[80%] h-[80%] flex items-center justify-center flex-col">
                        <h2 class="text-[1.5rem] font-bold font-[Roboto] uppercase mb-[1.1rem] mt-[-3rem]">trở thành thành viên của chúng tôi</h2>
                        <p class="text-[1rem] font-[Roboto] font-light uppercase mb-[-.1rem]">đăng kí ngay để kết nối, chia sẻ, và phát triển cùng đồ án của bạn</p>
                        <UForm class="w-full h-full flex items-center justify-center flex-col gap-[2.5rem] mb-[-5.5rem]" action="">
                            <div class="w-[26rem] flex items-center justify-between gap-12">
                                <UFormGroup label="Họ của bạn" name="username" class="w-1/2 font-[Roboto] text-[1rem] relative">
                                    <UIcon name="i-heroicons-user-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                    <input type="text" class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                                </UFormGroup>
                                <UFormGroup label="Tên của bạn" name="username" class="w-1/2 font-[Roboto] text-[1rem] relative">
                                    <UIcon name="i-heroicons-user-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                    <input type="text" class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                                </UFormGroup>
                            </div>
                            <UFormGroup label="Email đăng kí" name="email" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-envelope-open-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input type="email" class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                            </UFormGroup>
                            <UFormGroup label="Mật khẩu" name="password" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-lock-closed-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input :type="passwordVisibility.password ? 'text' : 'password'" class="w-full h-[3rem] outline-none pl-10 pr-11 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                                <UIcon :name="passwordVisibility.password ? 'i-heroicons-eye-solid' : 'i-heroicons-eye-slash-solid'" class="absolute top-[.95rem] right-4 cursor-pointer" @click="togglePasswordVisibility('password')"/>
                            </UFormGroup>
                            <UFormGroup label="Xác nhận mật khẩu" name="confirmPassword" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-lock-closed-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input :type="passwordVisibility.confirmPassword ? 'text' : 'password'" class="w-full h-[3rem] outline-none pl-10 pr-11 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                                <UIcon :name="passwordVisibility.confirmPassword ? 'i-heroicons-eye-solid' : 'i-heroicons-eye-slash-solid'" class="absolute top-[.95rem] right-4 cursor-pointer" @click="togglePasswordVisibility('confirmPassword')"/>
                            </UFormGroup>
                            <div class="w-[26rem] flex items-center justify-between">
                                <div class="flex items-center">
                                    <Checkbox />
                                    <span class="font-light font-[Roboto] text-[1rem]">Chấp nhận các điều kiện trên</span>
                                </div>
                                <UButton
                                    class="transition-all ease-out duration-300 w-[7rem] h-[3rem] flex items-center justify-center"
                                    size="xl"
                                    variant="solid"
                                    :ui="{ rounded: 'rounded-full' }"
                                    to="login">

                                    <span class="font-['Roboto'] uppercase text-[.9rem] font-bold">đăng ký</span>
                                </UButton>
                            </div>
                        </UForm>
                    </div>
                </div>
            </div>
        </section>
    </Body>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

useHead({
    title: 'Đăng Ký',
});

type PasswordVisibilityFields = 'password' | 'confirmPassword';

const passwordVisibility = reactive<Record<PasswordVisibilityFields, boolean>>({
  password: false,
  confirmPassword: false
});

const togglePasswordVisibility = (field: PasswordVisibilityFields): void => {
  passwordVisibility[field] = !passwordVisibility[field];
};

</script>

<style scoped>

</style>