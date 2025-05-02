
import { createRouter, createWebHistory } from 'vue-router'

import AccueilView from '@/views/accueilView.vue'
import AproposView from '@/views/aproposView.vue'
import FormationsView from '@/views/formationsView.vue'
import CoachingView from '@/views/coachingView.vue'
import WebinaireView from '@/views/webinaireView.vue'
import ActualitesView from '@/views/actualitesView.vue'
import ContactView from '@/views/contactView.vue'



import BootcampVendeurView from '@/views/bootcampVendeurView.vue'
import BootcampProduitsView from '@/views/bootcampProduitsView.vue'
import BootcampServicesView from '@/views/bootcampServicesView.vue'
import FormationBtoBView from '@/views/formationBtoBView.vue'
import FormationVenteDirecteView from '@/views/formationVenteDirecteView.vue'
import FormationVenteDigitaleView from '@/views/formationVenteDigitaleView.vue'




// 👉 Import des pages actuA à actuF
import ActuAView from '@/views/actuAView.vue'
import ActuBView from '@/views/actuBView.vue'
import ActuCView from '@/views/actuCView.vue'
import ActuDView from '@/views/actuDView.vue'
import ActuEView from '@/views/actuEView.vue'
import ActuFView from '@/views/actuFView.vue'

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
    { path: '/formation-vente-digitale', name: 'formation-vente-digitale', component: FormationVenteDigitaleView },
  

         // ✅ Nouvelles routes pour les pages actualités détaillées
{ path: '/actualites-a', name: 'actu-a', component: ActuAView },
{ path: '/actualites-b', name: 'actu-b', component: ActuBView },
{ path: '/actualites-c', name: 'actu-c', component: ActuCView },
{ path: '/actualites-d', name: 'actu-d', component: ActuDView },
{ path: '/actualites-e', name: 'actu-e', component: ActuEView },
{ path: '/actualites-f', name: 'actu-f', component: ActuFView }

  ],
})

export default router
