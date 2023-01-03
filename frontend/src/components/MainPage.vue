<template>
  <div class="main">
    <div class="header-div"></div>
    <div class="page-title">
      <div class="title-child">
        <img alt="Shaking hands logo" src="../assets/incolorhands.svg">
        <b class="nf-texto">Notas fiscais</b>
      </div>
      <div class="page-description">
        <p>Visualize as notas fiscais que você tem.</p>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="order in orders" :key="order.id">
          Sou uma nf: {{ order.nNf }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import getAllOrders from '../api/requests/getAllOrders'

export default defineComponent({
  name: 'MainPage',
  data () {
    return {
      orders: []
    }
  },
  methods: {
    async getAllOrders () {
      const response = await getAllOrders()
      this.orders = response.data
    }
  },
  async mounted () {
    await this.getAllOrders()
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

.page-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  margin-left: 48px;
}

.title-child .img {
  box-sizing: border-box;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 20.83%;
  bottom: 20.57%;
  border: 1px solid #021B51;
}

.nf-texto {
  margin-left: 9px;
  line-height: 28px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #021B51;
  font-family: 'Dm Sans';
  font-style: normal;
}

.page-description {
  font-family: 'Dm Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727D94;
  margin-top: -14px;
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
