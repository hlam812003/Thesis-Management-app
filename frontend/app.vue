<template>
  <div>
    <NuxtPage />

    <UNotifications />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo2.png'
    }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Cisco` : 'Unknown Page';
  },
  bodyAttrs: {
    class: 'test'
  },
});

useSeoMeta({
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

</script>

<style>

body.test {
  background: #000000;
}

html,
body,
#app,
.container {
  height: 100%;
}

</style>