<script setup>
import LoginForm from "../components/LoginForm.vue";
import Slogan from "../components/Slogan.vue";
</script>

<template>
  <main>
    <div id="welcome-section">
      <img id="image-logo" src="../assets/images/support-app-logo.svg" alt="" />
      <div id="welcome-text">
        <Slogan />
        <img
          id="image-desktop"
          src="../assets/images/technical-problems.svg"
          alt=""
        />
      </div>
    </div>
    <LoginForm />
  </main>
</template>

<style scoped>
main {
  background-color: var(--primary-blue);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#welcome-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#image-logo {
  width: 150px;
  margin: 15px;
}
#image-desktop {
  width: 65%;
}

@media only screen and (min-width: 800px) {
  main {
    flex-direction: row;
    height: 100vh;
  }
  #welcome-section {
    width: 60%;
  }
  #image-logo {
    margin: 40px;
  }
  #welcome-text {
    height: 80%;
  }
}
</style>
