<template>
    <div class="profile-container">
      <header class="header">
        <h1>{{ name }}</h1>
        <p>{{ title }}</p>
      </header>
      <div class="profile-content">
        <div class="profile-image">
          <img :src="imageUrl" alt="Profile Image">
        </div>
        <div class="profile-info">
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Phone:</strong> {{ phone }}</p>
          <p><strong>Address:</strong> {{ address }}</p>
          <p><strong>Bio:</strong> {{ bio }}</p>
        </div>
      </div>
      <footer class="footer">
        <p>&copy; {{ currentYear }} All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';


  export default {
    setup() {
      const name = ref('John Doe');
      const title = ref('Software Developer');
      const imageUrl = ref('https://via.placeholder.com/150');
      const email = ref('john.doe@example.com');
      const phone = ref('123-456-7890');
      const address = ref('123 Main St, City, Country');
      const bio = ref('A passionate software developer with a love for coding and problem-solving.');
      const currentYear = new Date().getFullYear();
        
      return {
        name,
        title,
        imageUrl,
        email,
        phone,
        address,
        bio,
        currentYear
      };
    }
  };
  </script>
  
  <style scoped>
  .profile-container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .header h1 {
    color: #333;
    margin-bottom: 5px;
  }
  
  .header p {
    color: #666;
  }
  
  .profile-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  
  .profile-image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .profile-info {
    flex: 1;
  }
  
  .profile-info p {
    margin: 10px 0;
    color: #444;
  }
  
  .footer {
    text-align: center;
    margin-top: 20px;
    color: #888;
  }
  </style>