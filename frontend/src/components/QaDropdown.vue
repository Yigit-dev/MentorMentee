<template>
  <div>
    <PrimeDropdown placeholder="Tarih Seçiniz"></PrimeDropdown>
  </div>
</template>
<script>
import { ref } from "vue";
const selectedDate = ref();
const dates = ref([]);
export default {
  name: 'QaDropdown',
  props: {
    qadates: ref([])
  },
  data() {
    return {
      isRegister: true
    }
  }
  
}
</script>
<style >
  
</style>

