<template>
  <div class="flex">
    <SidebarD />
    <div class="flex-1">
      <NavbarD />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SidebarD from '@/components/SidebarD.vue'
import NavbarD from '@/components/NavbarD.vue'
</script>
