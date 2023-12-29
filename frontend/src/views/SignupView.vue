<template>
    <div class="register">
      <div class="container-fluid d-flex align-items-center justify-content-center h-100">
        <div class="card p-4">
          <h2 class="mb-4 text-center">Register</h2>
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="Enter your first name" required>
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Enter your last name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter your email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter your password" required>
            </div>
            <div class="mb-3 form-check">
              <input v-model="isMentor" type="checkbox" class="form-check-input" id="mentorCheckbox">
              <label class="form-check-label" for="mentorCheckbox">I am a mentor</label>
            </div>
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isMentor: false,
      };
    },
    methods: {
      register() {
        const userType = this.isMentor ? 'Mentor' : 'Student';
        alert(`First Name: ${this.firstName}, Last Name: ${this.lastName}, Email: ${this.email}, Password: ${this.password}, User Type: ${userType}`);
      },
    },
  };
  </script>
  
  <style scoped>
    body {
      background-color: #f8f9fa;
    }
  
    .register {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .card {
      max-width: 400px;
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      border-radius: 8px;
    }
  
    .card h2 {
      margin-bottom: 20px;
      text-align: center;
      color: #000; /* Başlık rengi siyah olarak ayarlandı */
    }
  
    .card form {
      display: flex;
      flex-direction: column;
    }
  
    .card form .mb-3 {
      margin-bottom: 15px;
    }
  
    .card form label {
      margin-bottom: 5px;
      color: #000; /* Yazı rengi siyah olarak ayarlandı */
    }
  
    .card form input {
      padding: 10px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      margin-bottom: 10px;
      background-color: #ffffff;
      color: #000; /* Yazı rengi siyah olarak ayarlandı */
    }
  
    .card form button {
      padding: 10px;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .card form button:hover {
      background-color: #0056b3;
    }
  </style>
  