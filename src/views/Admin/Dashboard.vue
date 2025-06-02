<template>
  <div class="dashboard-page p-6">
    <h1 class="text-3xl font-bold mb-4">Bienvenue sur le Dashboard</h1>
    <p class="text-gray-600 mb-6">
      Voici un aperçu général de votre espace d'administration. Utilisez la barre latérale pour naviguer entre les sections.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold">Utilisateurs</h2>
        <p class="text-gray-500">Gérez les comptes utilisateurs</p>
      </div>
      <div class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold">Formations</h2>
        <p class="text-gray-500">Ajoutez ou modifiez les formations proposées</p>
      </div>
      <div class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold">Actualités</h2>
        <p class="text-gray-500">Publiez de nouvelles actualités ou modifiez celles existantes</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Aucun script pour le moment, mais on peut en ajouter si besoin
</script>

<style scoped>
.dashboard-page {
  background-color: #f9fafb;
  min-height: 100vh;
}
</style>
