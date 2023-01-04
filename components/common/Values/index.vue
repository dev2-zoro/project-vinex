<template>
  <div class="values">
    <Title
      customClass="text-center"
      title="Tại sao chọn VinEx?"
      suggest="Chúng tôi cung cấp cho bạn sự an toàn, hiệu quả và đa dạng."
    />
    <div class="container">
      <div class="row values-content">
        <div
        v-for="value in LIST_VALUES"
        class="col-lg-4 values-item"
        :key="value.id"
      >
        <div class="values-item__image d-flex align-items-center justify-content-center">
          <img :src="`_nuxt/assets/images/home/values/${value.img}`" alt="" />
        </div>
        <div class="values-item__title">
          <p class="text-center">{{ value.title }}</p>
        </div>
        <div class="values-item__text">
          <p class="text-center">{{ value.text }}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from '~/components/common/Title/index.vue';
import { LIST_VALUES } from '~~/resources/values';
</script>

<style lang="scss" scoped src="~/static/styles/values.scss"></style>
