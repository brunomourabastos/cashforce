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
    <div class="table-orders">
      <table class="orders">
          <thead>
            <tr class="table-titles">
              <th>NOTA FISCAL</th>
              <th>SACADO</th>
              <th>CEDENTE</th>
              <th>EMISSÃO</th>
              <th>VALOR</th>
              <th>STATUS</th>
            </tr>
          </thead>
        <tbody>
          <tr class="table-values" v-for="order in orders" :key="order.id">
            <td>{{ order.nNf }}</td>
            <td>{{ order.buyer.name }}</td>
            <td>{{ order.provider.name }}</td>
            <td>{{ formatDate(order.emissionDate) }}</td>
            <td class="order-value"> {{ formatValue(order.value)  }}</td>
            <td class="order-status">{{ showStatus(order.orderStatusBuyer) }}</td>
            <td class="buyer-info"> <button> Dados do cedente </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import getAllOrders from '../api/requests/getAllOrders'
import { showStatus } from '../helper/showStatus'
import { formatDate, formatValue } from '../helper/formatData'

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
    },
    formatValue: formatValue,
    formatDate: formatDate,
    showStatus: showStatus
  },
  async mounted () {
    await this.getAllOrders()
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
.main {
  position: absolute;
  z-index: 1;
  left: 288px;
  height: 100vh;
  width: 1272px;
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
  width: 1272px;
  height: 64px;
  top: 0px;
  border-bottom: 1px solid #DFE2EB;
}
.main img {
  margin-top: 100px;
}
.table-orders {
  display: flex;
  width: 1177px;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: absolute;
  left: 48px;
  top: 176px;
}
.table-titles th {
  font-family: 'Dm Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #A1A8B8;
  align-items: center;
  text-transform: uppercase;
  border-radius: 4px;
  width: 1177px;
  flex: none;
  height: 22px;
  order: 0;
  flex-grow: 0;
}
.table-values {
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid #DFE2EB;
  border-radius: 6px;
  width: 1177px;
  height: 48px;
}
.table-values td {
  box-sizing: border-box;
  width: 1177px;
  height: 48px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  font-family: 'DM Sans';
  font-style: normal;

}
.order-value {
  color: #00AD8C;
}
.order-status {
  width: 59px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #00AD8C;
  text-transform: uppercase;
}
.buyer-info {
  text-align: end;
  padding-right: 8px;
}

table {
  border-spacing: 0 16px;
}

td button {
  padding: 8px 29px;
  border-radius: 24px;
  border: 1px solid #CAD3FF;
  font-size: 12px;
  line-height: 16px;
  color: #727D94;
  background-color: #FFFFFF;
}

</style>
