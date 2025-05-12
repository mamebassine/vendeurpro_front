<template>
  <div class="page-container">
    <section class="card">
      <h1 class="card-title">Vendre Mieux, Vendre Plus</h1>
      <p class="card-subtitle">
        Un parcours spécialement conçu pour les vendeurs de produits physiques en boutique ou sur les réseaux sociaux.
      </p>

      <div class="card-section">
        <h2 class="section-title">🎯 Pour qui ?</h2>
        <p>
          Commerçants, détaillants, vendeurs en boutique ou magasins, marchands en ligne...
        </p>
      </div>

      <div class="card-section">
        <h2 class="section-title">📚 Au programme :</h2>
        <ul>
          <li>Attirer et convaincre en 5 secondes</li>
          <li>Techniques de merchandising et de visuel produit</li>
          <li>Argumentaire commercial court et percutant</li>
          <li>Utilisation de WhatsApp, TikTok & Facebook pour vendre plus</li>
        </ul>
      </div>

      <div class="card-section">
        <h2 class="section-title">📆 Durée, Certification & Format</h2>
        <ul>
          <li><strong>⏱ Durée :</strong> 3 jours</li>
          <li><strong>🎓 Avec attestation</strong></li>
          <li><strong>💻 Format :</strong> présentiel</li>
        </ul>
      </div>

      <p class="session-info">Prochaine session : [Date à définir]</p>

      <div class="button-container">
        <!-- <button class="cta-button">🚀 Rejoignez la prochaine cohorte maintenant !</button> -->
        <router-link to="/CandidatForm" class="cta-button">🚀 Rejoignez la prochaine cohorte maintenant !</router-link>

      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  padding: 20px;
  margin-top: 9%;

}

.card {
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
}

.card-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.card-subtitle {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 32px;
}

.card-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

ul {
  padding-left: 1.2em;
  color: #374151;
}

ul li {
  margin-bottom: 8px;
  list-style-type: disc;
}

.session-info {
  font-style: italic;
  color: #374151;
  margin-bottom: 24px;
}

.button-container {
  text-align: center;
}

.cta-button {
  background-color: #ff7f00;
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.cta-button:hover {
  background-color: #003366;
}
</style>
