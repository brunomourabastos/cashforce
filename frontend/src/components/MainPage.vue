<template>
  <div class="main">
    <div class="header-div"></div>
    <img alt="Shaking hands logo" src="../assets/incolorhands.svg"> Notas Fiscais
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainPage',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  position: absolute;
  z-index: 1;
  left: 288px;
  height: 100vh;
  width: 100vw;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0px 0px 15px;
}

.main .header-div {
  position: absolute;
  width: 100vw;
  height: 64px;
  top: 0px;
  border-bottom: 1px solid #DFE2EB;
}

.main img {
  margin-top: 100px;
}
</style>
