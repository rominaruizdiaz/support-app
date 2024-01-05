<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">login</RouterLink>
      <RouterLink to="/employee">employee</RouterLink>
      <RouterLink to="/admin">admin</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
