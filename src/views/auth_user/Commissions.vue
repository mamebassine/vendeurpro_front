<template>  
  <div class="commissions-page">
    <h1><strong>Mes Commissions</strong></h1>

    <!-- Montant total des commissions -->
    <div v-if="commissions.length" class="total-commission">
      <strong>Montant total de la commission du parrain :</strong> {{ formatFCFA(totalCommissions) }}
    </div>

    <!-- Si commissions -->
    <table v-if="commissions.length" class="commissions-table">
      <thead>
        <tr>
          <!-- <th>ID</th> -->
          <th>Nom complet du candidat</th>
          <th>Formation</th>
          <th>Montant de la commission</th>
          <th>Statut Candidature</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="commission in commissions" :key="commission.id">
          <!-- <td>{{ commission.id }}</td> -->
          <td>{{ commission.candidature?.candidat?.prenom }} {{ commission.candidature?.candidat?.nom }}</td>
          <td>{{ commission.candidature?.formation?.titre }}</td>
          <td>{{ formatFCFA(commission.montant_commission) ?? '—' }}</td>
          <td>
            <span 
              v-if="normalizeStatut(commission.candidature?.statut) === 'acceptee'" 
              class="statut accepte"
            >
              Acceptée
            </span>
            <span 
              v-else-if="normalizeStatut(commission.candidature?.statut) === 'refusee'" 
              class="statut refuse"
            >
              Refusée
            </span>
            <span v-else class="statut attente">
              En attente
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Si pas de commissions -->
    <p v-else class="no-data">Aucune commission trouvée.</p>
  </div>
</template>

<script>
import commissionService from "@/services/commissionService";

export default {
  data() {
    return {
      commissions: []
    }
  },
  computed: {
    // Calcul du montant total des commissions
    totalCommissions() {
      return this.commissions.reduce((total, commission) => {
        return total + (commission.montant_commission || 0);
      }, 0);
    }
  },
  mounted() {
    this.loadCommissions();
  },
  methods: {
    async loadCommissions() {
      try {
        const res = await commissionService.getAll();
        this.commissions = res.data.commissions || res.data;
        console.log("Statuts :", this.commissions.map(c => c.candidature?.statut));
      } catch (e) {
        console.error("Erreur lors du chargement :", e);
      }
    },
    normalizeStatut(statut) {
      if (!statut) return 'en_attente';
      return statut
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "_");
    },
    formatFCFA(montant) {
  if (montant == null) return null;
  // Conversion en nombre pour supprimer les zéros initiaux
  const value = Number(montant);
  return value.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " FCFA";
}

  }
}
</script>


<style scoped>
.commissions-page {
  padding: 20px;
  background: #f9fafb;
  min-height: 100vh;
}

.commissions-page h1 {
  text-align: center;
  color: #343f69;
  margin-bottom: 20px;
}

.commissions-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.commissions-table th {
  background: #343f69;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
}

.commissions-table td {
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.commissions-table tr:hover {
  background: #f3f4f6;
  transition: background 0.2s ease;
}

.statut {
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9em;
}

.statut.accepte {
  background: #d1fae5;
  color: #065f46;
}

.statut.refuse {
  background: #fee2e2;
  color: #991b1b;
}

.statut.attente {
  background: #fef3c7;
  color: #92400e;
}

.no-data {
  text-align: center;
  color: #6b7280;
  font-style: italic;
  margin-top: 20px;
}

.total-commission {
  margin-bottom: 15px;
  font-size: 1.1em;
  color: #343f69;
}
</style>
