<template>
  <button>

  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Default',
});

</script>

<style scoped>
    
</style>