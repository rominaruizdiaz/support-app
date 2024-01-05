<script setup></script>

<template>
  <section>
    <a href="">Help</a>
    <form>
      <legend>Log in</legend>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <input id="login-input" type="submit" value="login" />
    </form>
    <ul>
      Do you still not have your credentials? Request your invitation from:
      <li>your manager if you are an employee.</li>
      <li>your manager if you are a technician.</li>
      <li>support-spta@supportapp.co for administrator access.</li>
    </ul>
    <div>
      <a
        id="image-github"
        href="https://github.com/rominaruizdiaz/support-app"
        target="_blank"
        ><img
          src="./icons/github-repo-git-octocat-svgrepo-com.svg"
          alt="git-hub icon"
      /></a>
    </div>
  </section>
</template>
<style scoped>
section {
  background-color: var(--white);
  border-radius: 30px 30px 0 0;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  width: 100%;
  display: flex;
  justify-content: end;
}
#image-github {
  width: 40px;
}
#image-github > img {
  width: 40px;
}

#login-input {
  background-color: var(--primary-blue);
  border-radius: 5px;
  border: none;
  color: var(--white);
  font-weight: bolder;
  height: 3em;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 90%;
}
legend {
  font-size: 1.8em;
  font-weight: 900;
  font-family: "Chivo", sans-serif;
  color: var(--primary-blue);
}
input {
  border-bottom: 1px solid var(--text-gray);
  width: 100%;
  font-size: 1em;
  height: 30px;
  color: var(--text-primary-black);
  padding: 20px;
}

input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--text-gray);
}
ul {
  color: var(--text-gray);
}
li {
  list-style: inside;
}

a {
  font-size: 13px;
  display: block;
  width: 100%;
  text-align: end;
  color: var(--text-gray);
}

@media only screen and (min-width: 800px) {
  section {
    border-radius: 30px 0px 0px 30px;
    gap: 0;
    width: 40%;
    justify-content: space-evenly;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 60%;
    justify-content: center;
  }
  legend {
    font-size: 2.6em;
  }
  input {
    font-size: 1.4em;
    height: 50px;
  }
}
</style>
