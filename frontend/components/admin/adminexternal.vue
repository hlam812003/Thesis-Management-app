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

      <div class="flex">

            <h1>
                  All external users
            </h1>
            <div v-if="externals.docs && externals.docs.length > 0">
                  <!-- Display external user data -->
                  <ul>
                  <li v-for="user in externals.docs" :key="user._id">
                  {{ user.name }} {{ user.lastname }} - {{ user.email }}
                  </li>
                  </ul>

                  <!-- Pagination controls -->
                  <div>
                  <button @click="fetchData(externals.pages, true)" :disabled="currentPage === 1">Previous</button>
                  <span>Page {{ currentPage }} of {{ externals.pages }}</span>
                  <button @click="fetchData(currentPage + 1)" :disabled="currentPage === externals.pages">Next</button>
                  </div>
            </div>

            <div v-else>
                  <p>No external users found.</p>
            </div>
      </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import adminService from '~/services/AdminService';
export default {
  data() {
    return {
      externalData: {
        email: '',
        password: '',
        name: '',
        lastname: '',
      },
    };
  },
  methods: {
    async createExternal() {
      console.log("adminService type: ", typeof adminService);      
      console.log(" this is adminservice " +adminService); // Log the adminService object
      try {
        const response = await adminService.createExternal(this.externalData);
        console.log(response);
        
        alert('External user created successfully!');
      } catch (error) {
        console.error(error);
        
        alert('Error creating external user. Please try again.');
      }
    },
  },



setup() {
      const externals = ref({ docs: [] }); 

      const currentPage = ref(1);

      const fetchData = async (page, decrement = false) => {
      try {
        const data = await adminService.getAllExternals(page);
        externals.value = data;
        if (decrement && currentPage.value > 1) {
          currentPage.value--;
        } else {
          currentPage.value++;
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Call fetchData when the component is mounted
    onMounted(() => {
      fetchData(currentPage.value);
    });

    return { externals, fetchData, currentPage };
  },
};
</script>