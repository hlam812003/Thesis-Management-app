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
    
    <div class="flex flex-col space-y-6 ">
      <div class="grid grid-cols-2 gap-4 ">
        <!-- active -->
        <div class="mb-4 flex">
          <label for="userIdAU" class="flex text-green-500 items-start ">User ID:</label>
          <input v-model="userIdAU" type="text" id="userIdAU" class="w-full mt-2 p-2 border border-gray-300 rounded mt-4 text-green-500" />
        </div>

        <!-- update role -->
        <div class="mb-4 flex">
          <label for="role" class="flex text-green-500 items-start">Select Role:</label>
          <select v-model="selectedRole" id="role" class="mt-2 p-2 border border-gray-300 rounded mt-4 text-green-500">
            <option value="Guest">Guest</option>
            <option value="Admin">Admin</option>
            <option value="Professor">Professor</option>
            <option value="Student">Student</option>
            <option value="Secretariat">Secretariat</option>
          </select>
        </div>
      </div>
      <button @click="activateUser" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Activate User</button>
      <button @click="updateRole" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Update Role</button>

      <div v-if="AUMessage" class="mt-4 text-green-500">
        {{ AUMessage }}
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

const userIdAU = ref('');
const AUMessage = ref('');
const activateUser = async () => {
  try {
    const result = await adminService.activeExternal(userIdAU.value);
    console.log(result); // Log the server response if needed

    // Set the activation message based on the server response
    AUMessage.value = result.message || 'External user activated successfully';
  } catch (error) {
    console.error('Error activating user:', error);
    // Handle error, show a message, etc.
    AUMessage.value = 'Error activating external user';
  }
};


const selectedRole = ref(''); // Holds the selected role
const updateRole = async () => {
  try {
    const result = await adminService.updateExternal(userIdAU.value, selectedRole.value);
    console.log(result); // Log the server response if needed

    // Set the update message based on the server response
    AUMessage.value = result.message || 'Role updated successfully';
  } catch (error) {
    console.error('Error updating role:', error);
    // Handle error, show a message, etc.
    AUMessage.value = 'Error updating role';
  }
};


onMounted(() => {
  fetchData(currentPage.value);
});

</script>