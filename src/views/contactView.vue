

<template>
  <section class="mb-32">
    <!-- Carte Google Maps -->
    <div id="map" class="relative h-[300px] mt-8 overflow-hidden bg-cover bg-[50%] bg-no-repeat">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
        width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>

    <div class="container px-6 md:px-12">
      <div
        class="block rounded-lg bg-white px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-lg border border-gray-300">
        
        <div class="flex flex-wrap">
          <!-- Formulaire de contact -->
          <div class="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <h2 class="text-2xl font-semibold mb-6 text-center">Contactez-nous</h2>
            <form class="space-y-6">
              <div class="flex flex-col">
                <label for="nomComplet" class="mb-1 font-medium text-gray-700">Nom complet</label>
                <input type="text"
                  id="nomComplet"
                  placeholder="El Maoda ly"
                  class="w-full rounded border border-gray-300 bg-white py-2 px-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500"
                />
              </div>

              <div class="flex flex-col">
                <label for="email" class="mb-1 font-medium text-gray-700">Email</label>
                <input type="email"
                  id="email"
                  placeholder="maoda999@gmail.com"
                  class="w-full rounded border border-gray-300 bg-white py-2 px-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500"
                />
              </div>

              <div class="flex flex-col">
                <label for="message" class="mb-1 font-medium text-gray-700">Message</label>
                <textarea id="message"
                  rows="4"
                  placeholder="Vraiment c'est très utile ..."
                  class="w-full rounded border border-gray-300 bg-white py-2 px-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500"
                ></textarea>
              </div>

              <button type="submit" class="w-full rounded bg-[#ff7f00] text-white px-6 py-3 text-sm font-semibold uppercase hover:bg-[#002855] transition duration-200">
                Envoyer
              </button>
            </form>
          </div>

          <!-- Informations pratiques -->
          <div class="w-full lg:w-7/12">
            <h2 class="text-2xl font-semibold mb-6 text-center">Informations pratiques</h2>
            <div class="flex flex-wrap">
              <div class="mb-6 w-full md:w-6/12 md:px-3 lg:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0 bg-sky-200 p-4 rounded-md">
                    📞
                  </div>
                  <div class="ml-6">
                    <p class="mb-1 font-bold">Téléphone</p>
                    <p class="text-sm text-neutral-500">+221 77 123 45 67</p>
                  </div>
                </div>
              </div>

              <div class="mb-6 w-full md:w-6/12 md:px-3 lg:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0 bg-sky-200 p-4 rounded-md">
                    📍
                  </div>
                  <div class="ml-6">
                    <p class="mb-1 font-bold">Adresse</p>
                    <p class="text-sm text-neutral-500">123 Avenue de la Vente, Dakar</p>
                  </div>
                </div>
              </div>

              <div class="mb-6 w-full md:w-6/12 md:px-3 lg:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0 bg-sky-200 p-4 rounded-md">
                    📧
                  </div>
                  <div class="ml-6">
                    <p class="mb-1 font-bold">Email</p>
                    <p class="text-sm text-neutral-500">contact@vendeurpro.com</p>
                  </div>
                </div>
              </div>

              <div class="mb-6 w-full md:w-6/12 md:px-3 lg:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0 bg-sky-200 p-4 rounded-md">
                    📅
                  </div>
                  <div class="ml-6">
                    <p class="mb-1 font-bold">Horaires</p>
                    <p class="text-sm text-neutral-500">Lun - Ven, 9h - 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <h2 class="text-2xl font-semibold mt-6 text-center">Suivez-nous</h2>
            <div class="flex space-x-4 mt-3">
              <a href="https://www.linkedin.com" target="_blank" class="text-blue-700 text-3xl">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a href="https://www.instagram.com" target="_blank" class="text-pink-600 text-3xl">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="https://www.facebook.com" target="_blank" class="text-blue-600 text-3xl">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
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

#map {
  margin-top: 9%; /* Ajuste la valeur selon ton besoin */
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
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

/* Styles de la carte Google Maps */
#map {
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
}

iframe {
  border-radius: 10px;
}


</style>










<!-- <template>
  <section class="mb-32">
    <div id="map" class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
        width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="container px-6 md:px-12">
      <div
        class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-lg border border-gray-300">
        <div class="flex flex-wrap">
          <div class="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form class="space-y-6">
  <div class="flex flex-col">
    <label for="nomComplet" class="mb-1 font-medium text-gray-700">Nom complet</label>
    <input type="text"
      id="nomComplet"
      placeholder="El Maoda ly"
      class="w-full rounded border border-gray-300 bg-white py-2 px-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500"
    />
  </div>

  <div class="flex flex-col">
    <label for="email" class="mb-1 font-medium text-gray-700">Email</label>
    <input type="email"
      id="email"
      placeholder="maoda999@gmail.com"
      class="w-full rounded border border-gray-300 bg-white py-2 px-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500"
    />
  </div>

  <div class="flex flex-col">
    <label for="message" class="mb-1 font-medium text-gray-700">Message</label>
    <textarea id="message"
      rows="4"
      placeholder="Vraiment c'est tres utile ..."
      class="w-full rounded border border-gray-300 bg-white py-2 px-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500"
    ></textarea>
  </div>

  <button type="submit" class="w-full rounded bg-[#ff7f00] text-white px-6 py-3 text-sm font-semibold uppercase hover:bg-[#002855] transition duration-200">
    Envoyer
</button>
</form>

          </div>
          <div class="w-full lg:w-7/12">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                      📞
                    </div>
                  </div>
                  <div class="ml-6">
                    <p class="mb-2 font-bold">Téléphone</p>
                    <p class="text-sm text-neutral-500">+221 77 123 45 67</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                      📍
                    </div>
                  </div>
                  <div class="ml-6">
                    <p class="mb-2 font-bold">Adresse</p>
                    <p class="text-sm text-neutral-500">123 Avenue de la Vente, Dakar</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                      📧
                    </div>
                  </div>
                  <div class="ml-6">
                    <p class="mb-2 font-bold">Email</p>
                    <p class="text-sm text-neutral-500">contact@vendeurpro.com</p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                      📅
                    </div>
                  </div>
                  <div class="ml-6">
                    <p class="mb-2 font-bold">Horaires</p>
                    <p class="text-sm text-neutral-500">Lun - Ven, 9h - 18h</p>
                  </div>
                </div>
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
  name: 'MonComposant',
};
</script>

<style scoped>

.wath{
  margin-top: 10%;
}
</style> -->










<!-- ICI C'EST BON APRES ON CHPOIX -->

 <!-- <template>
  <section class="wath">
    <div class="flex flex-wrap md:flex-nowrap justify-between items-start h-auto p-5 pl-[6%] pt-[6%] gap-8">
      <div class="w-full md:w-2/5 p-3 space-y-5">
        <h2 class="text-xl md:text-5xl font-semibold">Informations pratiques</h2>
        <p class="text-lg"><strong>Adresse :</strong> 123 Avenue de la Vente, Dakar</p>
        <p class="text-lg"><strong>Téléphone :</strong> +221 77 123 45 67</p>
        <p class="text-lg"><strong>Email :</strong> contact@vendeurpro.com</p>
        <p class="text-lg"><strong>Horaires :</strong> Lun - Ven, 9h - 18h</p>

        <h2 class="text-xl md:text-3xl font-semibold">Suivez-nous</h2>
        <div class="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com" target="_blank" class="text-blue-700 text-2xl">🔗</a>
          <a href="https://www.instagram.com" target="_blank" class="text-pink-600 text-2xl">📸</a>
          <a href="https://www.facebook.com" target="_blank" class="text-blue-600 text-2xl">📘</a>
        </div>

        <div class="w-[20rem] h-[20rem] mt-6 rounded-full overflow-hidden shadow-lg border-4 border-gray-200">
          <iframe
            class="w-full h-full rounded-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

<div class="w-full md:w-2/5 p-6 bg-white shadow-lg rounded-lg">
  <h2 class="text-2xl font-semibold text-center mb-4">Contactez-nous</h2>
  <form class="space-y-4">
    <div>
      <label for="fullName" class="block text-sm font-medium text-gray-700">Nom complet</label>
      <input type="text" id="fullName" name="fullName" placeholder="Entrez votre nom complet"
        class="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" name="email" placeholder="Entrez votre email"
        class="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea id="message" name="message" placeholder="Écrivez votre message ici..."
        class="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" rows="4"></textarea>
    </div>
    <button type="submit" class="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
      Envoyer
    </button>
  </form>
</div>
</div>
</section>
</template> 

<script>
export default {
  name: 'MonComposant',
};
</script>

<style scoped>

.wath{
  margin-top: 10%;
}
</style> -->
