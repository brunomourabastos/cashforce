<template>
  <div class="home">
    <MainPage msg="Testando Aplicação"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPage from '@/components/MainPage.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    MainPage
  }
})
</script>
