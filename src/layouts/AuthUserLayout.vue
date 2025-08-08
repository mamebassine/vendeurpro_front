<!-- src/layouts/AuthUserLayout.vue -->
<template>
  <div>
    <UserNavbar />
    <div class="layout">
      <UserSidebar />
      <main class="content">
        <router-view /> <!-- Ne jamais oublier cela -->
      </main>
    </div>
  </div>
</template>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue'
import UserSidebar from '@/components/UserSidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
}

.content {
  margin-left: 220px;
  margin-top: 60px;
  padding: 2rem;
  flex-grow: 1;
  background-color: #f9fafb;
  min-height: calc(100vh - 60px);
}
</style>
