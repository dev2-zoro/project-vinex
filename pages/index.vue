<template>
  <div  name="default">
    <desktop v-if="$device.isDesktop" />
    <mobile v-else/>
  </div>
</template>
  
<script>
export default {
  components: {
    mobile: () => import("../components/mobile/index"),
    desktop: () => import("../components/desktop/index"),
  }
};
</script>