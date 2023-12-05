<template>
    <div id="cards" class="w-full flex items-center justify-center flex-wrap gap-[36px]"
        data-aos="fade-up" 
        data-aos-duration="500"
        data-aos-easing="ease">
        <div class="card" v-for="card in cardsList" :key="card.title">
            <div class="card__content">
                <div class="card__image">
                  <Icon :icon="card.icon" class="main__icon"/>
                </div>
                <div class="card__info--wrapper">
                    <div class="card__info">
                        <Icon :icon="card.icon" class="small__icon"/>
                        <div class="card__info--title">
                            <h3 class="font-[Roboto]">{{ card.title }}</h3>  
                            <h4 class="font-[Roboto]">{{ card.subtitle }}</h4>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { Icon } from '@iconify/vue';

interface CardItem {
    title: string;
    subtitle: string;
    icon: string;
};

const cardsList: Ref<CardItem[]> = ref([
    { 
        title: 'Chủ Đề Đồ Án', 
        subtitle: 'Khám phá lĩnh vực nghiên cứu.', 
        icon: 'mdi:scroll' 
    },
    { 
        title: 'Nộp Đồ Án', 
        subtitle: 'Nộp và theo dõi tiến độ.', 
        icon: 'mdi:cloud-upload' 
    },
    { 
        title: 'Kết Nối Cố Vấn', 
        subtitle: 'Hỗ trợ từ người hướng dẫn.', 
        icon: 'mdi:user-check'
    },
    { 
        title: 'Tài Liệu Nghiên Cứu', 
        subtitle: 'Truy cập công trình, tạp chí.', 
        icon: 'basil:book-open-solid' 
    },
    { 
        title: 'Cộng Tác Nghiên Cứu', 
        subtitle: 'Hợp tác cùng đồng nghiệp.', 
        icon: 'mdi:users' 
    },
    { 
        title: 'Chuẩn Bị Bảo Vệ', 
        subtitle: 'Tài liệu và mẹo vặt.', 
        icon: 'game-icons:graduate-cap' 
    }
]);

const cards = ref<HTMLElement | null>(null);

onNuxtReady(() => {
  cards.value = document.getElementById('cards');

  if (cards.value) {
    cards.value.onmousemove = (e: MouseEvent) => {
      const cardElements = Array.prototype.slice.call(cards.value?.getElementsByClassName('card'));
      for (const card of cardElements) {
        if (card instanceof HTMLElement) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };
  };
});

</script>

<style scoped>
#cards:hover > .card::after {
    opacity: 1;
}

.card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    height: 260px;
    flex-direction: column;
    position: relative;
    width: 300px;  
    border: 1px solid rgba(255, 255, 255, .1);
}

.card:hover::before {
    opacity: 1;
}

.card::before,
.card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
}

.card::before {
    background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),rgba(0,220,130, 0.15), transparent 40%);
    z-index: 3;
}

.card::after {  
    background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgb(0,220,130), transparent 40%);
    z-index: 1;
}

.card > .card__content {
    background-color: rgb(23, 23, 23);
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
}

i {  
    color: rgb(240, 240, 240);
}

.card__image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
}

.card__image > .main__icon {
    font-size: 6em;
    opacity: 0.25;
}

.card__info--wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
}

.card__info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
}

.card__info > .small__icon {  
    font-size: 1em;
    height: 20px;
    line-height: 20px;
}

.card__info--title > h3 {
    font-size: 1.1em;
    line-height: 20px;
}

.card__info--title > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
}
  
</style>