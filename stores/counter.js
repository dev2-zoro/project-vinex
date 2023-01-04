import { defineStore } from 'pinia';
import { ref, computed } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(4)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    counter.value++
  }

  return { counter, doubleCount, increment }
})