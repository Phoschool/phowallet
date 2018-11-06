<template>
  <div class="container">
    <h3 style="padding: 30px;text-align:center">Merchant</h3>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Id</th>
      <th scope="col">Balance</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, index) in listMerchants" :key="index">
      <th scope="row">{{index + 1}}</th>
      <td>{{value.studentId}}</td>
      <td>{{value.balance}}</td>
      <td>
        <button class="btn btn-info" @click="showInput(index)">Deposit</button>
        <br>
        <br>
        <input type="number" v-if="edit === index" v-model="depositNumber">
        <button class="btn btn-success" @click="deposit(value._id)"v-if="edit === index">Submit</button>
      </td>
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
      listMerchants: [],
      edit: "",
      depositNumber: ""
    };
  },
  created() {
    feathers.service("users").on("created", data => {
      if (data.permission === "student") {
        this.listMerchants.push(data);
      }
    });
    feathers.service("users").on("patched", data => {
      if (data.permission === "student") {
        const index = this.listMerchants.findIndex(value => {
          return value._id === data._id;
        });
        this.listMerchants[index].balance = data.balance;
      }
    });
    feathers.authenticate().then(async () => {
      const { data } = await feathers.service("users").find({
        query: {
          permission: "student"
        }
      });
      this.listMerchants = data;
    });
  },
  methods: {
    showInput: function(index) {
      this.edit = index;
    },
    deposit: function(userId) {
      feathers.authenticate().then(async () => {
        try {
          await feathers.service("users").patch(userId, {
            $inc: {
              balance: this.depositNumber
            }
          });
          this.depositNumber = "";
          this.edit = "";
        } catch (e) {
          console.log(e);
        }
      });
    }
  }
};
</script>
<style scoped>
button,
p,
input {
  display: inline-block;
}
</style>
