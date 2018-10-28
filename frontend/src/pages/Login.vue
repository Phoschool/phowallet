<template>
  <div>
    <NavbarComponent/>
    <div class="container">
      <img src="../assets/wallet.svg">
      <p class="title">Pho Wallet</p>
      <div class="form">
        <input type="text" placeholder="username" v-model="username">
        <input type="password" placeholder="password" v-model="password">
        <p class="error" v-if="error">Invalid login</p>
        <button class="btn" @click="login">Login</button>
        <p class="registration">No account yet? <a>Sign up</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar";
import feathers from "@/feathers";
export default {
  components: {
    NavbarComponent
  },
  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    login: function() {
      if (this.username.trim() !== "" || this.password.trim() !== "") {
        feathers
          .authenticate({
            strategy: "local",
            email: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.push("/scan");
          })
          .catch(error => {
            console.log(error);
            this.error = true;
          });
      } else {
        this.error = true;
      }
    }
  }
};
</script>
<style scoped>
.btn {
  background-color: #ff9800;
  border-color: #ff9800;
  border-radius: 20px;
  width: 100px;
  height: 50px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 20px;
}
img {
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.title {
  font-size: 30px;
  text-align: center;
  margin-top: 10px;
}
.form {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
input {
  border-style: solid;
  border-width: 1px;
  border-color: #999999;
  border-radius: 20px;
  height: 40px;
  width: 90%;
  font-size: 20px;
  padding-left: 25px;
  margin-top: 10%;
}
.container {
  width: 90vw;
  margin-left: 5vw;
  margin-right: 5vw;
}

.registration {
  font-size: 15;
  text-align: center;
}

.registration > a {
  color: #ff9800;
}
.error {
  color: red;
  font-size: 20px;
  text-align: center;
}
</style>
