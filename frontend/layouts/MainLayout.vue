<template>
    <div id="MainLayout" class="relative">
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
                <div class="flex items-center gap-[.8rem]">
                    <UTooltip text="Tìm Kiếm">
                        <UButton size="sm" variant="link" @click="isOpen = true" 
                            v-motion
                            :initial="{ opacity: 0, x: -100 }"
                            :enter="{ opacity: 1, x: 0, scale: 1 }"
                            :delay="1000"
                            :hovered="{ scale: 1.1 }"
                            >
                            <Icon icon="iconamoon:search" class="text-[1.2rem] text-white"/>
                        </UButton> 
                    </UTooltip>
                    <UModal v-model="isOpen" prevent-close :ui="{ overlay: { background: 'bg-neutral-950/75 dark:bg-neutral-950/75' } }">
                        <UCard :ui="{ background: 'bg-neutral-900 dark:bg-neutral-900/75', ring: '', divide: 'divide-y divide-neutral-100 dark:divide-zinc-400' }">
                            <template #header>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <Icon icon="iconamoon:search"/>
                                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                            Tìm Kiếm Luận Văn
                                        </h3>
                                    </div>
                                <UButton color="gray" variant="link" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                                </div>
                            </template>
                  
                            <UForm @submit="">
                                <input type="text" class="w-full h-[3rem] outline-none bg-transparent border-0 text-[1.05rem] font-light" placeholder="Tên luận văn bạn cần tìm...">
                            </UForm>
                        </UCard>
                    </UModal>
                    <div v-if="isLoggedIn">
                        <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
                            <UAvatar src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4401.jpg?w=2000" size="sm"/>
                    
                            <template #account="{ item }">
                              <div class="text-left">
                                <p>
                                  Đăng nhập với
                                </p>
                                <p class="truncate font-medium text-gray-900 dark:text-white">
                                  {{ item.label }}
                                </p>
                              </div>
                            </template>
                        
                            <template #item="{ item }">
                              <span class="truncate">{{ item.label }}</span>
                        
                              <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                            </template>
                        </UDropdown>
                    </div>
                    <div v-else class="flex items-center gap-[.8rem]">
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
                </div>
            </div>
        </Navbar>

        <div class="lg:pt-[90px] md:pt-[130px] pt-[80px]" />
        <slot />

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { type Ref, ref, watch, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useUserStore, type UserInfo } from '~/stores/User';

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
const userInfo: ComputedRef<UserInfo | null> = computed(() => userStore.userInfo);

const isOpen: Ref<boolean> = ref(false);

const navItems: Ref<NavItem[]> = ref([
    {
        label: 'Trang Chủ', 
        link: '/', 
    },
    {
        label: 'Luận Văn', 
        link: '/thesis/[id]', 
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

const items = [
  [{
    label: userInfo.value?.email || 'Khách',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Tài Khoản',
    icon: 'i-heroicons-user-circle-solid'
  }], [{
    label: 'Đăng Xuất',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]

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

</style>~/stores/User