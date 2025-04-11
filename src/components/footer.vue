<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Newsletter -->
        <div class="newsletter">
          <h3>Newsletter</h3>
          <p>Recevez nos offres exclusives.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Votre email..." class="newsletter-input" />
            <button class="subscribe-btn">S'abonner</button>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="social-icons">
          <h3>Suivez-nous</h3>
          <div class="icons">
            <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <!-- Partie du milieu : liens + contact -->
      <div class="footer-middle">
        <!-- ✅ Nos solutions -->
        <div class="footer-links">
          <h3>Nos solutions</h3>
          <ul>
            <li><a href="#">Se former</a></li>
            <li><a href="#">Coaching</a></li>
            <li><a href="#">Le lab</a></li>
            <li><a href="#">Un projet</a></li>
          </ul>
        </div>

        <!-- ✅ Contact -->
        <div class="contact-info">
          <h3>Contact</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> 123 Avenue de la Vente, Dakar</li>
            <li><i class="fas fa-envelope"></i> contact@vendeurpro.com</li>
            <li><i class="fas fa-phone"></i> +221 77 123 45 67</li>
            <li><i class="fas fa-clock"></i> Lun - Ven, 9h - 18h</li>
          </ul>
        </div>

        <!-- ✅ Mentions légales -->
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
.footer {
  background-color: #003366;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 4px 0; /* réduit le padding global */

}

.container {
  max-width: 1300px;
  margin: auto;
  padding: 0 5px;    /* SE RAPPROCHER */
  
}

/* 🎯 Partie supérieure */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  border-bottom: 1px solid #ff7f00;
  gap: 10px;
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
  font-size: 14px;
  color: #ddd; 
   margin-bottom: 6px;
margin-left: 4%;
}

.newsletter-form {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.newsletter-input {
  flex: 1;
  padding: 8px 10px;
  border: 2px solid #ff7f00;
  border-radius: 5px;
  font-size: 16px;
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
  font-size: 16px;
  transition: background 0.3s;
}

.subscribe-btn:hover {
  background-color: #e56b00;
}

/* 🌍 Réseaux sociaux */
.social-icons {
  text-align: left;
}

.social-icons h3 {
  font-size: 15px;
  margin-bottom: 2px;
  font-weight: bold;
}

.icons {
  display: flex;
  gap: 18px;
  margin-top: 20px;

}

.social-icon {
  font-size: 28px;
  color: #ff7f00;
  transition: color 0.3s;
}

.social-icon:hover {
  color: white;
}

/* 📂 Liens du footer + contact */
.footer-middle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  gap: 30px;
}

.footer-links,
.contact-info {
  flex: 1 1 300px;
  max-width: 350px;
}

.footer-links h3,
.contact-info h3 {
  font-size: 15px;
  margin-bottom: 2px;
  font-weight: bold;

}

.footer-links ul,
.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 10px;
  margin-left: 4%;

}

.footer-links li,
.contact-info li {
  margin-bottom: 3px;
  font-size: 16px;
}

.footer-links a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ff7f00;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info i {
  color: #ff7f00;
  font-size: 16px;
}

/* 📜 Bas du footer */
.copyright {
  text-align: center;
  padding-top: 2px;
  border-top: 2px solid #ff7f00;
  font-size: 14px;
  margin-top: 10px;
}

.copyright a {
  color: #ff7f00;
  text-decoration: none;
  font-weight: bold;
}

.copyright a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-middle {
    flex-direction: column;
  }

  .social-icons {
    text-align: left;
  }
}
</style>
