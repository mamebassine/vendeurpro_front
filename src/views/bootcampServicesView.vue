<template>
  <div class="page-container">
    <section class="card">
      <h1 class="card-title">Pitcher, Persuader, Performer</h1>
      <p class="card-subtitle">
        Boostez vos ventes de services en apprenant à parler à vos clients avec impact et authenticité.
      </p>

      <div class="card-section">
        <h2 class="section-title">🎯 Pour qui moi ?</h2>
        <p>Prestataires, consultants, freelances, formateurs, coaches...</p>
      </div>

      <div class="card-section">
        <h2 class="section-title">📚 Au programme :</h2>
        <ul>
          <li>Créer une offre irrésistible</li>
          <li>Pitch commercial sur mesure</li>
          <li>Prospection et rendez-vous client</li>
          <li>Gérer les objections avec aisance</li>
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
        <button class="cta-button">🚀 Inscrivez-vous !</button>
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
