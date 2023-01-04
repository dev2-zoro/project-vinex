<template>
  <div class="header-home">
    <div class="ctn-logo">
      <img class="logo" src="~/assets/images/ic-logo.png" />
    </div>
    <div class="ctn-btn">Liên kết ví</div>
  </div>
</template>
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
    margin-left: 24px;
    .logo {
      width: 122px;
      height: 32px;
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
