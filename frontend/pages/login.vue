<template>
    <Body>
        <section class="w-full h-screen flex items-center overflow-hidden">
            <div class="w-[62%] h-screen p-10">
                <div class="w-full flex items-center justify-between">
                    <ULink to="/" class="flex items-center gap-1">
                        <UIcon name="i-heroicons-chevron-left" class="text-[1.2rem]"/>
                        <p class="font-[Roboto] text-[1rem] font-light capitalize">quay về</p>
                    </ULink>
                    <p class="font-[Roboto] text-[1rem] font-light">Bạn chưa có tài khoản? <ULink to="/signup" class="font-bold uppercase transition-all hover:text-[rgb(0,220,130)]">tạo ngay</ULink></p>
                </div>
                <div class="w-full h-full flex items-center justify-center">
                    <div class="w-[80%] h-[80%] flex items-center justify-center flex-col">
                        <h2 class="text-[1.5rem] font-bold font-[Roboto] uppercase mb-[1.1rem] mt-[-1.6rem]">Chào mừng đã quay trở lại</h2>
                        <p class="text-[1rem] font-[Roboto] font-light uppercase mb-[-7rem]">đăng nhập để tiếp tục</p>
                        <UForm class="w-full h-full flex items-center justify-center flex-col gap-[2.5rem] mb-[-5.5rem]" action="">
                            <UFormGroup label="Email của bạn" name="email" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-envelope-open-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input type="email" class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                            </UFormGroup>
                            <UFormGroup label="Mật khẩu" name="password" class="w-[26rem] font-[Roboto] text-[1rem] relative">
                                <UIcon name="i-heroicons-lock-closed-solid" class="absolute top-[.85rem] left-3 text-[1.1rem]"/>
                                <input type="password" class="w-full h-[3rem] outline-none pl-10 pr-4 bg-transparent border-b-[1px] border-b-[#ffffffc0] transition-all focus:border-b-[rgb(0,220,130)] text-[1.05rem] font-light" required autocomplete="off">
                            </UFormGroup>
                            <div class="w-[26rem] flex items-center justify-between">
                                <div class="flex items-center">
                                    <Checkbox />
                                    <span class="font-light font-[Roboto] text-[1rem]">Ghi nhớ tôi</span>
                                </div>
                                <UButton
                                    class="transition-all ease-out duration-300 w-[8rem] h-[3rem] flex items-center justify-center"
                                    size="xl"
                                    variant="solid"
                                    :ui="{ rounded: 'rounded-full' }"
                                    to="/">
                                    <span class="font-['Roboto'] uppercase text-[.9rem] font-bold">đăng nhập</span>
                                </UButton>
                            </div>
                        </UForm>
                        <p class="font-[Roboto] text-[.85rem] font-light">Bạn đang gặp vấn đề? <ULink class="font-bold uppercase transition-all hover:text-[rgb(0,220,130)]">quên mật khẩu</ULink></p>
                    </div>
                </div>
            </div>
            <div class="w-[38%] h-screen">
              <NuxtImg src="/photo2.jpg" class="w-full h-full"/>
            </div>
        </section>
    </Body>
</template>

<script setup lang="ts">
useHead({
    title: 'Đăng Nhập',
})
</script>

<style scoped>
  
</style>