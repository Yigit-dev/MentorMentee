<template>
   <form @submit.prevent="createQa">
    <div class="card flex justify-content-center">
        <span class="form-row">
            <label class="label" >Tarih</label> <br>
            <QaCalendar placeholder="Aylık Rapor Tarihi (dd.mm.yy)" v-model="formData.date" />  
        </span>
        <br>
        <span class="form-row">
            <label class="label" for="question">Soru</label><br>
            <PInputText class="textbox" id="question" v-model="formData.q" placeholder=" Ör: Mentee hangi konularda zorlanıyor?" />  
        </span>
        <br>
        <span class="form-row">
            <label class="label" for="answer">Cevap</label><br>
            <PInputText class="textbox" id="answer" v-model="formData.a" placeholder="Ör: Mentee teknik bilgi konusunda zorlanıyor ve ..." />  
        </span>
        <br>
        <PrimeButton type="submit" class="button">Kaydet</PrimeButton>
    </div>
     </form>
    
</template>

<script>
import { ref } from 'vue';
import QaCalendar from '@/components/QaCalendar.vue';
const value = ref(null);
export default{
    name: 'QaForm',
    components: {QaCalendar},
    data(){
      return{
        formData :{
          id:"1",
          date:"",
          q:"",
          a:""
        }
      }
    },
    methods:{
      createQa(){
        console.log('eklendi')
        console.log(this.formData)
      }
    }
}
</script>

<style scoped>
.form-row{
    display:block;
    margin-bottom :20px;
    margin-top:20px;
}

.label{
    margin-right:10px;
    display:block;
}

.button{
    margin-top:20px;
}

.textbox{
    height:150px;
    width:700px;
}
</style>