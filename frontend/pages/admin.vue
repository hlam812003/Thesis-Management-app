<template>
    <Body>
        <MainLayout>

            <section class="flex w-full h-[320px]">
                <div class="w-1/4 p-4 border-r space-y-2">
                    <button @click="changeSection('adminuser')" class="w-full px-4 py-2 bg-gray-200 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">User</button>
                    <button @click="changeSection('adminexternal')" class="w-full px-4 py-2 bg-gray-200 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">External</button>
                    <button @click="changeSection('adminuniversity')" class="w-full px-4 py-2 bg-gray-200 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">University</button>              
                </div>
                
                <div class="w-3/4 p-4">
                    <component :is="state.currentSection" />
                </div>

            </section>

        </MainLayout>
    </Body>
</template>


<script>
import adminuser from '~/components/admin/adminuser.vue';
import adminuniversity from '~/components/admin/adminuniversity.vue';
import adminexternal from '~/components/admin/adminexternal.vue';

export default {
  components: { adminuser, adminuniversity, adminexternal },
}
</script>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'; 
import adminexternal from '~/components/admin/adminexternal.vue';
import adminuser from '~/components/admin/adminuser.vue';
import adminuniversity from '~/components/admin/adminuniversity.vue';

const state = ref({
  currentSection: 'adminuser', // Section mặc định được chọn
});

const changeSection = (section) => {
  console.log(`Change section to: ${section}`);
  state.value.currentSection = section;
};

useHead({
    title: 'Admin',
})
</script>

  