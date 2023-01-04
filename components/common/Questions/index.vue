<template>
  <div class="questions">
    <div class="container">
      <div class="row">
        <Title title="Hỏi & Đáp" />
        <div class="questions-content">
          <div class="row questions-list">
            <div
              v-for="question in LIST_QUESTIONS"
              :key="question.id"
              class="col-lg-6 questions-item"
            >
              <p>{{ question.title }}</p>
              <img src="~/assets/icons/arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from '~/components/common/Title';
import { LIST_QUESTIONS } from '~/resources/questions';
</script>

<style lang="scss" scoped src="~/static/styles/questions.scss"></style>
