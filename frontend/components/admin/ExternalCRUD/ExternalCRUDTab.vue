<template>
    <div class="flex space-y-10">
        
        <div class="flex space-y-10">
        <!-- Nội dung của Component Con ở đây -->
        <p>External not active</p>
        </div>

        <!-- show all external user -->
        <div class="flex items-center">
            <div>
                <div v-if="Allexternals.docs && Allexternals.docs.length > 0">
                <!-- Display external user data in a table -->
                <table class="min-w-full border border-collapse">
                    <thead>
                        <tr>
                        <th class="py-2 px-4 bg-gray-200 text-gray-600">Email</th>
                        <th class="py-2 px-4 bg-gray-200 text-gray-600">Name</th>
                        <th class="py-2 px-4 bg-gray-200 text-gray-600">Lastname</th>
                        <th class="py-2 px-4 bg-gray-200 text-gray-600">Role</th>
                        <th class="py-2 px-4 bg-gray-200 text-gray-600">Active</th>
                        <th class="py-2 px-4 bg-gray-200 text-gray-600">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in Allexternals.docs" :key="user.email" class="hover:bg-purple-100">
                        <td class="py-2 px-4 text-green-500">{{ user.email }}</td>
                        <td class="py-2 px-4 text-green-500">{{ user.name }}</td>
                        <td class="py-2 px-4 text-green-500">{{ user.lastname }}</td>
                        <td class="py-2 px-4 text-green-500">{{ user.role }}</td>
                        <td class="py-2 px-4 text-green-500">{{ user.active }}</td>
                        <td class="py-2 px-4 text-green-500">{{ user._id }}</td>
                        </tr>
                    </tbody>
                </table>

                    <!-- Pagination controls -->
                    <div class="mt-4 flex items-center space-x-4">

                        <button @click="fetchData(currentPage - 1, true)" :disabled="currentPage === 1" class="px-2 py-1 bg-blue-500 text-white space-x-2" >Previous</button>
                        <button @click="fetchData(currentPage + 1 , false)" :disabled="currentPage === Allexternals.pages" class="px-2 py-1 bg-blue-500 text-white space-x-2">Next</button>
                    </div>
                </div>

                <div v-else >
                    <p class="flex">No external users found.</p>
                </div>
            </div>
        </div>
    </div>  
  </template>
 
<script setup lang="ts">

import { ref, onMounted } from 'vue';
import adminService from '~/services/AdminService';    
const Allexternals = ref({ docs: [] , count: 0, pages: 0});
const currentPage = ref(1);

const fetchData = async (page: number, decrement = false) => {
  try {
    const data = await adminService.getAllExternal_notActive(page);
    console.log(" page: ", data.pages);
    if (decrement && currentPage.value > 1) {
      currentPage.value--;
    } 
    if (!decrement && currentPage.value < Allexternals.value.pages) {
      currentPage.value++;
    }
    Allexternals.value = data;
    console.log("cr page: ", currentPage.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData(currentPage.value);
});

</script>