<!-- src/views/ListeCategoriesView.vue -->
<template>
  <div class="page-container">
    <h1>Liste des Catégories</h1>
    <router-link to="/ajoutcategories" class="btn-add">+ Ajouter une catégorie</router-link>

    <table class="table" v-if="categories.length">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in categories" :key="cat.id">
          <td>{{ cat.nom }}</td>
          <td>
            <router-link :to="`/Voirdetail/categories/${cat.id}`">Modifier</router-link>
            <button @click="supprimer(cat.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucune catégorie disponible.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import categorieService from '@/services/categorieService';

const categories = ref([]);

const chargerCategories = async () => {
  const res = await categorieService.getAll();
  categories.value = res.data;
};

const supprimer = async (id) => {
  if (confirm("Supprimer cette catégorie ?")) {
    await categorieService.delete(id);
    chargerCategories();
  }
};

onMounted(chargerCategories);
</script>

<style scoped>
.page-container {
  padding: 20px;
}

.btn-add {
  margin-bottom: 1rem;
  display: inline-block;
  background-color: #343f69;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
