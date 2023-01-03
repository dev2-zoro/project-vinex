<template>
  <div class="partners">
    <div class="container">
      <Title
        title="Đối tác đáng tin cậy cho hành trình của bạn"
        suggest="Giao dịch bằng VND với phí 0đ"
      />
      <div class="row partners-content">
        <div v-for="partner in LIST_PARTNERS" :key="partner.id" class="partners-item col-lg-3">
          <div class="partners-item__image">
            <img :src="`_nuxt/assets/images/home/partners/${partner.img}`" alt="" />
          </div>
          <div class="partners-item__title">
            <p class="text-left">
              {{ partner.title }}
            </p>
          </div>
          <div class="partners-item__text">
            <p class="text-left">
              {{ partner.text }}
            </p>
          </div>
          <div class="partners-item__button btn btn-secondary d-flex align-items-center justify-content-center">
            <p class="text-left">
              Giao dịch ngay
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from '~/components/common/Title';
import { LIST_PARTNERS } from '~/resources/partners';
</script>

<style lang="scss" scoped src="~/static/styles/partners.scss"></style>
