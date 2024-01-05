<script setup></script>

<template>
  <header>
    <img
      src="../assets/images/support-app-logo-blue.png"
      alt="support app logo"
    />
    <nav>
      <a>Pending requests</a>
      <a>Solved requests</a>
    </nav>
  </header>
</template>
<style scoped>
header {
  height: 10vh;
  filter: drop-shadow(0px 5px 3px rgba(184, 184, 184, 0.371));
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  width: 150px;
  margin: 40px;
}
nav {
  float: right;
  display: flex;
  gap: 40px;
}
</style>
