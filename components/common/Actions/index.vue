<template>
  <div class="actions">
    <div class="container">
      <div class="row">
        <div class="d-flex align-items-center justify-content-center flex-column">
          <Title title="Bắt đầu giao dịch ngay" />
          <button class="btn btn-primary">Bắt đầu</button>
        </div>
      </div>
    </div>
    <div class="actions-background">
      <img src="~/assets/images/home/actions/vinex.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import Title from '~/components/common/Title';
</script>

<style lang="scss" scoped src="~/static/styles/actions.scss"></style>
