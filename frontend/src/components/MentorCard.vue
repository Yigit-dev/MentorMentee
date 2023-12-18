<template>
  <div class="card">
    <h1>{{ mentor.name }} {{ mentor.id }}</h1>
    <h2>{{ mentor.email }}</h2>
    <p v-if="isRegister">{{ mentor.address.city }}</p>
    <button v-if="!isRegister" @click="handleSignUp">kayıt ol</button>
    <button v-else @click="handleSignUp">profilini gör</button>
  </div>
</template>
<script>
export default {
  name: 'MentorCard',
  props: {
    mentor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      number: 3,
      isRegister: true
    }
  },
  methods: {
    handleSignUp() {
      console.log('handle sign up !!!')
      console.log('NUMBER: ', this.number)
    }
  }
}
</script>
<style scoped>
.card {
  background: purple;
  color: white;
  border-radius: 12px;
  padding: 1rem 0.5rem;
}
</style>
