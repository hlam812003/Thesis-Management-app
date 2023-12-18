<template>
  <div class="flex space-y-10">
      <!-- delete external User -->
      <div class="flex items-center">
        <div class="mb-4">
          <label for="userId" class="block text-sm font-medium text-gray-700">User ID:</label>
          <input
            v-model="userId"
            type="text"
            id="userId"
            name="userId"
            class="mt-1 p-2 border border-gray-300 rounded-md text-green-500 w-full"
          />
        </div>
            <button @click="deleteUser" class="px-4 py-2 bg-red-500 text-white rounded-md">Delete User</button>
        </div>
  </div>

  <div class="flex flex-col space-y-6 ">
      <div class="grid grid-cols-2 gap-4 ">
        <!-- active -->
        <div class="mb-4 flex">
          <label for="userIdAU" class="flex text-green-500 items-start ">User ID:</label>
          <input v-model="userIdU" type="text" id="userIdAU" class="w-full mt-2 p-2 border border-gray-300 rounded mt-4 text-green-500" />
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
      <button @click="updateRole" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Update Role</button>

      <div v-if="UMessage" class="mt-4 text-green-500">
        {{ UMessage }}
      </div>
  </div>
  <div class="flex space-y-10">

  </div>
    
</template>

<script setup lang="ts" >
  import { ref } from 'vue';
  import adminService from '~/services/AdminService';

  //delete user
  const userId = ref('');
  const deleteUser = async () => {
    console.log('User deleted id value ' + userId.value);
  try {
    await adminService.deleteUserbyID(userId.value);
    console.log('User deleted id value ' + userId.value);
    // Optionally, you can perform additional actions after deletion.
    console.log('User deleted successfully.');
    alert('User deleted successfully!');
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Error deleting user!');
  }
  };

  const userIdU = ref('');
  const UMessage = ref('');
  const selectedRole = ref(''); // Holds the selected role
  const updateRole = async () => {
  try {
    const result = await adminService.updateUser(userIdU.value, selectedRole.value);
    console.log(result); // Log the server response if needed

    // Set the update message based on the server response
    UMessage.value = result.message || 'Role updated successfully';
  } catch (error) {
    console.error('Error updating role:', error);
    // Handle error, show a message, etc.
    UMessage.value = 'Error updating role';
  }
};
</script>