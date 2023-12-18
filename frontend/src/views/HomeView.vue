<template>
  <section>
    <h1>Hello World</h1>
    <div v-if="isMentor">
      <MentorCard v-for="mentor in mentors" :key="mentor.id" :mentor="mentor" />
    </div>
    <div v-else>
      <p>mentor değil</p>
    </div>
  </section>
</template>

<script>
import MentorCard from '@/components/MentorCard.vue'
export default {
  name: 'HomeView',
  components: { MentorCard },
  data() {
    return {
      isMentor: true,
      mentors: []
    }
  },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
    if (response.ok) {
      const data = await response.json()
      this.mentors = data
    } else {
      throw new Error('Veriler alınamadı')
    }
  }
}
</script>
