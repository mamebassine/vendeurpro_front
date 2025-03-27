import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'; // Import du routeur seulement
import '@fortawesome/fontawesome-free/css/all.css';


// SA CONSERNE LE ICONES SUR LES CONTACT
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faLinkedin, faInstagram, faFacebook);


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// SA CONSERNE LE ICONES SUR LES CONTACT

app.component('font-awesome-icon', FontAwesomeIcon);

