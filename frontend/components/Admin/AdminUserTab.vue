<template>
    <div class="w-3/4">
      <div class="mt-4">
        <h2>Update Area user</h2>
      </div>
    </div>

    <!-- show all external user -->
  <div class="flex items-center">
      <div>
          <div v-if="AllUsers.docs && AllUsers.docs.length > 0">
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
                  <tr v-for="user in AllUsers.docs" :key="user.email" class="hover:bg-purple-100">
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
                  <button @click="fetchData(currentPage + 1 , false)" :disabled="currentPage === AllUsers.pages" class="px-2 py-1 bg-blue-500 text-white space-x-2">Next</button>
              </div>
          </div>

          <div v-else>
              <p>No users found.</p>
          </div>
      </div>
</div>
<div class="h-full">
     <component :is="UserCURD" />
  </div>
</template>

<script setup lang="ts" >
  import { ref, onMounted } from 'vue';
  import adminService from '~/services/AdminService';
  import UserCURD from '~/components/admin/UserCRUD/UserCRUDTab.vue';

  

  const AllUsers = ref({ docs: [] , count: 0, pages: 0});
  const currentPage = ref(1);
  const fetchData = async (page: number, decrement = false) => {
    try {
      const data = await adminService.getAllUsers(page);
      
      if (decrement && currentPage.value > 1) {
        currentPage.value--;
      }
      if (!decrement && currentPage.value < AllUsers.value.pages) {
        currentPage.value++;
      }
      AllUsers.value = data;
      console.log("cr page: ", currentPage.value);
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(() => {
    fetchData(currentPage.value);
  });



</script>