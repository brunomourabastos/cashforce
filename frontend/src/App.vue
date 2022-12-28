<template>
  <side-bar/>
  <router-view/>
  <app-footer/>
</template>

<script lang="ts">
import SideBar from './components/SideBar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    SideBar,
    AppFooter
  }
}
</script>
