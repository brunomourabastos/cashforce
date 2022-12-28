<template>
  <div class="home">
    <MainPage msg="Visualize as notas fiscais que você tem."/>
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
