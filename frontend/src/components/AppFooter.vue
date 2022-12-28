<template>
  <footer class="footer">
    <div class="footer-text">
        <p>© {{ year }} Cashforce. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>
