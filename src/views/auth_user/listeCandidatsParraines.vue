<template>
  <div class="container">
    <h1 class="title">📋 Liste des candidats parrainés</h1>

    <div v-if="loading" class="loading">
      Chargement des données...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <table v-if="!loading && users.length" class="table">
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
        <template v-for="user in users" :key="user.id">
          <tr v-for="candidature in user.candidatures_parrain" :key="candidature.id">
            <td>{{ user.name }} {{ user.prenom }} {{ user.prenom }}</td>
            <td>{{ candidature.candidat.nom }} {{ candidature.candidat.prenom }}</td>
            <td>{{ candidature.candidat.email }} </td>
            <td>{{ candidature.formation.titre }}</td>
            <td>{{ candidature.statut }}</td>
          </tr>
        </template>
      </tbody>
    </table>

    <div v-if="!loading && !users.length" class="empty">
      Aucun candidat parrainé trouvé.
    </div>
  </div>
</template>

<script>
import candidatService from "@/services/candidatService" // adapte le chemin selon ton projet

export default {
  name: "ListeCandidatsParraines",
  data() {
    return {
      users: [],
      loading: true,
      error: null,
    }
  },
  async mounted() {
    try {
      const response = await candidatService.getCandidatsParraines()
      if (response.data.success) {
        this.users = response.data.users
      } else {
        this.error = "Impossible de charger les données."
      }
    } catch (err) {
      this.error = "Erreur lors du chargement des candidats."
    } finally {
      this.loading = false
    }
  },
}
</script>

<style scoped>
/* ... tes styles existants ... */
</style>
