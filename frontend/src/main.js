import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-green/theme.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.component('PrimeButton', Button)
app.component('PrimeCard', Card)
app.component('InputText', InputText)

app.mount('#app')
