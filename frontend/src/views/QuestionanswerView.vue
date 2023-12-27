<template>
  <div>
    <h1>Aylık Sorular</h1> <br>
    <div  v-if="isMentor" class="card">
    <router-link
      to="/addqa"
      custom
      v-slot="{ navigate }"
    >
      <PrimeButton @click="navigate"
        role="link">Yeni Soru Ekle</PrimeButton>
    </router-link>
  </div>
    <QaCard v-for="qadata in qa" :key="qa.id" :qadata="qadata"></QaCard>
  </div>
</template>
<script>
import QaDropdown from '@/components/QaDropdown.vue';
import QaCard from '@/components/QaCard.vue';
import QaCalendar from '@/components/QaCalendar.vue';
import { ref } from "vue";

export default {
  name: 'Questionanswer',
  components: {QaDropdown, QaCard,QaCalendar },
  data() {
    return {
      qa: [],
      qadates:[],
      isMentor: true
    }
  },
  async created() {
    const response = await fetch('https://my-json-server.typicode.com/haticecankaya/demo/qa', {
      method: 'GET'
    })
    if (response.ok) {
      const data = await response.json()
      this.qa = data
    } else {
      throw new Error('Veriler alınamadı')
    }
  },
  methods: {
}
}
</script>
<style scoped >
.card{
  display:inline;
  margin-right:30px;
  margin-bottom:15px;
}

</style>


