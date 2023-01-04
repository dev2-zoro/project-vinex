<template>
  <div class="header-home">
    <div class="ctn-logo">
      <img class="logo" src="~/assets/images/ic-logo.png" />
      <div class="ctn-menu">
        <p class="txt-menu">Giao dịch</p>
        <img class="ic-arrow" src="~/assets/icons/arrow.svg" alt="" />
      </div>
      <div class="ctn-menu">
        <p class="txt-menu">Hỗ trợ</p>
        <img class="ic-arrow" src="~/assets/icons/arrow.svg" alt="" />
      </div>
    </div>
    <button class="btn btn-primary ctn-btn" @click="inc">Liên kết ví</button>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useCounterStore } from "~/stores/counter";
export default {
  setup() {
    /* ------------------store--------------- */
    const counterStore = useCounterStore();
    console.log(counterStore.counter);
    /* ---------------------------------------------------- */
    let count = ref(0);
    const countDouble = computed(() => count.value * 2);
    watch(count, (newVal) => {
      console.log("count changed", newVal);
    });
    const inc = () => {
      counterStore.increment();
      count.value += 1;
    };
    const dec = () => {
      if (count.value !== 0) {
        count.value -= 1;
      }
    };
    /* ---------------------------------------------------- */
    let msg = ref("some text");
    watch(msg, (newVal) => {
      console.log("msg changed", newVal);
    });
    const changeMessage = () => {
      msg.value = "new Message";
    };
    /* ---------------------------------------------------- */
    return {
      count,
      inc,
      dec,
      countDouble,
      msg,
      changeMessage,
      counterStore,
    };
  },
};
</script>
<style lang="scss" scoped>
.header-home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  top: 0px;
  background: #ffffff;
  border-bottom: 1px solid #f4f4f5;
  .ctn-logo {
    display: flex;
    flex-direction: row;
    margin-left: 24px;
    .logo {
      width: 122px;
      height: 32px;
      margin-right: 90px;
    }
    .ctn-menu {
      display: flex;
      align-items: center;
      margin-left: 25px;
      .txt-menu {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #18181b;
        margin-bottom: 0rem;
      }
      .ic-arrow {
        margin-left: 6px;
        width: 12px;
        height: 12px;
      }
    }
  }
  .ctn-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    width: 160px;
    height: 48px;
    background: #faac2e;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #18181b;
    :hover {
      cursor: pointer;
    }
  }
}
</style>
