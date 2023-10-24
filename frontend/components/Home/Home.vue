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
    </Scrollbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Scrollbar, type ScrollbarOptions } from "@smooth-scrollbar-contrib/vue-test"

const words: string[] = ['luận án', 'đồ án', 'khóa luận', 'luận văn', 'chuyên đề', 'báo cáo', 'tiểu luận'];
const currentWord = ref<string>('luận án');
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

const scrollbarRef = ref<InstanceType<typeof Scrollbar> | null>(null)

const scrollbarOptions: ScrollbarOptions = {
  delegateTo: typeof document !== 'undefined' ? document : null,
  damping: 0.2
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