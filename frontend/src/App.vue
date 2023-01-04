<template>
  <side-bar/>
  <router-view/>
</template>

<script lang="ts">
import SideBar from './components/SideBar.vue'

export default {
  components: {
    SideBar
  }
}
</script>
