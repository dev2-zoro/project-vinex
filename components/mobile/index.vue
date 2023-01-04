<template>
  <div>
    <HeaderHome />
    <Introduction />
    <Values />
    <Partners />
    <Questions />
    <Deal />
    <Actions />
    <FooterHome />
  </div>
</template>

<script setup>
import HeaderHome from "~/components/mobile/header-home.vue";
import FooterHome from "~/components/mobile/footer-home.vue";
import Introduction from "~/components/common/Introduction/index.vue";
import Values from "~/components/common/Values/index.vue";
import Questions from "~/components/common/Questions/index.vue";
import Partners from "~/components/mobile/Partners/index.vue";
import Deal from "~/components/common/Deal/index.vue";
import Actions from "~/components/common/Actions/index.vue";
</script>

<style lang="scss" scoped>
.ctn-home {
  position: relative;
}
</style>
