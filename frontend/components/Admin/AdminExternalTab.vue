<template>
  <div class="w-3/4 p-4">
    <div class="mt-4">
              <h2>Update Area external </h2>
              <!-- Textboxes for user input -->
              <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="externalData.email" type="email" id="email" name="email" class="mt-1 p-2 border rounded-md w-full" style="color: black;">
              </div>

              <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input v-model="externalData.password" type="password" id="password" name="password" class="mt-1 p-2 border rounded-md w-full" style="color: black;">
              </div>

              <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model="externalData.name" type="text" id="name" name="name" class="mt-1 p-2 border rounded-md w-full" style="color: black;" >
              </div>

              <div class="mb-4">
              <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname</label>
              <input v-model="externalData.lastname" type="text" id="lastname" name="lastname" class="mt-1 p-2 border rounded-md w-full" style="color: black;" >
              </div>

              <!-- Button to trigger the createExternal function -->
              <button @click="createExternal" class="px-4 py-2 bg-blue-500 text-white rounded-md">Create External User</button>
     </div>

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

          <div v-else>
              <p>No external users found.</p>
          </div>
      </div>
</div>

<!-- delete external User -->
<div class="flex items-center">
  <div class="mb-4">
    <label for="externald" class="block text-sm font-medium text-gray-700">User ID:</label>
    <input
      v-model="externald"
      type="text"
      id="externald"
      name="externald"
      class="mt-1 p-2 border border-gray-300 rounded-md text-green-500 w-full"
    />
  </div>
      <button @click="deleteUser" class="px-4 py-2 bg-red-500 text-white rounded-md">Delete User</button>
  </div>

  <div class="">
     <component :is="ExternalCURD" />
  </div>
  
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import adminService, { type ExternalData } from '~/services/AdminService';
import ExternalCURD from '~/components/admin/ExternalCRUD/ExternalCRUDTab.vue';

const externalData = ref<ExternalData>({
  email: '',
  password: '',
  name: '',
  lastname: '',
});

const createExternal = async () => {
  console.log("adminService type: ", typeof adminService);
  console.log("this is adminservice " + adminService); // Log the adminService object
  try {
    const response = await adminService.createExternal(externalData.value);
    console.log(response);
    if (response.email && response.name && response.lastname && response.role && response.active && response._id) {
      alert('External user created successfully!');
    } else {
      alert('Some user details are missing.');
    }
  } catch (error) {
    console.error(error);
    alert('Error creating external user. Please try again.');
  }
};

  const Allexternals = ref({ docs: [] , count: 0, pages: 0});
  const currentPage = ref(1);
  const fetchData = async (page: number, decrement = false) => {
  try {
    const data = await adminService.getAllExternals(page);
    
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

  const externald = ref('');
  const deleteUser = async () => {
    console.log('User deleted id value ' + externald.value);
  try {
    await adminService.deleteExternal(externald.value);
    console.log('User deleted id value ' + externald.value);
    // Optionally, you can perform additional actions after deletion.
    console.log('User deleted successfully.');
    alert('User deleted successfully!');
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Error deleting user!');
  }
  };
  onMounted(() => {
    fetchData(currentPage.value);
  });
</script>