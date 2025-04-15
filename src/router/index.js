
import { createRouter, createWebHistory } from 'vue-router'

import AccueilView from '@/views/accueilView.vue'
import AproposView from '@/views/aproposView.vue'
import FormationsView from '@/views/formationsView.vue'
import CoachingView from '@/views/coachingView.vue'
import WebinaireView from '@/views/webinaireView.vue'
import ActualitesView from '@/views/actualitesView.vue'
import ContactView from '@/views/contactView.vue'



import BootcampVendeurView from '@/views/BootcampVendeurView.vue'
import BootcampProduitsView from '@/views/BootcampProduitsView.vue'
import BootcampServicesView from '@/views/BootcampServicesView.vue'
import FormationBtoBView from '@/views/FormationBtoBView.vue'
import FormationVenteDirecteView from '@/views/FormationVenteDirecteView.vue'
import FormationVenteDigitaleView from '@/views/FormationVenteDigitaleView.vue'


const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'accueil', component: AccueilView },
    { path: '/apropos', name: 'apropos', component: AproposView },
    { path: '/formations', name: 'formation', component: FormationsView },
    { path: '/coaching', name: 'coaching', component: CoachingView },
    { path: '/webinaire', name: 'webinaire', component: WebinaireView },
    { path: '/actualites', name: 'actualite', component: ActualitesView },
    { path: '/contact', name: 'contact', component: ContactView },
  
  
    { path: '/bootcamp-vendeur', name: 'bootcamp-vendeur', component: BootcampVendeurView },
    { path: '/bootcamp-produits', name: 'bootcamp-produits', component: BootcampProduitsView },
    { path: '/bootcamp-services', name: 'bootcamp-services', component: BootcampServicesView },
    { path: '/formation-btob', name: 'formation-btob', component: FormationBtoBView },
    { path: '/formation-vente-directe', name: 'formation-vente-directe', component: FormationVenteDirecteView },
    { path: '/formation-vente-digitale', name: 'formation-vente-digitale', component: FormationVenteDigitaleView }
  
  ],
})

export default router
