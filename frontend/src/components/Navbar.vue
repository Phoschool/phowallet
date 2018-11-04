<template>
<div class="nav">
  <div v-if="loged">
    <img src="https://i.imgur.com/nVebqOV.png" class="coin">
    <p>{{balance}}</p>
  </div>
  <div v-if="loged">
    <img :src="profileImage" class="profile">
  </div>
</div>
</template>
<script>
export default {
  props: {
    balance: {
      type: Number
    },
    loged: {
      type: Boolean,
      default: false
    },
    profileImage: {
      type: String
    }
  }
};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  background-color: #ff9800;
  height: 70px;
}
p {
  clear: left;
  display: inline-block;
  padding-bottom: 5px;
  font-weight: 500;
}
.coin {
  clear: left;
  display: inline-block;
  margin-top: 23px;
  width: 20px;
}
.profile {
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
