<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- a href -->
        <!-- LAZY LOADING -->
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/mentors">Mentors</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/signup">sign up</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  padding: 2rem 0;
}
</style>
