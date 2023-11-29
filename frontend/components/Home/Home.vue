<template>
    <Scrollbar ref="scrollbarRef" as="div" :scrollbar-options="scrollbarOptions" @mounted="onScrollbarMounted">
        <section id="HomeHeader" class="w-full h-[590px] flex items-center justify-center relative">
            <div class="text-center">
                <h1 
                    v-motion
                    :initial="{ opacity: 0, y: 60 }"
                    :enter="{ opacity: 1, y: 0, scale: 1 }"
                    :delay="1400"
                    class="font-['Raleway'] text-[4.62rem] font-bold">
                    Ứng Dụng
                    <span class="text-[rgb(0,220,130)] underline decoration-wavy underline-offset-[10px]">Cisco</span>
                </h1>
                <p 
                    v-motion
                    :initial="{ opacity: 0, y: 80 }"
                    :enter="{ opacity: 1, y: 0, scale: 1 }"
                    :delay="1600"
                    class="font-['Playfair_Display'] mt-[12px] text-[1.25rem] font-normal text-[rgba(255,255,255,0.65)]">Nơi quản lý và theo dõi tiến trình của các <span class="text-[rgb(0,220,130)] font-bold">{{ currentWord }}<span class="cursor-effect"></span></span> tốt nghiệp.</p>
                <div class="flex justify-center mt-[2.5rem]">
                    <div 
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :enter="{ opacity: 1, y: 0, scale: 1 }"
                        :delay="1800">
                        <UButton
                            class="font-['Roboto'] transition-all ease-out duration-300 font-semibold"
                            icon="i-heroicons-play"
                            size="xl"
                            variant="solid"
                            :ui="{ rounded: 'rounded-full' }"
                            to="#HomeDesc">
                            Khám Phá
                        </UButton>
                    </div>                
                </div>
            </div>
        </section>
        <section id="HomeDesc" class="w-full h-[590px] flex items-center justify-between px-44 py-56 relative gap-20">
            <div class="w-[45%] flex flex-initial items-start flex-col font-['Raleway']">
                <h2 class="text-[1.7rem] font-bold desc__content mb-3"><span class="text-[3.25rem] text-[rgb(0,220,130)] relative">Cisco</span><span class="underline__effect"></span> là gì?</h2>
                <p class="desc__content font-medium leading-[30px]">Ứng dụng quản lý đề tài, đồ án, và dự án tốt nghiệp được thiết kế đặc biệt cho sinh viên. Với giao diện thân thiện, ứng dụng giúp sinh viên nắm bắt, theo dõi và quản lý tiến trình nghiên cứu và thực hiện dự án một cách rõ ràng và hiệu quả.</p>
            </div>
            <div class="w-[55%] flex justify-end">
                <NuxtImg src="/photo.jpg" alt="" class="w-[30rem] h-[20rem] rounded-[1.6rem]"/>
            </div>
        </section>
    </Scrollbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Scrollbar, type ScrollbarOptions } from "@smooth-scrollbar-contrib/vue-test"

const words: string[] = ['luận án', 'đồ án', 'khóa luận', 'luận văn', 'chuyên đề', 'đề tài', 'báo cáo', 'tiểu luận'];
const currentWord = ref<string>('');
let wordIndex: number = 0;
let charIndex: number = 0;

const typeWord = (): void => {
    if (charIndex < words[wordIndex].length) {
        currentWord.value += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWord, 200);
    } else {
        setTimeout(deleteWord, 1000);
    }
};

const deleteWord = (): void => {
    if (charIndex > 0) {
        currentWord.value = currentWord.value.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWord, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 200);
    }
};

onMounted(() => {
    typeWord();
});

const scrollbarRef = ref<InstanceType<typeof Scrollbar> | null>(null);

const scrollbarOptions: ScrollbarOptions = {
    delegateTo: typeof document !== 'undefined' ? document : null,
    damping: 0.05
}

const onScrollbarMounted = (): void => {
    console.log("Scrollbar component has been mounted!");
};

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
.cursor-effect {
    display: inline-block;
    width: .1rem;
    height: 1.25rem;
    position: absolute;
    top: 23%;
    margin-left: .05rem;
    background-color: rgb(0,220,130);
    animation: blink 1s infinite;
}

h2 {
    @apply relative transition ease duration-[250ms];
}

h2:hover .underline__effect {
    width: 30%;
}

.underline__effect {
    @apply absolute bottom-[4.5px] left-0 h-[4px] bg-[rgb(0,220,130)] transition-all ease-out duration-300;
    width: 0;
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

@keyframes blink {
    0%, 49% {
        opacity: 1;
    }
    50%, 100% {
        opacity: 0;
    }
}

</style>