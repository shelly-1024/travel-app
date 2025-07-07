<template>
    <div class="error-layout">
        <img src="../assets/icon/com/404.svg">
        <p>找不到页面了！！！</p>
        <div onclick="javascript:history.back(-1)">返回上一页</div>
    </div>
</template>

<script>
//author：陈一鸣
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
}
</script>

<style>
.error-layout{
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}
.error-layout img{
    margin-top: 158px;
    width: 287px;
    height: 339px;
}
.error-layout p{
    font-size: 13px;
    color: #A72D22;
    text-align: center;
}
.error-layout div{
    display: flex;
    margin-top: 104px;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #B94237;
    border-radius: 999px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}
</style>