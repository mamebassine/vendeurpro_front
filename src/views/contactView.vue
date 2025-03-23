<template>
  <div>
    <!-- 🟠 En-tête avec Titre -->
    <div class="overlay">
      <h1>Contactez-nous!</h1>
    </div>

    <!-- 🟠 Section principale -->
    <div class="contact-section">
      <!-- 📌 Colonne Gauche : Informations pratiques -->
      <div class="left-column">
        <h3>Informations pratiques</h3>
        <p><i class="fas fa-map-marker-alt"></i> Adresse : 123 Avenue de la Vente, Dakar</p>
        <p><i class="fas fa-phone"></i> Téléphone : +221 77 123 45 67</p>
        <p><i class="fas fa-envelope"></i> Email : contact@vendeurpro.com</p>
        <p><i class="fas fa-clock"></i> Horaires : Lun - Ven, 9h - 18h</p>

        <!-- Réseaux sociaux -->
        <div class="social-icons">
          <h3>Suivez-nous</h3>
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <!-- 📌 Colonne Droite : Texte et Image -->
      <div class="right-column">
        <p>Contactez-nous pour toute question sur nos services. Nous répondrons dès que possible.</p>
        <div class="bottom-image">
          <img src="../assets/images/baniere.jpeg" alt="Notre équipe en action" />
        </div>
      </div>
    </div>

    <!-- 🟠 Section Formulaire -->
    <div class="form-section">
      <form @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="fullName">Nom complet</label>
          <input type="text" id="fullName" v-model="form.fullName" placeholder="Entrez votre nom complet" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Entrez votre email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Votre message" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  fullName: "",
  email: "",
  message: "",
});

const sendMessage = () => {
  console.log("Message envoyé:", form.value);
  alert("Votre message a été envoyé avec succès !");
  form.value.fullName = "";
  form.value.email = "";
  form.value.message = "";
};
</script>

<style scoped>
/* ✅ RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ✅ EN-TÊTE */
.overlay {
  text-align: center;
  padding: 40px 0;
  background-color: #003366;
  color: white;
}

.overlay h1 {
  font-size: 2.5em;
}

/* ✅ SECTION CONTACT */
.contact-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  padding: 60px 5%;
  background-color: #f9f9f9;
}

/* 📌 COLONNE GAUCHE */
.left-column {
  flex: 1;
  max-width: 45%;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.left-column h3 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #003366;
}

.left-column p {
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.left-column i {
  color: #ff7f00;
  margin-right: 10px;
}

/* 📌 COLONNE DROITE */
.right-column {
  flex: 1;
  max-width: 45%;
  text-align: center;
}

.right-column p {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #555;
}

.bottom-image img {
  width: 100%;
  border-radius: 10px;
}

/* ✅ FORMULAIRE EN BAS */
.form-section {
  text-align: left;
  padding: 40px 5%;
  background: white;
}

form {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group textarea {
  height: 120px;
  resize: none;
}

.form-group button {
  width: 100%;
  padding: 12px;
  font-size: 1.2em;
  font-weight: bold;
  background-color: #ff7f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.form-group button:hover {
  background-color: #003366;
}

/* ✅ RÉSEAUX SOCIAUX */
.social-icons {
  text-align: center;
  margin-top: 20px;
}

.social-icon {
  font-size: 1.8em;
  color: #003366;
  margin: 0 15px;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: #ff7f00;
  transform: scale(1.1);
}

/* ✅ RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .contact-section {
    flex-direction: column;
    align-items: center;
  }

  .left-column,
  .right-column {
    max-width: 90%;
  }

  form {
    max-width: 90%;
  }
}

@media (max-width: 600px) {
  .overlay h1 {
    font-size: 2em;
  }

  .left-column h3 {
    font-size: 1.5em;
  }

  .left-column p {
    font-size: 1em;
  }

  .right-column p {
    font-size: 1em;
  }

  form {
    max-width: 100%;
  }

  .form-group button {
    font-size: 1em;
  }

  .social-icon {
    font-size: 1.5em;
  }
}
</style>
