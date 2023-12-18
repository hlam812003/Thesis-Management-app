<template>
    <div class="w-[100%] h-[15.5rem]">
        <swiper :modules="[FreeMode]" :space-between="30" :free-mode="true" class="mySwiper">
            <swiper-slide v-for="(slideItems, index) in slides" :key="index">
                <div v-for="item in slideItems" :key="item.id" class="thesis__item">
                    <div v-if="loading" class="animate-pulse w-full h-full bg-gray-300"></div>
                    <template v-else>
                        <img
                            :src="item.imageUrl"
                            class="w-full"
                            @error="handleImageError"
                            :data-id="item.id"
                            :alt="item.title"
                        />
                        <div class="absolute top-0 left-0 w-full h-full bg-zinc-700/75 opacity-0 transition-all">
                            <div class="relative w-full h-full flex justify-center items-center flex-col gap-[6.5px]">
                            <div class="absolute top-5 left-3 flex items-center gap-1">
                                <Icon icon="carbon:user"/>
                                <span class="text-white text-[.75rem] text-[Roboto]">{{ item.author }}</span>
                            </div>
                            <span class="text-white font-bold text-[1.05rem]">{{ item.title }}</span>
                            <div class="flex items-center gap-1"> 
                                <Icon icon="iconamoon:file-thin" class="text-[.85rem]"/>
                                <span class="text-white font-light uppercase text-[.65rem] text-[Roboto]">pdf</span>
                            </div>
                            <div class="absolute bottom-[13px] pl-3 pr-3 w-full flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <Icon icon="carbon:time"/>
                                    <span class="text-white text-[.75rem] text-[Roboto]">{{ item.date }}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <Icon icon="carbon:view"/>
                                    <span class="text-white text-[.75rem] text-[Roboto]">{{ item.views }}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </template>
                </div>
            </swiper-slide>
      </swiper>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import { Icon } from '@iconify/vue';
import 'swiper/css/bundle';

interface ThesisData {
    id?: number;
    title?: string;
    author?: string;
    views?: number;
    date?: string;
    imageUrl?: string;
};

const thesisData: Ref<ThesisData[]> = ref([
    { 
        id: 1, 
        title: 'Gravity Function', 
        author: 'Tran Nhan Nghia', 
        views: 20, 
        date: '09/12/2023', 
        imageUrl: 'https://vietkieu.com.vn/wp-content/uploads/2022/04/1_bai-tieu-luan-la-gi.png',
    },
    { 
        id: 2, 
        title: 'Quantum Mechanics', 
        author: 'Nguyen Van A', 
        views: 15, 
        date: '10/10/2023', 
        imageUrl: 'https://path-to-image-2' 
    },
    { 
        id: 3, 
        title: 'Quantum Mechanics', 
        author: 'Nguyen Van A', 
        views: 15, 
        date: '10/10/2023', 
        imageUrl: 'https://path-to-image-2' 
    },
    { 
        id: 4, 
        title: 'Quantum Mechanics', 
        author: 'Nguyen Van A', 
        views: 15, 
        date: '10/10/2023', 
        imageUrl: 'https://path-to-image-2' 
    },
    { 
        id: 5, 
        title: 'Quantum Mechanics', 
        author: 'Nguyen Van A', 
        views: 15, 
        date: '10/10/2023', 
        imageUrl: 'https://path-to-image-2' 
    },
    { 
        id: 6, 
        title: 'Quantum Mechanics', 
        author: 'Nguyen Van A', 
        views: 15, 
        date: '10/10/2023', 
        imageUrl: 'https://path-to-image-2' 
    },
    { 
        id: 7, 
        title: 'Quantum Mechanics', 
        author: 'Nguyen Van A', 
        views: 15, 
        date: '10/10/2023', 
        imageUrl: 'https://path-to-image-2' 
    },
]);

const getRandomTheses = (count: number) => {
    const shuffled = [...thesisData.value].sort(() => 0.5 - Math.random());
    let grouped = [];
    for (let i = 0; i < count; i += 6) {
        grouped.push(shuffled.slice(i, i + 6));
    }
    return grouped;
};

const handleImageError = (e: Event): void => {
    const imageElement = e.target as HTMLImageElement;
    if (imageElement) {
        imageElement.src = 'https://as1.ftcdn.net/v2/jpg/05/04/28/96/1000_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg';
    }
};

const slides = ref<ThesisData[][]>([]);
const loading = ref(true);

onNuxtReady(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  slides.value = getRandomTheses(12);
  loading.value = false;
});

</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    width: 100% !important;
    height: 100% !important;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thesis__item {
    @apply w-[11.5rem] h-full cursor-pointer relative transition-all;
    &:hover div {
        @apply opacity-100;
    }
}
</style>