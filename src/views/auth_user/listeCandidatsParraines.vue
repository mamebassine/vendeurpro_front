<template>
  <div class="container">
    <h1 class="title">📋 Mes filleuls</h1>

    <div v-if="loading" class="loading">
      Chargement des données...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <table v-if="!loading && fillieuls.length" class="table">
      <thead>
        <tr>
          <th>Nom complet du Parrain</th>
          <th>Nom complet du Filleul</th>
          <th>Email du Filleul</th>
          <th>Formation</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="candidature in fillieuls" :key="candidature.id">
          <td>{{ parrain.nomComplet }}</td>
          <td>{{ candidature.candidat.name }} {{ candidature.candidat.prenom }}</td>
          <td>{{ candidature.candidat.email }}</td>
          <td>{{ candidature.formation.titre }}</td>
          <td>{{ candidature.statut || "En attente" }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="!loading && !fillieuls.length" class="empty">
      Aucun filleul trouvé pour le moment précis.
    </div>
  </div>
</template>

<script>
import candidatService from "@/services/candidatService" 

export default {
  name: "ListeCandidatsParraines",
  data() {
    return {
      parrain: {},       // Infos du parrain connecté
      fillieuls: [],     // Liste de ses filleuls
      loading: true,
      error: null,
    }
  },
  async mounted() {
    try {
      const response = await candidatService.getCandidatsParraines()
      if (response.data.success) {
        // Récupération des données comme renvoyées par ton API Laravel
        this.parrain = { nomComplet: response.data.parrain }
        this.fillieuls = response.data.fillieuls
      } else {
        this.error = "Impossible de charger les données."
      }
    } catch (err) {
      this.error = "Erreur lors du chargement des filleuls."
    } finally {
      this.loading = false
    }
  },
}
</script>

<style scoped>
.container {
  padding: 20px;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
}
.loading,
.error,
.empty {
  margin: 20px 0;
  font-weight: bold;
}
</style>
