<script setup>
import { ref } from "vue";

const show = ref(false);
const name = ref("");
const date = ref("");

const showForm = () => {
  show.value = true;
};

const closeForm = () => {
  show.value = false;
};

const sendForm = () => {
  // Aquí puedes agregar la lógica para enviar el formulario
  // Por ejemplo, puedes realizar una solicitud HTTP con los datos del formulario
  // o realizar alguna acción específica al enviar el formulario

  // Lógica de envío de formulario...

  // Una vez que se ha enviado el formulario, puedes limpiar los campos y cerrar el modal
  name.value = "";
  date.value = "";
  show.value = false;
};

const problemSelected = ref("");
const problems = [
  "Device Overheating",
  "Software or Operating System Problemsl",
  "Malware or Virus Infection",
  "Hardware Issues",
  "Security Concerns",
  "Failed Updates",
  "Internet Connectivity Loss",
  "Other",
];
</script>

<template>
  <div>
    <button id="add-button" @click="showForm">+</button>

    <div class="modal" v-if="show">
      <div class="modal-background" @click="closeForm"></div>
      <div class="modal-content">
        <span class="close" @click="closeForm">x</span>

        <form @submit.prevent="sendForm">
          <legend>HAVING SOME THECNICAL PROBLEMS?</legend>

          <div id="two-inputs">
            <input v-model="name" type="text" placeholder="Name" />
            <input v-model="date" type="date" placeholder="date" />
          </div>

          <select v-model="problemSelected" id="problem">
            <option value="" disabled>Kind of problem?</option>
            <option
              v-for="(problem, index) in problems"
              :key="index"
              :value="problem"
            >
              {{ problem }}
            </option>
          </select>

          <textarea
            v-model="comentario"
            id="comment"
            placeholder="write some details..."
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#add-button {
  background-color: var(--resolve);
  margin-top: 20px;
  font-size: 20px;
  color: var(--white);
  width: 40px;
  height: 40px;
  border-radius: 5px;
  filter: drop-shadow(0px 5px 4px #78787854);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-background {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.135);
}
.modal-content {
  background-color: var(--white);
  padding: 20px;
  width: 70%;
  height: 80%;
  border-radius: 5px;
  position: relative;
}
.close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  font-size: 1em;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
#comment {
  height: 200px;
}
legend {
  color: var(--text-primary-black);
  font-weight: 700;
  font-size: 1em;
  font-family: "Chivo", sans-serif;
  margin-top: 50px;
  text-align: center;
}
select,
textarea,
input {
  padding: 7px;
  font-size: 12px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(66, 66, 66, 0.42);
  width: 80%;
}
#two-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 90%;
}
button {
  background-color: var(--primary-blue);
  color: var(--white);
  width: 90px;
  height: 30px;
  font-size: 1em;
  border-radius: 5px;
}

@media only screen and (min-width: 400px) {
  .modal-content {
    width: 360px;
    height: 550px;
  }
  select,
  textarea,
  input {
    font-size: 15px;
    width: 80%;
  }
  #two-inputs {
    gap: 15px;
    width: 84%;
  }

  form {
    gap: 15px;
  }
  legend {
    font-size: 1.2em;
  }
  button {
    width: 200px;
    height: 40px;
    font-size: 1em;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 800px) {
  #add-button {
    font-size: 30px;
    width: 50px;
    height: 50px;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    font-size: 2em;
  }
  form {
    gap: 30px;
  }
  legend {
    font-size: 1.4em;
  }

  button {
    width: 250px;
    height: 50px;
    font-size: 1.2em;
  }
  .modal-content {
    width: 470px;
    height: 700px;
  }

  select,
  textarea,
  input {
    font-size: 15px;
    width: 90%;
  }
  #two-inputs {
    gap: 15px;
    width: 93%;
  }
}
</style>
