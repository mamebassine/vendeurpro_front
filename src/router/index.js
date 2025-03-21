// import { createRouter, createWebHistory } from 'vue-router'
// import AccueilView from '@/views/accueilView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'accueil',
//       component: AccueilView,
//     },
//     {
      
//     },
//   ],
// })



import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '@/views/accueilView.vue'
import AproposView from '@/views/aproposView.vue'
import FormationsView from '@/views/formationsView.vue'
import CoachingView from '@/views/coachingView.vue'
import WebinaireView from '@/views/webinaireView.vue'
import ActualitesView from '@/views/actualitesView.vue'
import ContactView from '@/views/contactView.vue'

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'accueil', component: AccueilView },
    { path: '/apropos', name: 'apropos', component: AproposView },
    { path: '/formations', name: 'formation', component: FormationsView },
    { path: '/coaching', name: 'coaching', component: CoachingView },
    { path: '/webinaire', name: 'webinaire', component: WebinaireView },
    { path: '/actualites', name: 'actualite', component: ActualitesView },
    { path: '/contact', name: 'contact', component: ContactView }
  ],
})

export default router
