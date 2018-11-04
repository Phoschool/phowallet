<template>
<div class="container">
  <h1 style="text-align: center;">Pho Wallet Admin</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">User name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User name" v-model="username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <h5 style="text-align: center; color: red" v-if="error">Invalid login</h5>
  <button type="button" class="btn btn-primary" @click="login">Login</button>
</div>
</template>
<script>
import feathers from "@/feathers";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    login: async function() {
      try {
        await feathers.authenticate({
          strategy: "local",
          email: this.username,
          password: this.password
        });
        this.$router.push("/select");
      } catch (e) {
        this.error = true;
      }
    }
  }
};
</script>
