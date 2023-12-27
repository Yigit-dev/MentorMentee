<script>
export default {
  name: 'MentorProfile',
  data() {
    return {
        mentor: {
            name:"Sinan",
            surname:"Engin",
            bolum:"Bilgisayar Bilimleri",
            email:"sinanengin@gmail.com",
            phoneNumber:"554 345 6578",
            mentorNote:"bla bla bla",

        },
        isEditable: false,   
    }
  },
  methods:{ 
    submitChanges(){
        this.isEditable = false;
    },
    editInfos(){
        this.isEditable = true;
    }  
    },  
}
</script>
<template>
    <section>
        <div>
            <div class="Name" v-if="this.isEditable == false">
                    <div>{{ this.mentor.name + " " + this.mentor.surname}}</div>
                    <PrimeButton label="düzenle" @click="editInfos" ></PrimeButton>
            </div>
            <div class="Name" v-else-if="this.isEditable == true">
                    <InputText type="text" placeholder = "İsim" v-model="mentor.name"></InputText>
                    <InputText type="text" placeholder = "Soyisim" v-model="mentor.surname"></InputText>
                    <PrimeButton label="onayla" @click="submitChanges" ></PrimeButton>
            </div>
            
           <div>{{ this.isEditable }}</div>
        </div>
    <div> {{ this.mentor.bolum }} </div>
    <div>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </div>


    </section>
</template>