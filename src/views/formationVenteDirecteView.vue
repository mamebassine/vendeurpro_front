<template>
  <div class="page-container">
    <section class="card">
      <h1 class="card-title">Champion de la Vente Directe</h1>
      <p class="card-subtitle">
        Apprenez à transformer n'importe quel produit ou service en best-seller.
      </p>

      <div class="card-section">
        <h2 class="section-title">🎯 Pour qui ?</h2>
        <p>
          Commerçants, vendeurs en boutique, marchands en ligne, démarrants d'activité...
        </p>
      </div>

      <div class="card-section">
        <h2 class="section-title">🎓 Objectifs :</h2>
        <ul>
          <li>Maîtriser les bases de la vente terrain et en ligne</li>
          <li>Utiliser les réseaux sociaux et WhatsApp pour vendre efficacement</li>
          <li>Gérer les objections et conclure plus souvent</li>
          <li>Créer un business rentable et organisé</li>
        </ul>
      </div>

      <div class="card-section">
        <h2 class="section-title">📆 Durée, Certification & Format</h2>
        <ul>
          <li><strong>⏱ Durée :</strong> 120 jours</li>
          <li><strong>🎓 Certifiante</strong></li>
          <li><strong>💻 Format :</strong> hybride / coaching inclus / stage inclus</li>
        </ul>
      </div>

      <div class="button-container">
        <button class="cta-button">🚀 Prenez en main votre avenir commercial !</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 9%;
}

.card {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
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
