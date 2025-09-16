<template>
  <div class="container">
    <h1 class="title">📋 Mes filleuls</h1>

    <div v-if="loading" class="loading">
      Chargement des données...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="!loading && fillieuls.length" class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th>Nom complet du Filleul</th>
            <th>Email du Filleul</th>
            <th>Formation</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="candidature in fillieuls" :key="candidature.id">
            <td>{{ candidature.candidat.name }} {{ candidature.candidat.prenom }}</td>
            <td>{{ candidature.candidat.email }}</td>
            <td>{{ candidature.formation.titre }}</td>
            <td>
              <span
                class="status-badge"
                :class="{
                  enAttente: candidature.statut === 'En attente' || !candidature.statut,
                  accepte: candidature.statut === 'Accepté',
                  refuse: candidature.statut === 'Refusé'
                }"
              >
                {{ candidature.statut || "En attente" }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!loading && !fillieuls.length" class="empty">
      🚫 Aucun filleul trouvé pour le moment.
    </div>
  </div>
</template>

<script>
import candidatService from "@/services/candidatService"

export default {
  name: "ListeCandidatsParraines",
  data() {
    return {
      parrain: {},
      fillieuls: [],
      loading: true,
      error: null,
    }
  },
  async mounted() {
    try {
      const response = await candidatService.getCandidatsParraines()
      if (response.data.success) {
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
  padding: 25px;
  max-width: 1000px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #003366;
  text-align: center;
}

/* Table responsive */
.table-wrapper {
  overflow-x: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
}

.table th {
  background-color: #003366;
  color: white;
  padding: 14px 12px;
  text-align: left;
  font-size: 15px;
  text-transform: uppercase;
}

.table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
  color: #333;
}

/* Alternance des lignes */
.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Hover sur ligne */
.table tbody tr:hover {
  background-color: #eaf4ff;
  transition: background-color 0.3s ease;
}

/* Badge statut */
.status-badge {
  padding: 6px 12px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
}

.status-badge.enAttente {
  background-color: #fff3cd;
  color: #856404;
}

.status-badge.accepte {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.refuse {
  background-color: #f8d7da;
  color: #721c24;
}

/* Messages */
.loading,
.error,
.empty {
  margin: 20px 0;
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
}

.error {
  color: #e74c3c;
}

.empty {
  color: #555;
}
</style>
