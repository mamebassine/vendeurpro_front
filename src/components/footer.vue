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
<a href="https://www.facebook.com/profile.php?id=61575150717010" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
<a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
<a href="https://www.instagram.com/vendeurpros" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
<a href="https://www.linkedin.com/company/vendeurpro/?viewAsMember=true" class="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>
<a href="#" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>

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
            <li><i class="fas fa-envelope"></i> contact@vendeur-pro.com</li>
            <li><i class="fas fa-phone"></i> 33 8 68 54 14 ou +221 75 6311686</li>
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

/* Footer général */
.footer {
  background-color: #003366;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 30px 0;
}

.container {
  max-width: 1300px;
  margin: auto;
  padding: 0 15px;
}

/* Partie supérieure */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid #ff7f00;
  gap: 20px;
}

/* Newsletter */
.newsletter {
  flex: 1 1 300px;
}

.newsletter h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.newsletter p {
  font-size: 14px;
  color: #ddd;
  margin-bottom: 10px;
}

.newsletter-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.newsletter-input {
  flex: 1 1 200px;
  padding: 8px 10px;
  border: 2px solid #ff7f00;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
  color: #333;
  min-width: 180px;
}

.subscribe-btn {
  background-color: #ff7f00;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.3s;
}

.subscribe-btn:hover {
  background-color: #e56b00;
}

/* Réseaux sociaux */
.social-icons {
  flex: 1 1 200px;
  text-align: left;
}

.social-icons h3 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icon {
  font-size: 26px;
  color: #ff7f00;
  transition: color 0.3s;
}

.social-icon:hover {
  color: white;
}

/* Partie milieu */
.footer-middle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 30px;
}

.footer-links,
.contact-info {
  flex: 1 1 250px;
}

.footer-links h3,
.contact-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-links ul,
.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.contact-info li {
  margin-bottom: 8px;
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

/* Bas du footer */
.copyright {
  text-align: center;
  padding-top: 20px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3px;
  }

  .newsletter-form {
    flex-direction: column;
    width: 100%;
  }

  .newsletter-input, .subscribe-btn {
    width: 100%;
  }

  .social-icons {
    text-align: center;
  }

  .footer-middle {
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .footer-links, .contact-info {
    text-align: center;
  }

  .footer-links ul, .contact-info ul {
    margin: 0 auto;
    padding: 0;
  }
}


</style>
