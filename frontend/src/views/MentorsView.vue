<template>
  <div class="mentors">
    <h2>Mentorlar</h2>
    <input v-model="searchTerm" placeholder="İsim veya uzmanlık ara">
    <div class="mentor-list">
      <!-- Güncellenmiş MentorCardDeneme componentini mentor verileriyle kullanma -->
      <!-- <mentor-card-deneme v-for="mentor in mentors" :key="mentor.id" :mentor="mentor" /> -->
      <mentor-card-deneme
        v-for="mentor in filteredMentors" :key="mentor.id" :mentor="mentor"/>
    </div>
  </div>
</template>

<script>
import MentorCardDeneme from '@/components/MentorCardDeneme.vue'; // Güncellenmiş MentorCardDeneme componentinin yolu

export default {
  components: {
    MentorCardDeneme
  },
  data() {
    return {
      mentors: [
        {
          id: 1,
          name: 'Yusuf Turan',
          expertise: 'Full-Stack Geliştirme',
          image: 'images/mentor1.jpg'
          // Diğer mentor özellikleri
        },
        {
          id: 2,
          name: 'Monica Belluci',
          expertise: 'Veri Bilimi',
          image: 'images/mentor2.jpeg'
          // Diğer mentor özellikleri
        },
        // Diğer mentorlar
        {
          id: 3,
          name: 'Namık Kemal',
          expertise: 'Data Scientist',
          image: 'images/mentor3.jpg'
        },
        {
          id: 4,
          name: 'Fatih Altaylı',
          expertise: 'Frontend Geliştirme',
          image: 'images/mentor4.jpeg'
        },
        {
          id: 5,
          name: 'İlber Ortaylı',
          expertise: 'Backend Geliştirme',
          image: 'images/mentor5.jpg'
        },
        {
          id: 6,
          name: 'Celal Şengör',
          expertise: 'Backend Geliştirme',
          image: 'images/mentor6.jpeg'
        },
        {
          id: 7,
          name: 'Pisi Pisi',
          expertise: 'Oyun Geliştirici',
          image: 'images/mentor7.jpg'
        },
        {
          id: 8,
          name: 'Abdülkadir Durmaz',
          expertise: 'Full-Stack Geliştirici',
          image: 'images/mentor8.jpg'
        },
        {
          id: 9,
          name: 'Enes Pınar',
          expertise: 'Veri Bilimci',
          image: 'images/mentor9.jpg'
        },
        {
          id: 10,
          name: 'Mustafa Kemal Atatürk',
          expertise: 'Savaş Geliştirici',
          image: 'images/mentor10.jpg'
        },
      ],
      searchTerm: ''
    };
  },
  computed: {
    filteredMentors() {
      const term = this.searchTerm.toLowerCase();
      return this.mentors.filter(mentor =>
        mentor.name.toLowerCase().includes(term) ||
        mentor.expertise.toLowerCase().includes(term)
      );
    }
  }
}
</script>

<style scoped>
/* Sayfayla ilgili CSS stilleri buraya gelebilir */
.mentors {
  /* Sayfa stillendirme işlemleri */
}
.mentor-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
