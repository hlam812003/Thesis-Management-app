<template>
    <Body>
        <MainLayout>
            <Home></Home>
        </MainLayout>
    </Body>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'; 
import LoadingScreen from '~/components/LoadingScreen/LoadingScreen.vue';

useHead({
    title: 'Trang Chủ',
})
</script>