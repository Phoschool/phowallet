<template>
  <div>
    <NavbarComponent/>
    <div class="container">
      <img src="../assets/wallet.svg">
      <p>Pho Wallet</p>
      <div class="form">
        <input type="text" placeholder="username">
        <input type="text" placeholder="password"/>
        <button class="btn">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar";
export default {
  components: {
    NavbarComponent
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
p {
  font-size: 40px;
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
</style>
