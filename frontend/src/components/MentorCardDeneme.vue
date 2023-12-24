<template>
  <div class="mentor-card-deneme">
    <router-link :to="'/mentors/' + mentor.id">
      <img :src="mentor.image" alt="Mentor Image" />
      <h3>{{ mentor.name }}</h3>
    </router-link>
    <p>{{ mentor.expertise }}</p>
    <div class="rating">
      <span v-for="n in 5" :key="n" @click="setRating(n)" :class="{ 'filled': n <= mentor.rating }">&#9733;</span>
      <span class="rating-value">{{ mentor.rating }}/5</span>
    </div>
    <button @click="sendRequest">Mentora İstek Gönder</button>
  </div>
</template>

<script>
export default {
  name: 'MentorCardDeneme',
  props: {
    mentor: {
      type: Object,
      required: true
    }
  },
  methods: {
    sendRequest() {
      // İstek gönderme işlemi burada gerçekleştirilebilir
      // Örneğin, bir API çağrısı yapılabilir veya bir işlev tetiklenebilir
      //console.log('Mentora istek gönderildi:', this.mentor.name);
      alert('Mentora istek gönderildi:', this.mentor.name);
      // Burada isteği gönderme işlemlerini gerçekleştir
    },
    setRating(stars) {
      // Mentorun değerlendirmesini burada ayarlayabilirsiniz
      this.mentor.rating = stars;
    }
  }
}
</script>

<style scoped>
/* Mentor kartıyla ilgili CSS stilleri buraya gelebilir */
.mentor-card-deneme {
  border: 1px solid #ccc;
  padding: 0.75rem;
  margin: 1rem;
  background-color: rgb(67, 75, 56);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
}
img{
  height: 25vh;
  width: 15vw;
  border-radius: 50%;
}
h3{
  margin-left: 4vw;
  text-decoration: none;
}
h3:hover{
  color: blue;
}
.mentor-link{
  text-decoration: none;
}
.rating {
  color: orange;
  cursor: pointer;
}
.rating .filled {
  color: gold;
}
.rating-value {
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
}
/* Diğer stillendirme işlemleri */
</style>
