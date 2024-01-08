<script setup></script>

<template>
  <div id="slogan-conteiner">
    <div id="text">
      Connecting problems with solutions...
      <div id="cursor"></div>
    </div>
  </div>
</template>
<style scoped>
#text {
  display: inline-block;
  color: var(--white);
  font-family: "Anonymous Pro", monospace;
  font-size: 1em;
  margin: 12px;
  text-align: center;
}

#cursor {
  display: inline-block;
  vertical-align: middle;
  width: 1px;
  height: 18px;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from,
  to {
    background-color: transparent;
  }
  50% {
    background-color: var(--white);
  }
}

@media only screen and (min-width: 800px) {
  #text {
    font-size: 1.6em;
    margin: 30px;
  }
  #cursor {
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 30px;
  }
}
</style>
