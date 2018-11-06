<template>
  <div class="container">
    <h3 style="padding: 30px;text-align:center">Merchants</h3>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">QrCode</th>
      <th scope="col">Shop name</th>
      <th scope="col">Balance</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, index) in listMerchants" :key="index">
      <th scope="row">{{index + 1}}</th>
      <td><a :href="value.qrCode" target="_blank">Click</a></td>
      <td>{{value.shopName}}</td>
      <td>{{value.balance}}</td>
      <td><button class="btn btn-danger" @click="withdraw(value._id)">withdraw</button></td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import feathers from "@/feathers";

export default {
  data() {
    return {
      listMerchants: []
    };
  },
  created() {
    feathers.service("users").on("created", data => {
      if (data.permission === "merchant") {
        this.listMerchants.push(data);
      }
    });
    feathers.service("users").on("patched", data => {
      if (data.permission === "merchant") {
        const index = this.listMerchants.findIndex(value => {
          return value._id === data._id;
        });
        this.listMerchants[index].balance = data.balance;
      }
    });
    feathers.authenticate().then(async () => {
      const { data } = await feathers.service("users").find({
        query: {
          permission: "merchant"
        }
      });
      this.listMerchants = data;
    });
  },
  methods: {
    withdraw: function(userId) {
      feathers.authenticate().then(async () => {
        try {
          await feathers.service("users").patch(userId, { balance: 0 });
        } catch (e) {}
      });
    }
  }
};
</script>
