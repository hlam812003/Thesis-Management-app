<template>
    <div id="MainLayout">
        <!-- <div v-show="isLoading" class="fixed inset-0 z-[9999]">
            <Preloader />
        </div>         -->
        <Navbar>
            <NuxtLink 
                to="/" 
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :delay="250"
                :hovered="{ scale: 1.1 }"
                class="logo flex items-center justify-center">
                <NuxtImg src="/logo.png" alt="" class="w-[60px] h-[60px] animate-bounceSlow" />
                <span class="mt-[-7px]">Cisco</span>
            </NuxtLink>
            <div class="flex w-[100%] justify-between pb-[.3rem]">
                <ul class="flex items-center gap-[1.45rem]">
                    <li 
                        v-for="(item, index) in navItems" 
                        :key="item.label"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, scale: 1 }"
                        :delay="250 + (index + 1) * 100"
                        class="menu__item"
                        :class="{ 'menu__item': true, active: isActive(item.link) }">
                        <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
                        <span class="underline"></span>
                    </li>
                </ul>
                <div>
                    <div v-if="!isLoggedIn" class="flex items-center gap-[.8rem]">
                        <div
                            v-for="(button, index) in navButtons" 
                            :key="button.label"
                            v-motion
                            :initial="{ opacity: 0 }"
                            :enter="{ opacity: 1, scale: 1 }"
                            :delay="250 + (navItems.length + index + 4.5) * 100"
                            >
                            
                            <UButton 
                                class="transition-all ease-out duration-300"
                                :to="button.link"
                                size="md"
                                :variant="button.variant"
                                :ui="button.ui">
                                {{ button.label }}
                            </UButton>
                        </div>
                    </div>
                    <div v-else>
                        <span>{{ userName }}</span>
                    </div>
                </div>
            </div>
        </Navbar>

        <div class="lg:pt-[90px] md:pt-[130px] pt-[80px]" />
        <slot />

        <Footer/>
    </div>
</template>

<script setup lang="ts">
import { type Ref, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';

interface NavItem {
    label: string;
    link: string;
};

interface NavButton {
    label: string;
    link: string;
    variant: 'outline' | 'solid';
    ui: {
        rounded: string;
    };
};

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const userName = computed(() => userStore.userInfo?.name || '');

const navItems: Ref<NavItem[]> = ref([
    {
        label: 'Trang Chủ', 
        link: '/', 
    },
    {
        label: 'Luận Án', 
        link: '/thesis', 
    },
    { 
        label: 'Sinh Viên', 
        link: '/students', 
    },
    { 
        label: 'Giảng Viên', 
        link: '/professors', 
    },
]);

const navButtons: Ref<NavButton[]> = ref([
    {
        label: 'Đăng Nhập',
        link: '/login',
        variant: 'outline',
        ui: { rounded: 'rounded-full' }
    },
    {
        label: 'Đăng Ký',
        link: '/signup',
        variant: 'solid',
        ui: { rounded: 'rounded-full' }
    }
]);

const router = useRouter();

const isActive = (link: string): boolean => {
    return router.currentRoute.value.path === link;
};

const isLoading = ref(true);

watch(router.currentRoute, (newRoute, oldRoute) => {
    if (newRoute !== oldRoute) {
        isLoading.value = true;
    }
});

setTimeout(() => {
    isLoading.value = false;
}, 2000);

</script>

<style scoped>

.menu__item,
.menu__item.active {
    @apply relative transition text-[14px] ease duration-[250ms] hover:text-[rgb(0,220,130)];
}

.menu__item.active {
    @apply text-[rgb(0,220,130)];
}

.menu__item:hover .underline,
.menu__item.active .underline {
    width: 100%;
}

.underline {
    @apply absolute bottom-[-1px] left-0 h-[1px] bg-[rgb(0,220,130)] transition-all ease-out duration-300;
    width: 0;
}

.logo span {
    @apply text-[24px] font-semibold;
}

</style>