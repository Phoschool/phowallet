<template>
  <div>
    <NavbarComponent loged :balance="balance" :profileImage="profileImage"/>
    <img src="https://svgshare.com/i/9C7.svg" class="complete">
    <p style="text-align: center;font-size: 30px;">Payment Complete</p>
    <button class="btn" @click="back">Back to Scan Qr Code</button>
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
      balance: 0,
      profileImage: ""
    };
  },
  created() {
    feathers.service("users").on("patched", data => {
      if (data._id == localStorage.getItem("userId")) {
        this.balance = data.balance;
      }
    });
    feathers
      .authenticate()
      .then(async ({ accessToken }) => {
        const userInfo = await feathers
          .service("users")
          .get(localStorage.getItem("userId"));
        this.profileImage = userInfo.imageURL;
        this.balance = userInfo.balance;
      })
      .catch(e => {
        this.$router.push("/");
      });
  },
  methods: {
    back: function() {
      this.$router.push("/scan");
    }
  }
};
</script>
<style scoped>
.btn {
  background-color: #ff9800;
  border-color: #ff9800;
  border-radius: 20px;
  width: 300px;
  height: 50px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 20px;
}
.complete {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100px;
}
</style>
