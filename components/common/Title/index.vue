<template>
  <div :class="['title', customClass]">
    <h2>{{ title }}</h2>
    <p :class="[classSuggest]">{{ suggest }}</p>
  </div>
</template>

<script setup>
defineProps(['customClass', 'title', 'suggest', 'classSuggest']);
</script>

<style lang="scss" scoped src="~/static/styles/title.scss"></style>
