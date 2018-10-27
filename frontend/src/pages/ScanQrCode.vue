<template>
  <div>
    <NavbarComponent/>
    <div class="center">
      <p class="title">Scan QrCode</p>
    </div>
    <!-- <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader> -->
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
      paused: false
    };
  },
  methods: {
    onDecode(content) {
      console.log(content);
      this.paused = true;
    }
  }
};
</script>
<style scoped>
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
