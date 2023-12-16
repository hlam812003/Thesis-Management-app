<template>
    <footer id="FooterPage" class="w-full h-[5rem] flex items-center justify-center px-20 border-t-[1px] border-t-[#3F3F3F]">
        <!-- <NuxtImg src="/logo.png" class="w-[60px] h-[60px]"/> -->
        <div class="w-full flex justify-between items-center">
            <span class="text-[.8rem] font-light font-[Roboto] text-[rgba(255, 255, 255, 0.5)]">
                © 2023 Cisco Ltd. All rights reserved.
            </span>
            <div class="flex items-center gap-9">
                <div class="flex items-center">
                    <span class="text-[.8rem] font-light font-[Roboto] text-[rgba(255, 255, 255, 0.5)]">Điều Khoản & Điều Kiện</span>
                    <span class="text-[.8rem] font-light font-[Roboto] text-[rgba(255, 255, 255, 0.5)] mx-1">&centerdot;</span>
                    <span class="text-[.8rem] font-light font-[Roboto] text-[rgba(255, 255, 255, 0.5)]">Chính Sách Bảo Mật</span>
                </div>
                <div class="flex items-center gap-4">
                    <NuxtLink to="#HomeHeader" class="transition-all hover:scale-[1.1]">
                        <Icon icon="bi:facebook" />
                    </NuxtLink>
                    <NuxtLink to="#HomeHeader" class="transition-all hover:scale-[1.1]">
                        <Icon icon="teenyicons:instagram-outline" />
                    </NuxtLink>
                    <NuxtLink to="#HomeHeader" class="transition-all hover:scale-[1.1]">
                        <Icon icon="bi:linkedin" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>