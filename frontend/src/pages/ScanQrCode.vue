<template>
  <div>
    <NavbarComponent loged :balance="balance" :profileImage="profileImage"/>
    <div class="center">
      <p class="title">Scan QrCode</p>
    </div>
    <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
    <p class="error" v-if="error">Invalid qr code scan again!!</p>
  </div>
</template>
<script>
import NavbarComponent from "@/components/Navbar";
import JWT from "jsonwebtoken";
import feathers from "@/feathers";
export default {
  components: {
    NavbarComponent
  },
  data() {
    return {
      paused: false,
      error: false,
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
        const { userId } = JWT.decode(accessToken);
        localStorage.setItem("userId", userId);
        const userInfo = await feathers.service("users").get(userId);
        this.profileImage = userInfo.imageURL;
        this.balance = userInfo.balance;
      })
      .catch(() => {
        this.$router.push("/");
      });
  },
  methods: {
    onDecode(shopQrCode) {
      feathers.authenticate().then(async () => {
        try {
          const data = await feathers.service("users").get(shopQrCode);
          if (data) {
            this.$router.push(`/payment/${shopQrCode}`);
          } else {
            this.error = true;
          }
        } catch (e) {
          console.log(e);
          this.error = true;
        }
      });
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
  font-size: 20px;
  text-align: center;
}
.title {
  border-bottom: 3px solid #ff9800;
  text-align: center;
  font-size: 30px;
}
@media only screen and (max-width: 600px) {
  .center {
    margin-left: 10vw;
    margin-right: 10vw;
    width: 80vw;
  }
}
</style>
