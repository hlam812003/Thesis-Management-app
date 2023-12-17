<template>
    <Body>
        <MainLayout>

            <section class="flex w-full h-full">
                <div class="w-1/4 p-4 border-r space-y-2">

                    <button @click="changeSection('0')" class="w-full bg-gray-200 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">User</button>
                    <button @click="changeSection('1')" class="w-full bg-gray-200 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">External</button>
                    <button @click="changeSection('2')" class="w-full bg-gray-200 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">University</button>              
                </div>
                
                <div class="w-3/4 p-4">                    
                     <component :is="components[currentIndex]" />
                </div>

            </section>

        </MainLayout>
    </Body>
</template>

<script setup>
import AdminUserTab from '~/components/admin/AdminUserTab.vue';
import AdminUniTab from '~/components/admin/AdminUniTab.vue';
import AdminExternalTab from '~/components/admin/AdminExternalTab.vue';
import MainLayout from '~/layouts/MainLayout.vue'; 
import { ref, shallowRef, defineAsyncComponent } from 'vue'

// Định nghĩa một đối tượng chứa các component động
const components = [
   defineAsyncComponent(() => import('../components/admin/AdminUserTab.vue')),
   defineAsyncComponent(() => import('../components/admin/AdminExternalTab.vue')),
   defineAsyncComponent(() => import('../components/admin/AdminUniTab.vue')),
]
// Định nghĩa một biến để lưu trữ tên của component động
const currentIndex = ref(0)

// Định nghĩa một hàm để thay đổi chỉ số của component động
const changeSection = (index) => {
  console.log(`Change section to: ${index}`);
  currentIndex.value = index
}

useHead({
    title: 'Admin',
})

</script>

  