<template>
  <div>
  <PrimeCard id="QaCard">
  <template #title> {{qadata.q}} </template>
  <template #content>
        <p class="m-0">
           {{qadata.a}}
        </p>       
        
  <br>
        <p>{{qadata.date}}</p><br>
      <div  v-if="isMentor" id="buttoncard">
    <router-link
      to="/updateqa"
      custom
      v-slot="{ navigate }"
    >
      <PrimeButton @click="navigate"
        role="link">Kaydı Güncelle</PrimeButton>
    </router-link>
  </div>
  <PrimeButton severity="danger"><span class="pi pi-trash"></span> </PrimeButton>
  </template>
  </PrimeCard>
  </div>
</template>
<script>
export default {
 name: 'QaCard',
 props: {
    qadata: {
      type: Object
    }
  },
  data() {
    return {
      isMentor: true
    }
  },
}
</script>
<style scoped>
#QaCard{
    margin-top:30px;
    margin-bottom:30px;
}
#buttoncard{
   margin-top:20px;
   display:inline;
   margin-right:10px;
}
</style>
