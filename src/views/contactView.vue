<template>
  <section class="map-section">
    <!-- Image locale à la place de la carte Google Maps -->
    <div id="map">
      <img
        src="@/assets/images/lougre1.png"
        alt="Emplacement VendeurPro"
      />
    </div>

<!-- BANDE DE BACGRAOUND -->
 
<div class="container px-6 md:px-11">
  <div class="block rounded-lg bg-white px-4 py-8 shadow-md md:px-8 md:py-10 -mt-[80px] backdrop-blur-lg border border-gray-300">
    <div class="flex flex-wrap">
<!-- MOTS TITRE ACCROCHE -->
<div class="bg-[#e6eef7] py-6 px-3 rounded-2xl shadow-md flex items-center justify-between mt-4 max-w-3xl mx-auto">
    <div>
        <h4 class="text-3xl font-bold text-gray-800 mb-2">
            Boostez les performances de votre équipe
        </h4>
        <p class="text-gray-900">
            Vous souhaitez former vos commerciaux ou discuter d’un 
            accompagnement sur mesure ? Nos experts vous guident.
        </p>
    </div>
</div>

<!-- Formulaire de contact -->
<div class="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 mt-16">
  <h2 class="text-2xl font-bold mb-6 text-center">Contactez-nous</h2>
  <form class="space-y-6">
    <div class="flex flex-col">
      <label for="nomComplet" class="mb-1 font-semibold text-gray-700">Votre nom complet</label>
      <input type="text"
        id="nomComplet"
        placeholder="El Maoda ly"
        class="w-full rounded border-1 border-[#003366] bg-white py-3 px-4 outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
      />
    </div>

    <div class="flex flex-col">
      <label for="email" class="mb-1 font-semibold text-gray-700">Votre email</label>
      <input type="email"
        id="email"
        placeholder="maoda999@gmail.com"
        class="w-full rounded border-1 border-[#003366] bg-white py-3 px-4 outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
      />
    </div>

    <div class="flex flex-col">
      <label for="message" class="mb-1 font-semibold text-gray-700">Votre message</label>
      <textarea id="message"
        rows="5"
        placeholder="Vraiment c'est très utile ..."
        class="w-full rounded border-1 border-[#003366] bg-white py-3 px-4 outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
      ></textarea>
    </div>

    <button type="submit" class="w-full rounded bg-[#ff7f00] text-white px-6 py-3 text-sm font-semibold uppercase hover:bg-[#002855] transition duration-200">
      Envoyer
    </button>
  </form>
</div>


         <!-- Informations pratiques --> 
<!-- Informations pratiques -->
<div class="w-full lg:w-7/12">
    <h2 class="text-2xl font-bold mb-6 text-center mt-16">Informations pratiques</h2>
    <div class="flex flex-wrap justify-center">
        
        <!-- Téléphone -->
        <div class="mb-6 w-full md:w-6/12 lg:w-5/12 flex items-start gap-4">
            <div class="text-[#ff7f00] text-2xl">
                <i class="fas fa-phone-alt"></i>
            </div>
            <div>
                <p class="mb-1 font-bold text-[#ooo]">Téléphone</p>
                <p class="text-sm text-neutral-600">33 8 68 54 14 // 75 6 31 16 86</p>
            </div>
        </div>
        
        <!-- Adresse -->
        <div class="mb-6 w-full md:w-6/12 lg:w-5/12 flex items-start gap-4">
            <div class="text-[#ff7f00] text-2xl">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
                <p class="mb-1 font-bold text-[#ooo]">Adresse</p>
                <p class="text-sm text-neutral-600">4 cité Cpi, VDN Dakar</p>
            </div>
        </div>
        
        <!-- Email -->
        <div class="mb-6 w-full md:w-6/12 lg:w-5/12 flex items-start gap-4">
            <div class="text-[#ff7f00] text-2xl">
                <i class="fas fa-envelope"></i>
            </div>
            <div>
                <p class="mb-1 font-bold text-[#ooo]">Email</p>
                <p class="text-sm text-neutral-600">contact-at-vendeur-pro.com</p>
            </div>
        </div>
        
        <!-- Horaires -->
        <div class="mb-6 w-full md:w-6/12 lg:w-5/12 flex items-start gap-4">
            <div class="text-[#ff7f00] text-2xl">
                <i class="fas fa-clock"></i>
            </div>
            <div>
                <p class="mb-1 font-bold text-[#ooo]">Horaires</p>
                <p class="text-sm text-neutral-600">Lun - Ven, 9h - 18h</p>
            </div>
        </div>
        
    </div>


<!-- Réseaux sociaux -->
<div class="mt-16">
  <h2 class="text-2xl font-bold text-center">Suivez-nous</h2>
  <div class="flex justify-center space-x-8 mt-4">
    <a href="https://www.linkedin.com/company/vendeurpro/?viewAsMember=true" 
       target="_blank" rel="noopener"
       class="text-blue-400 text-3xl hover:text-blue-500 transition-colors duration-300">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>

    <a href="https://www.instagram.com/vendeurpros" 
       target="_blank" rel="noopener"
       class="text-pink-400 text-3xl hover:text-pink-300 transition-colors duration-300">
        <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>

    <a href="https://www.facebook.com/profile.php?id=61575150717010" 
       target="_blank" rel="noopener"
       class="text-blue-400 text-3xl hover:text-blue-500 transition-colors duration-300">
        <font-awesome-icon :icon="['fab', 'facebook']" />
    </a>

    <a href="https://www.tiktok.com/@vendeurpro" 
       target="_blank" rel="noopener"
       class="text-3xl transition-colors duration-300 hover:text-[#69C9D0]" style="color: #EE1D52;">
        <i class="fab fa-tiktok"></i>
    </a>
  </div>
</div>

</div>
</div>

</div>
</div>
</section>

</template>

<script>
export default {
  name: 'InformationsPratiques'
};
</script>

<style scoped>

.map-section {
  margin-bottom: 8rem;
}

#map {
  position: relative;
  height: 600%; /* hauteur réaliste */
  margin-top: 2rem;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 90%;

  height: 550px;
  overflow: hidden;
}

#map img {
  width: 100%;
  height: 120%;
  /* object-fit: fill; */
  margin-top: 3%;
object-fit: fill;
  object-position: center; /* centre l’image */
  border-radius: 8px;
}




#map img {
  width: 100%;
  /* object-fit: cover; */
  border-radius: 8px;
}
/* Styles de la carte Google Maps */
iframe {
  border-radius: 15px;
}

.wath {
  margin-top: 60%;
}

/* Ajoute de l'espace entre le formulaire et les informations pratiques */
.formulaire {
  margin-bottom: 40px; /* Ajuste selon ton besoin */
}

/* Ajoute de l'espace entre les informations pratiques et les réseaux sociaux */
.informations-pratiques {
  margin-bottom: 50px; /* Ajuste selon ton besoin */
}

/* Ajoute de l'espace entre les icônes des réseaux sociaux */
.reseaux-sociaux a {
  margin-right: 90px; /* Ajuste selon ton besoin */
}

/* Pour éviter un espace à droite du dernier élément */
.reseaux-sociaux a:last-child {
  margin-right: 0;
  gap: 89%;
}

/* Style des champs de formulaire */
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px;
  outline: none;
  transition: border 0.3s ease-in-out;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #ff7f00;
  box-shadow: 0 0 5px rgba(255, 127, 0, 0.5);
}

/* Bouton d'envoi */
button {
  width: 100%;
  background-color: #ff7f00;
  color: white;
  padding: 12px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #002855;
}

/* Styles des cartes d'information */
.block {
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

/* Icônes dans les cartes */
.shrink-0 {
  background: #e0f2fe;
  padding: 10px;
  border-radius: 10px;
}

/* responsive */

@media (max-width: 1024px) {
  .wath {
    margin-top: 20%;
  }

  .reseaux-sociaux a {
    margin-right: 40px;
  }
}

@media (max-width: 768px) {
  .wath {
    margin-top: 15%;
  }

  .reseaux-sociaux {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .reseaux-sociaux a {
    margin-right: 0;
  }

  .formulaire,
  .informations-pratiques,
  #map {
    margin-left: 10px;
    margin-right: 10px;
  }

  #map {
    height: 250px;
  }

  button {
    font-size: 1em;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  #map {
    height: 200px;
  }

  .block {
    padding: 15px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    font-size: 0.95em;
  }

  button {
    font-size: 0.95em;
  }
}

</style>





