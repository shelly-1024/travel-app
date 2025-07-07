<template>
    <div class="orders-layout">
        <div class="orders-bg">
            <img src="../../../assets/image/orders/orders-bg.svg">
        </div>
        <div class="orders-back-btn" @click="onClickLeft">
          <img src="../../../assets/icon/orders/orders-left-arrow.svg" alt="返回" class="orders-back-icon" />
        </div>
        <div class="orders-title">订单</div>

        <div class="orders-bar">
            <img src="../../../assets/image/orders/orders-nav.svg">
        </div>
        <div class="orders-white-rect"></div>
        <div class="orders-search">
            <img src="../../../assets/image/orders/orders-search.svg">
        </div>
        <div class="orders-1">
            <img src="../../../assets/image/orders/orders-1.svg">
        </div>
       
    </div>
    
</template>

<script>
export default{
    methods: {
        onClickLeft() {
        history.back(); // 返回上一页
        }
    }
}
</script>

<style>
.orders-bg{
    position: absolute;
    top:-22.6px;
    left:0px;
    z-index: 0;
}
.orders-back-icon{
    position: absolute;
    top:46px;
    left:7px;
    z-index: 1;  

}
.orders-title{
  position: absolute;
  font-size: 20px;
  color:#000000;   
  top:48px;
  left:167px;
  z-index: 1;  
  font-weight: bold;
}
.orders-bar{
    position: absolute;
    top:84px;
    left:-1px;
    z-index: 1;  

}
.orders-white-rect{
  position: absolute;
  width: 407px;       
  height: 641px;     
  background:#FFFFFF;
  top:145px;
  left:-8px;
  z-index: 0;
}
.orders-search{
    position: absolute;
    top:145px;
    left:16px;
    z-index: 1;  

}
.orders-1{
    position: absolute;
    top:208px;
    left:20px;
    z-index: 1;  
}
</style>