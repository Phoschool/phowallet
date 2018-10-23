<template>
  <div class="hello">
    <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paused: false
    };
  },

  methods: {
    onDecode(content) {
      console.log(content);
      this.paused = true;
      // ...
    }
  }
};
</script>
</style>
