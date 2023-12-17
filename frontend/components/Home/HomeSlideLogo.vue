<template>
  <div class="scroller" data-direction="right" data-speed="fast" ref="scrollerElement">
    <div class="scroller__inner">
      <NuxtImg v-for="logo in logoItems" :key="logo.id" :src="logo.src" alt="Logo" class="logo__item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

interface LogoItem {
  id?: number;
  src?: string;
};

const logoItems: Ref<LogoItem[]> = ref([
  { id: 1, src: '/team/logo1.png' },
  { id: 2, src: '/team/logo2.png' },
  { id: 3, src: '/team/logo3.png' },
  { id: 4, src: '/team/logo4.png' },
  { id: 5, src: '/team/logo5.png' },
  { id: 6, src: '/team/logo6.png' },
]);

const scrollerElement = ref<HTMLElement | null>(null);

onNuxtReady(() => {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
});

const addAnimation = (): void => {
  const scroller = scrollerElement.value;
  if (scroller) {
    scroller.setAttribute("data-animated", "true");
    const scrollerInner = scroller.querySelector(".scroller__inner");

    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }
};

</script>

<style scoped>
.scroller {
  max-width: 1460px;
}

.logo__item {
  height: 8rem;
  object-fit: cover;
}
  
.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}
  
.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}
  
.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-animated="true"]:hover .scroller__inner {
  animation-play-state: paused;
}
  
.scroller[data-direction="right"] {
--_animation-direction: reverse;
}
  
.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}
  
.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}
  
.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}
  
@keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
  }
}
</style>