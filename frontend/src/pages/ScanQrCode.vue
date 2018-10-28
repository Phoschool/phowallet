<template>
  <div>
    <NavbarComponent/>
    <div class="center">
      <p class="title">Scan QrCode</p>
    </div>
    <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
    <p class="error" v-if="error">Invalid qr code scan again!!</p>
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
      paused: false,
      error: false
    };
  },
  methods: {
    onDecode(shopQrCode) {
      feathers.authenticate().then(async () => {
        try {
          const { data } = await feathers.service("shops").find({
            query: {
              userId: shopQrCode,
              $limit: 1
            }
          });
          console.log(data[0]);
          this.paused = true;
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
