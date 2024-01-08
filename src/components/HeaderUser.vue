<script setup></script>

<template>
  <header>
    <img
      id="image-logo"
      src="../assets/images/support-app-logo-blue.png"
      alt="support app logo"
    />

    <div id="log-out">
      <p>log out</p>
      <img
        id="image-log-out"
        src="./icons/logout_FILL0_wght400_GRAD0_opsz24.svg"
        alt=""
      />
    </div>
  </header>
</template>
<style scoped>
header {
  height: 11vh;
  filter: drop-shadow(0px 5px 3px rgba(184, 184, 184, 0.371));
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
}
#image-logo {
  width: 120px;
}
#image-log-out {
  width: 20px;
}
nav {
  float: right;
  display: flex;
  gap: 40px;
}
#log-out {
  display: flex;
  gap: 5px;
}
p {
  font-size: 10px;
}

@media only screen and (min-width: 800px) {
  #image-logo {
    width: 150px;
  }
  p {
    font-size: 1em;
  }
  header {
    padding: 0 40px;
  }
  #image-log-out {
    width: 30px;
  }
}
</style>
