<template>
  <div class="header-home">
    <div class="ctn-logo">
      <img class="logo" src="~/assets/images/ic-menu.png" />
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
  height: 60px;
  top: 0px;
  background: #ffffff;
  border-bottom: 1px solid #f4f4f5;
  .ctn-logo {
    margin-left: 16px;
    .logo {
      width: 24px;
      height: 24px;
    }
  }
  .ctn-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    width: 120px;
    height: 30px;
    background: #faac2e;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    :hover {
      cursor: pointer;
    }
  }
}
</style>
