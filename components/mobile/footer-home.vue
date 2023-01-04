<template>
  <div class="footer-home">
    <div class="ctn-menu">
      <div class="list-menu">
        <div v-for="item in about" :key="item.id" class="txt-name">
          {{ item.name }}
        </div>
      </div>
      <div class="list-menu">
        <div v-for="item in product" :key="item.id" class="txt-name">
          {{ item.name }}
        </div>
      </div>
      <div class="list-menu">
        <div v-for="item in service" :key="item.id" class="txt-name">
          {{ item.name }}
        </div>
      </div>
      <div class="list-menu">
        <div v-for="item in help" :key="item.id" class="txt-name">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="ctn-bottom">
      <p class="txt-bottom">VinEX © 2022</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about: [
        { name: "Về chúng tôi" },
        { name: "Thông tin thêm" },
        { name: "Cơ hội nghề nghiệp" },
        { name: "Hợp tác kinh doanh" },
        { name: "Cộng đồng" },
      ],
      product: [
        { name: "Sản phẩm" },
        { name: "Exchange" },
        { name: "Card" },
        { name: "Trust Wallet" },
      ],
      service: [
        { name: "Dịch vụ" },
        { name: "Đăng ký thương nhân P2P" },
        { name: "Card" },
        { name: "Trust Wallet" },
      ],
      help: [
        { name: "Hỗ trợ" },
        { name: "Phản hồi" },
        { name: "Trung tâm trợ giúp" },
        { name: "Phí giao dịch" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer-home {
  display: flex;
  width: 100%;
  height: 350px;
  background: #ffffff;
  justify-content: center;
  flex-direction: column;
  .ctn-menu {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    margin-top: 40px;
    justify-content: center;
    .list-menu {
      .txt-name {
        margin-top: 4px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #a0a0ab;
      }
      .txt-name:first-child {
        font-weight: 700;
        font-size: 16px;
        color: #000000;
      }
    }
  }
  .ctn-bottom {
    width: 100%;
    height: 61px;
    border-top: 1px solid #f4f4f5;
    display: flex;
    justify-content: center;
    align-items: center;
    .txt-bottom {
      color: #51525c;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 0rem;
    }
  }
}
</style>
