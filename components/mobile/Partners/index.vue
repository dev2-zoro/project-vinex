<template>
  <div class="partners">
    <div class="container-fluid">
      <Title
        title="Đối tác đáng tin cậy cho hành trình của bạn"
        suggest="Giao dịch bằng VND với phí 0đ"
        classSuggest="mx-0"
      />
      <div class="row">
        <Swiper
          :slides-per-view="1.2"
          :space-between="16"
          :centeredSlides="true"
        >
          <SwiperSlide
            v-for="partner in LIST_PARTNERS"
            :key="partner.id"
            class="partners-item"
          >
            <div class="partners-item__image">
              <img
                :src="`_nuxt/assets/images/home/partners/${partner.img}`"
                alt=""
              />
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
            <div
              class="partners-item__button btn btn-secondary d-flex align-items-center justify-content-center"
            >
              <p class="text-left">Giao dịch ngay</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from '~/components/common/Title/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { LIST_PARTNERS } from '~/resources/partners';

// export default {
//   components: {
//     Title,
//     Swiper,
//     SwiperSlide
//   },
//   setup() {
//     const partners = LIST_PARTNERS;
//     return {
//       partners
//     };
//   }
// };
// </script>

<style lang="scss" scoped src="~/static/styles/partners.scss"></style>
