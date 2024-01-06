<script setup>
import employeeHeader from "../components/HeaderUser.vue";
import addButton from "../components/crud/AddButton.vue";
</script>
<template>
  <employeeHeader />
  <body>
    <table>
      <thead>
        <tr>
          <th class="center" id="table-title" colspan="5">REQUESTS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="center">ID</th>
          <th class="center">Date</th>
          <th>Problem</th>
          <th>Name</th>
          <th></th>
        </tr>
      </tbody>
    </table>
    <addButton />
  </body>
</template>

<style scoped>
.center {
  text-align: center;
}
body {
  height: 100vh;
  background-color: var(--soft-white);
  display: flex;
  align-items: center;
}
table {
  filter: drop-shadow(0px 5px 4px #78787854);
  background-color: var(--white);
  width: 90%;
  margin-top: 5vh;
}
thead {
  background-color: var(--primary-blue);
  height: 8vh;
}
th {
  text-align: left;
}
tr {
  font-size: 13px;
  border-bottom: 2px solid var(--information-div);
}
#table-title {
  font-size: 17px;
  color: var(--white);
}

@media only screen and (min-width: 800px) {
  thead {
    height: 12vh;
  }
  tr {
    font-size: 20px;
  }
  #table-title {
    font-size: 2em;
  }
}
</style>
