<template>
    <Body>
        <MainLayout>
            <section class="w-full h-screen px-44 py-[3.5rem]">
                <h2 class="text-[1.7rem] font-bold desc__content mb-4 font-['Raleway'] capitalize">luận văn - báo cáo</h2>
                <div class="w-full h-[.5px] bg-[#ffffffc0] rounded-full mb-8"></div>
                <div class="w-full">
                    <div class="mb-7">
                        <div class="w-full flex items-center justify-between mb-1">
                            <h3 class="text-[1.3rem] font-bold desc__content mb-4 font-['Raleway']">Các luận văn phổ biến</h3>
                            <UButton
                                class="transition-all ease-out duration-300 flex items-center justify-center mt-[-1.35rem]"
                                size="md"
                                variant="outline"
                                :ui="{ rounded: 'rounded-full' }">
                                <span class="font-['Roboto'] uppercase text-[.75rem] font-bold">xem thêm</span>
                            </UButton>
                        </div>
                        <DocumentSlide />
                    </div>
                    <div class="mb-7">
                        <div class="w-full flex items-center justify-between mb-1">
                            <h3 class="text-[1.3rem] font-bold desc__content mb-4 font-['Raleway']">Tất cả luận văn</h3>
                            <UButton
                                class="transition-all ease-out duration-300 flex items-center justify-center mt-[-1.35rem]"
                                size="md"
                                variant="outline"
                                :ui="{ rounded: 'rounded-full' }">
                                <span class="font-['Roboto'] uppercase text-[.75rem] font-bold">xem thêm</span>
                            </UButton>
                        </div>
                        <DocumentSlide />
                    </div>
                </div>
            </section>
        </MainLayout>
    </Body>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue'; 
import DocumentSlide from '~/components/Thesis/DocumentSlide.vue';
// import Category from '~/components/Thesis/Category.vue';


useHead({
    title: 'Luận Án',
})
</script>

<style scoped>

</style>