<template>
  <div class="h-full w-full">
    <div class="flex items-center">
        <div class="mb-4">
          <label for="UniName" class="block w-full text-sm font-medium text-gray-700">University Name:</label>
          <input
            v-model="UniName"
            type="text"
            id="UniName"
            name="UniName"
            class="mt-1 p-2 border border-gray-300 rounded-md text-green-500 w-full"
          />
        </div>
            
        </div>   
        <button @click="CreatUniversity " class="flex px-4 py-2 space-x-10 bg-red-500 text-white rounded-md">Create</button>   

        <div class="flex items-center">
      <div class="mb-4">
        <label for="StartDate" class="block w-full text-sm font-medium text-gray-700">Start Date:</label>
        <input
          v-model="startDate"
          type="date"
          id="StartDate"
          name="StartDate"
          class="mt-1 p-2 border border-gray-300 rounded-md text-green-500 w-full"
        />
      </div>
      <div class="mb-4">
        <label for="EndDate" class="block w-full text-sm font-medium text-gray-700">End Date:</label>
        <input
          v-model="endDate"
          type="date"
          id="EndDate"
          name="EndDate"
          class="mt-1 p-2 border border-gray-300 rounded-md text-green-500 w-full"
        />
      </div>
    </div>
    <button @click="handleApplicationPeriod" class="flex px-4 py-2 space-x-10 bg-red-500 text-white rounded-md">Submit</button>
    <div v-if="resultMessage">
      <p>{{ resultMessage }}</p>
    </div>
  </div>

  

  
</template>
      
<script setup>
  import { ref, onMounted } from 'vue';
  import adminService from '~/services/AdminService';
      
  const UniName = ref('');

  const CreatUniversity = async () => {
  try {
    
    await adminService.creatUniversity({ name: UniName.value });
    alert('University creat successfully!');
  } catch (error) {
    console.error('Error :', error);
    alert('Error creating University. Please try again.');
  }
  };   
  
  const startDate = ref('');
const endDate = ref('');
const resultMessage = ref('');

const handleApplicationPeriod = async () => {
  try {
    const applicationPeriodData = {
      application_period_start: new Date(startDate.value),
      application_period_end: new Date(endDate.value),
    };

    const result = await adminService.applicationPeriod(applicationPeriodData);
    
    // Assuming the server sends a response with a message property
    resultMessage.value = result.message || 'Request successful!';
  } catch (error) {
    console.error('Error:', error);
    resultMessage.value = 'Error processing request. Please try again.';
  }
};
</script>
      