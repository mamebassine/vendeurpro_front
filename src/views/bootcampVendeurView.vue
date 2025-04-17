<template>
  <div class="page-container">
    <section class="card">
      <h1 class="card-title">Devenir Vendeur Pro en 3 Jours</h1>
      <p class="card-subtitle">
        Devenez un vendeur plus <span class="highlight">confiant</span>, 
        <span class="highlight">structurant</span> et 
        <span class="highlight">stratège</span> en 3 jours intensifs !
      </p>

      <div class="card-section">
        <h2 class="section-title">🎯 Pour qui ?</h2>
        <p>
          Tous ceux qui veulent améliorer leurs compétences commerciales, quelle que soit leur expérience ou secteur.
        </p>
      </div>

      <div class="card-section">
        <h2 class="section-title">📚 Au programme :</h2>
        <ul>
          <li>Les fondamentaux de la vente moderne</li>
          <li>Techniques de prospection efficaces</li>
          <li>L'art de convaincre et conclure</li>
          <li>Organisation et posture professionnelle</li>
          <li>Simulations et défis pratiques</li>
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

      <div class="button-container">
        <button class="cta-button">🚀 Inscrivez-vous maintenant</button>
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
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
}

.card-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.card-subtitle {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 32px;
}

.highlight {
  font-weight: 600;
  color: #2563eb;
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

.button-container {
  text-align: center;
}

.cta-button {
  background-color: #2563eb;
  color: white;
  padding: 14px 32px;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.cta-button:hover {
  background-color: #1d4ed8;
}
</style>
