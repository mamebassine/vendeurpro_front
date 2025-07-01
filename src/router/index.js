
// import { createRouter, createWebHistory } from 'vue-router'

// import AccueilView from '@/views/accueilView.vue'
// import AproposView from '@/views/aproposView.vue'
// import FormationsView from '@/views/formationsView.vue'
// import CoachingView from '@/views/coachingView.vue'
// import WebinaireView from '@/views/webinaireView.vue'
// import ActualitesView from '@/views/actualitesView.vue'
// import ContactView from '@/views/contactView.vue'



// import BootcampVendeurView from '@/views/bootcampVendeurView.vue'
// import BootcampProduitsView from '@/views/bootcampProduitsView.vue'
// import BootcampServicesView from '@/views/bootcampServicesView.vue'
// import FormationBtoBView from '@/views/formationBtoBView.vue'
// import FormationVenteDirecteView from '@/views/formationVenteDirecteView.vue'
// import FormationVenteDigitaleView from '@/views/formationVenteDigitaleView.vue'




// import ActuAView from '@/views/actuAView.vue'
// import ActuBView from '@/views/actuBView.vue'
// import ActuCView from '@/views/actuCView.vue'
// import ActuDView from '@/views/actuDView.vue'
// import ActuEView from '@/views/actuEView.vue'
// import ActuFView from '@/views/actuFView.vue'


// import DashboardView from '@/views/Dashboard.vue'

// const router = createRouter({
  
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     { path: '/', name: 'accueil', component: AccueilView },
//     { path: '/apropos', name: 'apropos', component: AproposView },
//     { path: '/formations', name: 'formation', component: FormationsView },
//     { path: '/coaching', name: 'coaching', component: CoachingView },
//     { path: '/webinaire', name: 'webinaire', component: WebinaireView },
//     { path: '/actualites', name: 'actualite', component: ActualitesView },
//     { path: '/contact', name: 'contact', component: ContactView },
  
  
//     { path: '/bootcamp-vendeur', name: 'bootcamp-vendeur', component: BootcampVendeurView },
//     { path: '/bootcamp-produits', name: 'bootcamp-produits', component: BootcampProduitsView },
//     { path: '/bootcamp-services', name: 'bootcamp-services', component: BootcampServicesView },
//     { path: '/formation-btob', name: 'formation-btob', component: FormationBtoBView },
//     { path: '/formation-vente-directe', name: 'formation-vente-directe', component: FormationVenteDirecteView },
//     { path: '/formation-vente-digitale', name: 'formation-vente-digitale', component: FormationVenteDigitaleView },
  

// { path: '/actualites-a', name: 'actu-a', component: ActuAView },
// { path: '/actualites-b', name: 'actu-b', component: ActuBView },
// { path: '/actualites-c', name: 'actu-c', component: ActuCView },
// { path: '/actualites-d', name: 'actu-d', component: ActuDView },
// { path: '/actualites-e', name: 'actu-e', component: ActuEView },
// { path: '/actualites-f', name: 'actu-f', component: ActuFView },

// { path: '/dashboard', name: 'dashboard', component: DashboardView }

//   ],
// })

// export default router






import { createRouter, createWebHistory } from 'vue-router'

//AUTHENTIFICATION

import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import Profile from '@/views/auth/Profile.vue'

import Logout from '@/views/auth/Logout.vue'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// Pages publiques
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

import ActuAView from '@/views/actuAView.vue'
import ActuBView from '@/views/actuBView.vue'
import ActuCView from '@/views/actuCView.vue'
import ActuDView from '@/views/actuDView.vue'
import ActuEView from '@/views/actuEView.vue'
import ActuFView from '@/views/actuFView.vue'

// Dashboard

import DashboardView from '@/views/Admin/Dashboard.vue'
import AjouterFormationsView from '@/views/Admin/Ajouter-formations.vue'
import VoirdetailformationsView from '@/views/Admin/Voirdetail-formations.vue'

//
import AjoutCandidat from '@/views/Candidat/AjoutCandidat.vue';
import ListeCandidat from '@/views/Candidat/ListeCandidat.vue'
import VoirDetailCandidat from '@/views/Candidat/VoirDetailCandidat.vue'


import AjouterCandidature from '@/views/Candidature/AjouterCandidature.vue'
import VoirDetailCandidature from '@/views/Candidature/VoirDetailCandidature.vue'
import ListeCandidature from '@/views/Candidature/ListeCandidature.vue'
import ModifierCandidature from '@/views/Candidature/ModifierCandidature.vue'



// import AjouterCandidature from '@/views/Candidature/AjouterCandidature.vue'
// import VoirDetailCandidature from '@/views/Candidature/VoirDetailCandidature.vue'
// import ListeCandidature from '@/views/Candidature/ListeCandidatures.vue'

// import AjoutCategorie from '@/views/Categorie/AjoutCategorie.vue';
// import VoirDetailCategorie from '@/views/Categorie/VoirDetailCategorie.vue';
import ListeCategorie from '@/views/Categorie/ListeCategorie.vue';




import CandidatForm from '@/views/CandidatForm.vue'
import CandidatList from '@/views/CandidatList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        // ... autres pages publiques ici


      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', name: 'accueil', component: AccueilView },
        { path: 'apropos', name: 'apropos', component: AproposView },
        { path: 'formations', name: 'formations', component: FormationsView },
        { path: 'coaching', name: 'coaching', component: CoachingView },
        { path: 'webinaire', name: 'webinaire', component: WebinaireView },
        { path: 'actualites', name: 'actualites', component: ActualitesView },
        { path: 'contact', name: 'contact', component: ContactView },

        // Bootcamps et formations
        { path: 'bootcamp-vendeur', name: 'bootcamp-vendeur', component: BootcampVendeurView },
        { path: 'bootcamp-produits', name: 'bootcamp-produits', component: BootcampProduitsView },
        { path: 'bootcamp-services', name: 'bootcamp-services', component: BootcampServicesView },
        { path: 'formation-btob', name: 'formation-btob', component: FormationBtoBView },
        { path: 'formation-vente-directe', name: 'formation-vente-directe', component: FormationVenteDirecteView },
        { path: 'formation-vente-digitale', name: 'formation-vente-digitale', component: FormationVenteDigitaleView },

        // Actualités détaillées
        { path: 'actualites-a', name: 'actu-a', component: ActuAView },
        { path: 'actualites-b', name: 'actu-b', component: ActuBView },
        { path: 'actualites-c', name: 'actu-c', component: ActuCView },
        { path: 'actualites-d', name: 'actu-d', component: ActuDView },
        { path: 'actualites-e', name: 'actu-e', component: ActuEView },
        { path: 'actualites-f', name: 'actu-f', component: ActuFView },

        // { path: '/ajoutCandidat',name: 'AjoutCandidat', component: AjoutCandidat },

        { path: '/voirdetail-candidat/:id', name: 'VoirDetailCandidat', component: VoirDetailCandidat },

       { path: 'voirdetail-formations/:id', name: 'Voirdetail-formations', component: VoirdetailformationsView },

      ],


    },

            // ... pages admin ici

    // Routes Dashboard avec layout personnalisé    
    {
  path: '/dashboard',
  component: DashboardLayout,
  children: [
    // Dashboard ET Formations
    { path: '', name: 'dashboard', component: DashboardView },
    { path: 'ajouter-formations', name: 'Ajouter-formations', component: AjouterFormationsView },
    // { path: 'voirdetail-formations/:id', name: 'Voirdetail-formations', component: VoirdetailformationsView },
  

// Candidats

// {
//   path: '/ajoutCandidat/:id',
//   name: 'AjoutCandidat',
//   component: AjoutCandidat
// }

// { path: '/ajoutCandidat',name: 'AjoutCandidat', component: AjoutCandidat },
{ path: '/dashboard/listeCandidat', name: 'ListeCandidat', component: ListeCandidat },
{ path: '/dashboard/Voirdetail/candidat/:id', name: 'VoirDetailCandidat', component: VoirDetailCandidat },



// // Candidature

 { path: '/dashboard/ajouterCandidature', name: 'AjoutCandidature', component: AjouterCandidature },
  { path: '/dashboard/listecandidature', name: 'ListeCandidature', component: ListeCandidature },
  { path: '/dashboard/Voirdetail/candidature/:id', name: 'VoirDetailCandidature', component: VoirDetailCandidature },
   { path: '/dashboard/modifierCandidature/:id', name: 'modifierCandidature', component: ModifierCandidature },

// // categories
// { path: '/dashboard/ajoutcategorie', name: 'AjoutCategorie', component: AjoutCategorie },
{ path: '/dashboard/listecategorie', name: 'ListeCategorie', component: ListeCategorie },

//  {
//   path: '/ajoutcategories',
//   name: 'AjoutCategories',
//   component: AjoutCategoriesView
// },
// {
//   path: '/Voirdetail/categorie/:id',
//   name: 'VoirDetailCategorie',
//   component: VoirDetailCategorieView
// },
// {
//   path: '/dashboard/listecategorie',
//   name: 'ListeCategorie',
//   component: ListeCategorieView
// }


]
},


{ path: '/CandidatForm',name: 'Formulaire', component: CandidatForm },
{ path: '/candidatsList', name: 'ListeCandidats', component: CandidatList },

    // 👉 Routes Auth
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/logout', name: 'logout', component: Logout },

// PAGE ajoutCandidat SANS header/footer
    {
      path: '/ajoutCandidat',
      name: 'AjoutCandidat',
      component: AjoutCandidat
    }
  ]
})
console.log("Router loaded correctly");

export default router
