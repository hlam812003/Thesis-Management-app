<template>
    <div class="w-[100%] h-[15.5rem]">
        <swiper :modules="[FreeMode]" :space-between="30" :free-mode="true" class="mySwiper">
            <swiper-slide v-for="(slideItems, index) in slides" :key="index">
                <div v-for="thesis in slideItems" :key="thesis._id" class="thesis__item">
                  <div v-if="loading" class="animate-pulse w-full h-full bg-gray-300"></div>
                    <template v-else>
                        <img :src="thesis.image" class="w-full" @error="handleImageError" :alt="thesis.title" />
                        <div class="absolute top-0 left-0 w-full h-full bg-zinc-700/75 opacity-0 transition-all">
                            <div class="relative w-full h-full flex justify-center items-center flex-col gap-[6.5px]">
                            <div class="absolute top-5 left-3 flex items-center gap-1">
                                <Icon icon="carbon:user"/>
                                <span class="text-white text-[.75rem] text-[Roboto]">{{ thesis.professor }}</span>
                            </div>
                            <span class="text-white font-bold text-[1.05rem]">{{ thesis.title }}</span>
                            <div class="flex items-center gap-1"> 
                                <Icon icon="iconamoon:file-thin" class="text-[.85rem]"/>
                                <span class="text-white font-light uppercase text-[.65rem] text-[Roboto]">pdf</span>
                            </div>
                            <div class="absolute bottom-[13px] pl-3 pr-3 w-full flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <Icon icon="carbon:time"/>
                                    <span class="text-white text-[.75rem] text-[Roboto]">{{ thesis.created_time }}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <Icon icon="carbon:view"/>
                                    <span class="text-white text-[.75rem] text-[Roboto]">{{ thesis.views }}</span>
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
import { useThesisStore, type ThesisInfo } from '~/stores/Thesis';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import { Icon } from '@iconify/vue';
import 'swiper/css/bundle';

const thesisStore = useThesisStore();
const slides = ref<ThesisInfo[][]>([]);
const loading = ref(true);

const groupTheses = (theses: ThesisInfo[], perSlide: number) => {
    let grouped = [];
    for (let i = 0; i < theses.length; i += perSlide) {
        grouped.push(theses.slice(i, i + perSlide));
    }
    return grouped;
};

const handleImageError = (e: Event): void => {
    const imageElement = e.target as HTMLImageElement;
    if (imageElement) {
        imageElement.src = 'https://as1.ftcdn.net/v2/jpg/05/04/28/96/1000_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg';
    }
};

onNuxtReady(async () => {
  await thesisStore.fetchTheses();
  slides.value = groupTheses(thesisStore.theses, 6);
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