<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Newsletter -->
        <div class="newsletter">
          <h3>📩 Newsletter</h3>
          <p>Recevez nos offres exclusives.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Votre email..." class="newsletter-input" />
            <button class="subscribe-btn">S'abonner</button>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="social-icons">
          <h3>🌍 Suivez-nous</h3>
          <div class="icons">
            <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-middle">
        <div class="footer-links">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Formations</a></li>
            <li><a href="#">Coaching</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h3>Mentions légales</h3>
          <ul>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions générales</a></li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>© 2025 <a href="#">VendeurPro</a>. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* 🎨 Style général */

.footer {
  background-color: #003366;
  color: white;
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1300px;  /* conpasssssss */
  margin: auto;
}

/* 🎯 Partie supérieure */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 16px;
  border-bottom: 2px solid #ff7f00;
}

/* ✉️ Newsletter */
.newsletter {
  max-width: 300px;
  padding-top: 3%;

}

.newsletter h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.newsletter p {
  font-size: 20px;
  color: #ddd;
}

.newsletter-form {
  display: flex;
  gap: 25px;
  margin-top: 5px;
}

.newsletter-input {
  flex: 1;
  padding: 8px 10px;

  /* padding: 2px; */
  border: 2px solid #ff7f00;
  border-radius: 5px;
  font-size: 20px;
  background-color: #fff;
  color: #333;
}

.subscribe-btn {
  background-color: #ff7f00;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background 0.3s;
}

.subscribe-btn:hover {
  background-color: #e56b00;
}

/* 🌍 Réseaux sociaux */
.social-icons {
  text-align: right;
}

.social-icons h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  font-size: 28px;
  color: #ff7f00;
  transition: color 0.3s;
}

.social-icon:hover {
  color: white;
}

/* 📂 Liens du footer */
.footer-middle {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}

.footer-links h3 {
  font-size: 22px;
  margin-bottom: 5px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 5px;
}

.footer-links a {
  color: #ddd;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ff7f00;
}

/* 📜 Bas du footer */
.copyright {
  text-align: center;
  padding-top: 10px;
  border-top: 2px solid #ff7f00;
  font-size: 14px;
}

.copyright a {
  color: #ff7f00;
  text-decoration: none;
  font-weight: bold;
}

.copyright a:hover {
  text-decoration: underline;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .footer-top,
  .footer-middle {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .newsletter {
    text-align: center;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-input {
    width: 100%;
    margin-right: 5%;
  }

  .social-icons {
    text-align: center;
    margin-top: 15px;
  }

  .icons {
    justify-content: center;
  }

  .footer-links {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
