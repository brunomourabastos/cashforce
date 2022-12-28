<template>
  <aside class="sidenav">
    <div>
      <div class="cashforce-logo">
        <img alt="Cashforce logo" src="../assets/logo.svg">
      </div>
      <div class="side-text">
        <img alt="Hands icon" src="../assets/hands.svg">
        <p>Notas fiscais</p>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.sidenav {
  background-color: #FBFDFE;
  position: fixed;
  top: 0;
  left: 0;
  width: 288px;
  height: 100vh;
}

.cashforce-logo {
  width: 288px;
  height: 80px;
  flex: none;
  order: 0;
}

.cashforce-logo img {
  position: absolute;
  width: 160px;
  height: 30px;
  left: 24px;
  top: 25px;
}

.sidenav .side-text {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border-left: 4px #00AD8C solid;
  display: flex;
  align-items: center;
  color: #00AD8C
}

.side-text img {
  margin-left: 15px;
}

.sidenav .side-text p {
  margin-left: 15px;
  padding: 10px 0px;
  gap: 10px;
}

</style>
