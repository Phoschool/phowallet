<template>
  <div class="hello">
    <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
  return {
    paused: false
  }
},

methods: {
  onDecode (content) {
    console.log(content)
    this.paused = true
    // ...
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
