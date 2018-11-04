<template>
<div class="container">
  <div class="row">

    <div class="col-md-6 col-xs-12">
      <router-link to="student">
        <img src="https://svgshare.com/i/9BH.svg">
        <h3>Student</h3>
      </router-link>
    </div>

    <div class="col-md-6 col-xs-12">
      <router-link to="merchant">
        <img src="https://svgshare.com/i/9B6.svg">
        <h3>Merchant</h3>
      </router-link>
    </div>

  </div>
</div>
</template>
<style scoped>
.container {
  margin-top: 50px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
}

h3 {
  text-align: center;
}
</style>
