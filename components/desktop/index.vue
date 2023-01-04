<template>
  <div class="ctn-home">
    <headerHome></headerHome>
    <Introduction />
    <Values />
    <Partners />
    <Questions />
    <Deal />
    <Actions />
    <footerHome></footerHome>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import Introduction from '~/components/common/Introduction/index.vue';
import Values from '~/components/common/Values/index.vue';
import Partners from '~/components/desktop/Partners/index.vue';
import Questions from '~/components/common/Questions/index.vue';
import Deal from '~/components/common/Deal/index.vue';
import Actions from '~/components/common/Actions/index.vue';
export default {
  components: {
    headerHome: defineAsyncComponent(() => import('./header-home.vue')),
    footerHome: defineAsyncComponent(() => import('./footer-home.vue')),
    Introduction,
    Values,
    Partners,
    Questions,
    Deal,
    Actions
  }
};
</script>
<style lang="scss" scoped>
.ctn-home {
}
</style>
