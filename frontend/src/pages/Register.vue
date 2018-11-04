<template>
<div>
  <NavbarComponent />
  <div class="container">
    <div class="placheholder" v-if="imageURL === ''"></div>
    <img :src="imageURL" v-if="imageURL !== ''" class="userProfile" />
    <div class="image-upload">
      <label for="file-input">
        <img src="../assets/photo-camera.png" />
      </label>
      <input type="file" id="file-input" accept="image/*" @change="readUrl($event)">
    </div>
    <select v-model="permission">
      <option value="" disabled selected>I'm</option>
      <option value="student">Student</option>
      <option value="merchant">Merchant</option>
    </select>
    <input type="text" placeholder="shopName" v-model="shopName" v-if="permission == 'merchant'">
    <input type="text" placeholder="username" v-model="username">
    <br>
    <input type="password" placeholder="password" v-model="password">
    <button class="btn" @click="registration">Register</button>
    <h3 style="color: red" v-if="error">Invalid Registration</h3>
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
      permission: "",
      imageURL: "",
      shopName: "",
      permission: "",
      error: false
    };
  },
  methods: {
    readUrl(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = event => {
          this.imageURL = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    registration: async function() {
      try {
        if (this.imageURL !== "") {
          const { fullImage } = await feathers.service("uploads").create({
            uri: this.imageURL
          });
          await feathers.service("users").create({
            email: this.username,
            password: this.password,
            imageURL: fullImage,
            permission: this.permission,
            shopName: this.shopName
          });
          this.$router.push("/");
        } else {
          await feathers.service("users").create({
            email: this.username,
            password: this.password,
            permission: this.permission,
            shopeName: this.shopName
          });
          this.$router.push("/");
        }
      } catch (e) {
        console.log(e);
        this.error = true;
      }
    }
  }
};
</script>
<style scoped>
select {
  margin-top: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: #999999;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  height: 30px;
  width: 90%;
  font-size: 20px;
}

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

input {
  border-style: solid;
  border-width: 1px;
  border-color: #999999;
  border-radius: 20px;
  height: 40px;
  width: 90%;
  font-size: 20px;
  padding-left: 25px;
  margin-top: 5%;
}

.image-upload > input {
  display: none;
}

.image-upload img {
  margin-top: 10px;
  width: 40px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.container {
  margin-top: 10px;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.userProfile {
  width: 90px;
  height: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
}

.placheholder {
  background-color: rgb(181, 181, 181);
  width: 90px;
  height: 90px;
  margin: auto;
  border-radius: 50%;
}
</style>
