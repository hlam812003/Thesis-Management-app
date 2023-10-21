<template>
    <section id="HomeHeader" class="w-full h-[590px] flex items-center justify-center relative">
        <div class="text-center">
            <h1 
                v-motion
                :initial="{ opacity: 0, y: 60 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :delay="1400"
                class="font-['Raleway'] text-[4.62rem] font-bold">
                Quản Lý 
                <span class="text-[rgb(0,220,130)] underline decoration-wavy underline-offset-[10px]">Luận Án</span>
            </h1>
            <p 
                v-motion
                :initial="{ opacity: 0, y: 80 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :delay="1600"
                class="font-['Playfair_Display'] mt-[12px] text-[1.25rem] font-normal text-[rgba(255,255,255,0.65)]">Nơi quản lý và theo dõi tiến trình của các luận án.</p>
            <div class="flex justify-center mt-[2.5rem]">
                <UButton
                    v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :enter="{ opacity: 1, y: 0, scale: 1 }"
                    :delay="1800" 
                    class="font-['Roboto'] transition-all ease-out duration-300 font-semibold"
                    icon="i-heroicons-play"
                    size="xl"
                    variant="solid"
                    :ui="{ rounded: 'rounded-full' }">
                    Khám Phá
                </UButton>
            </div>
        </div>
    </section>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'; 

</script>

<style scoped>
#HomeHeader::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("/ele1.png") no-repeat;
    background-size: 45% 80%;
    background-position: -30% center;
    color: rgba(255, 255, 255, 0.6);
    animation: shakeBefore 5s infinite;
}

#HomeHeader::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("/ele2.png") no-repeat;
    background-size: 50% 80%;
    background-position: 140% 120%;
    animation: shakeAfter 5s infinite;
}

@keyframes shakeBefore {
    0% { background-position: -30% center; }
    25% { background-position: -32% 40%; } 
    50% { background-position: -30% 30%; }  
    75% { background-position: -28% center; }  
    100% { background-position: -30% center; }
}

@keyframes shakeAfter {
    0% { background-position: 140% 120%; }
    25% { background-position: 138% 118%; }
    50% { background-position: 140% 120%; }
    75% { background-position: 142% 122%; }
    100% { background-position: 140% 120%; }
}

</style>