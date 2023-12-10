<template>
    <Body>
        <section class="w-full h-screen flex items-center overflow-hidden">
            <div class="test w-[62%] h-screen p-10">
                <div 
                class="w-full flex items-center justify-between"
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
                    <div class="w-[80%] h-[80%] flex items-center justify-center flex-col mt-[-2.5rem]">
                        <h2 class="text-[1.5rem] font-bold font-[Roboto] uppercase mb-[1.1rem] mt-[-.6rem]">
                            {{ emailSent ? 'Kiểm tra email đăng ký' : 'bạn đã quên mật khẩu?' }}
                        </h2>
                        <p class="text-[1rem] font-[Roboto] font-light uppercase mb-[-10.6rem]">
                            {{ emailSent ? 'Chúng tôi vừa gửi mã code đến email của bạn' : 'vui lòng nhập email và nhấn tiếp tục để nhận code reset mật khẩu' }}
                        </p>
                        <UForm class="w-full h-full flex items-center justify-center flex-col gap-[2.5rem] mb-[-10.15rem]" action="" @submit="handleEmailSubmit">
                            <UFormGroup :label="emailSent ? 'Mã code' : 'Email của bạn'" name="email" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-envelope-open-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input
                                  :type="emailSent ? 'text' : 'email'"
                                  class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light"
                                  v-model="emailInput"
                                  required
                                  autocomplete="off"
                                  :placeholder="emailSent ? 'Nhập mã vào đây...' : 'Nhập email đăng ký...'"
                                >
                              </UFormGroup>
                            <UButton
                                type="submit"
                                class="transition-all ease-out duration-300 w-[26rem] h-[3rem] flex items-center justify-center"
                                size="xl"
                                variant="solid"
                                :ui="{ rounded: 'rounded-full' }">
                                <span class="font-['Roboto'] uppercase text-[.9rem] font-bold">{{ emailSent ? 'xác nhận' : 'tiếp tục'}}</span>
                                <Icon :icon="emailSent ? 'line-md:confirm-circle' :'bi:send-fill'" class="text-[1.05rem]"/>
                          </UButton>
                        </UForm>
                        <p class="font-[Roboto] text-[.85rem] font-light">Bạn đang gặp vấn đề? <ULink class="font-bold uppercase transition-all hover:text-[rgb(0,220,130)]" @click="toast.add({ icon: 'i-heroicons-exclamation-circle-20-solid', title: 'Chức năng đang được phát triển', timeout: 2500, color: 'yellow' })">cần hỗ trợ</ULink></p>
                    </div>
                </div>
            </div>
            <div class="w-[38%] h-screen"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, scale: 1 }"
            :delay="10"
            >
              <NuxtImg src="/photo4.jpg" class="w-full h-full" />
            </div>
        </section>
    </Body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

useHead({
    title: 'Quên Mật Khẩu',
});

const toast = useToast();

const emailSent = ref(false);
const emailInput = ref('');
const emailCorrect = 'hlam812003@gmail.com';

const handleEmailSubmit = (): void => {
    if (emailInput.value === emailCorrect) {
        emailSent.value = true;
        emailInput.value = '';
    } else {
        toast.add({ 
            icon: 'i-heroicons-no-symbol-solid',
            color: 'red',
            title: 'Email không tồn tại', 
            description: 'Vui lòng kiểm tra lại email của bạn.',
            timeout: 2500 
        });
    }
};

</script>

<style scoped>

</style>