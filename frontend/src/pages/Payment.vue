<template>
<div>
  <NavbarComponent loged :balance="balance" :profileImage="profileImage" />
  <div class="center">
    <p class="title">Payment</p>
  </div>
  <div class="center">
    <img :src="shopImage" class="shopImage">
    <p class="shopName">{{shopName}}</P>
    <input type="number" placeholder="Price total" v-model="price">
    <button class="btn" @click="pay">Pay it!</button>
  </div>
</div>
</template>
<script>
import NavbarComponent from "@/components/Navbar";
import feathers from "@/feathers";
import JWT from "jsonwebtoken";
export default {
  components: {
    NavbarComponent
  },
  data() {
    return {
      balance: 0,
      profileImage: "https://placeholder.pics/svg/300",
      shopImage: "https://placeholder.pics/svg/300",
      shopName: "",
      price: ""
    };
  },
  created() {
    feathers
      .authenticate()
      .then(async ({ accessToken }) => {
        const { userId } = JWT.decode(accessToken);
        localStorage.setItem("userId", userId);
        const data = await Promise.all([
          feathers.service("users").get(userId),
          feathers.service("users").get(this.$route.params.id)
        ]);
        this.profileImage = data[0].imageURL;
        this.balance = data[0].balance;
        this.shopImage = data[1].imageURL;
        this.shopName = data[1].shopName;
      })
      .catch(() => {
        this.$router.push("/");
      });
  },
  methods: {
    pay: async function() {
      feathers.authenticate().then(async () => {
        try {
          await feathers.service("payment").create({
            userId: localStorage.getItem("userId"),
            shopId: this.$route.params.id,
            priceTotal: this.price
          });
          this.$router.push("/complete");
        } catch (e) {
          console.log(e);
        }
      });
    }
  }
};
</script>
<style scoped>
.shopName {
  text-align: center;
  font-size: 30px;
}

.shopImage {
  display: block;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.title {
  border-bottom: 3px solid #ff9800;
  text-align: center;
  font-size: 30px;
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
  margin-top: 10%;
}
@media only screen and (max-width: 600px) {
  .center {
    margin-left: 10vw;
    margin-right: 10vw;
    width: 80vw;
  }
}
</style>
