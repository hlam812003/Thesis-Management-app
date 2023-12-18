<template>
    <div>
      <img :src="imageSrc" alt="Thesis Image" v-if="imageSrc" />
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import adminService from '~/services/AdminService';
  
  const imageSrc = ref('');
  
  const showImg = async () => {
    try {
      const result = await adminService.Test();
      if (result && result.images && result.images.data) {
        const base64Image = arrayBufferToBase64(result.images.data);
        imageSrc.value = `data:image/png;base64,${base64Image}`;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    showImg();
  });
  
  function arrayBufferToBase64(arrayBuffer) {
    const binary = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
    return btoa(binary);
  }
</script>
  