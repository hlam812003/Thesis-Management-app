<template>
    <header class="">
        <nav class="flex items-center gap-[2.7rem] p-[1.6rem] pl-[1.9rem]">
            <a 
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :delay="250"
                :hovered="{ scale: 1.1 }"
                class="logo">
                <nuxt-link to="/">Sisco</nuxt-link>
            </a>
            <div class="flex w-[100%] justify-between">
                <ul class="flex items-center gap-[1.5rem]">
                    <li 
                        v-for="(item, index) in navItems" 
                        :key="item.label"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, scale: 1 }"
                        :delay="250 + (index + 1) * 100"
                        class="menu__item">
                        <nuxt-link :to="item.link">{{ item.label }}</nuxt-link>
                        <span class="underline"></span>
                    </li>
                </ul>
                <div class="flex items-center gap-[.8rem]">
                    <UButton 
                        v-for="button in navButtons" 
                        :key="button.label"
                        class="transition-all ease-out duration-300"
                        :to="button.link"
                        size="md"
                        :variant="button.variant"
                        :ui="button.ui"
                        >
                        {{ button.label }}
                    </UButton>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const navItems = ref([
  { label: 'Luận Án', link: '/thesis' },
  { label: 'Sinh Viên', link: '/students' },
  { label: 'Giảng Viên', link: '/professors' },
]);

const navButtons = ref([
  {
    label: 'Đăng Nhập',
    link: 'https://example.com',
    variant: 'outline',
    ui: { rounded: 'rounded-full' }
  },
  {
    label: 'Đăng Ký',
    link: 'https://example.com',
    variant: 'solid',
    ui: { rounded: 'rounded-full' }
  }
]);
    
</script>

<style setup lang="postcss" scoped>
.menu__item {
    @apply relative transition text-[14px] ease duration-[250ms] hover:text-[rgb(0,220,130)];

    &:hover .underline {
        width: 100%;
    }
}

.underline {
    @apply absolute bottom-[-1px] left-0 h-[1px] bg-[rgb(0,220,130)] transition-all ease-out duration-300;
    width: 0;
}

.logo {
    @apply text-[24px];
}
</style>