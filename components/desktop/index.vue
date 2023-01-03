<template>
  <div class="ctn-home">
    <headerHome></headerHome>
    <p>desktop</p>
    <footerHome></footerHome>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    headerHome: defineAsyncComponent(() => import("./header-home.vue")),
    footerHome: defineAsyncComponent(() => import("./footer-home.vue")),
  }
};
</script>
<style lang="scss" scoped>
.ctn-home{
  
}
</style>
