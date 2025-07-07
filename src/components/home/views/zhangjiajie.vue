<template>
  <div class="zhangjiajie-page">
    <!-- 顶部背景和标题 -->
    <div class="zhangjiajie-header">
        <!-- 左侧返回按钮 -->
        <div class="zhangjiajie-back-btn" @click="onClickLeft">
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-back.svg" alt="返回" class="zhangjiajie-back-icon" />
        </div>

        <div class="zhangjiajie-share" >
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-share.svg" alt="分享" class="zhangjiajie-share-icon" />
        </div>
        <div class="zhangjiajie-star" >
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-like.svg" alt="收藏" class="zhangjiajie-star-icon" />
        </div>
        <div class="zhangjiajie-more" >
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-more.svg" alt="更多" class="zhangjiajie-more-icon" />
        </div>
        <div class="zhangjiajie-album" >
          <img src="../../../assets/image/zhangjiajie/zhangjiajie-xc.svg" alt="相册" class="zhangjiajie-album-icon" />
          <div class="zhangjiajie-album-text">相册</div>
        </div>
        <div class="zhangjiajie-note" >
          <img src="../../../assets/image/zhangjiajie/zhangjiajie-ddbj.svg" alt="达人笔记" class="zhangjiajie-note-icon" />
          <div class="zhangjiajie-note-text">达人笔记</div>
        </div>
      <div class="zhangjiajie-header-bg">
        <img src="../../../assets/image/zhangjiajie/zhangjiajie-blq.svg" alt="张家界玻璃桥背景图" class="zhangjiajie-header-bg-img">
      </div>


    </div>
    <div class="zhangjiajie-glass-bridge">
        <div class="zhangjiajie-header-title">
            <div class="zhangjiajie-grey-rect"></div>
            <div class="zhangjiajie-bridge-text">张家界玻璃桥</div>
            <div clss="fire">
                <img src="../../../assets/icon/zhangjiajie/zhangjiajie-fire.svg" alt="火花" class="zhangjiajie-fire-icon" />
                <div class="zhangjiajie-fire-text">6.8</div>
            </div>
            <div class="zhangjiajie-score">
                <div class="zhangjiajie-brown-rect"></div>
                <div class="zhangjiajie-score1-text">4.6</div>
                <div class="zhangjiajie-score2-text">/5</div>
                <div class="zhangjiajie-comment-text">1876条点评</div>
                <img src="../../../assets/icon/zhangjiajie/zhangjiajie-right-arrow.svg" alt="右箭头" class="zhangjiajie-right-arrow" />
                <div class="zhangjiajie-amazing-text">“惊艳世界的高山峡谷玻璃桥”</div>
            </div>

        </div>

    </div>
    <!-- 景点基本信息 -->
    <div class="zhangjiajie-info-section">
        <div class="zhangjiajie-park-status-card">
          <div class="zhangjiajie-park-bg"></div>
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-clock.svg" alt="时钟" class="zhangjiajie-clock" /> 
          <div class="zhangjiajie-park-text1">开园中</div>   
          <div class="zhangjiajie-park-text2">08:30-15:30开放</div>      
        </div>
        <div class="zhangjiajie-ticket-status-card">
          <div class="zhangjiajie-ticket-bg"></div>
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-ticket.svg" alt="购票" class="zhangjiajie-ticket" /> 
          <div class="zhangjiajie-ticket-text1">需购票</div>   
          <div class="zhangjiajie-ticket-text2">门票￥53起</div>      
        </div>
        <div class="zhangjiajie-policy-card">
          <div class="zhangjiajie-policy-bg"></div>
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-ydzc.svg" alt="政策" class="zhangjiajie-policy" /> 
          <div class="zhangjiajie-policy-text1">优待政策</div>   
          <div class="zhangjiajie-policy-text2">儿童等</div>      
        </div>
        <img src="../../../assets/icon/zhangjiajie/zhangjiajie-rect.svg" alt="竖矩形" class="zhangjiajie-vertical-rect" />
        <img src="../../../assets/icon/zhangjiajie/zhangjiajie-down-right-arrow.svg" alt="下拉右箭头" class="zhangjiajie-right-arrow2" />

        <div class="zhangjiajie-map-card">
          <img src="../../../assets/image/zhangjiajie/zhangjiajie-map-bg.svg" alt="地图背景" class="zhangjiajie-map" /> 
          <div class="zhangjiajie-map-text1">张家界市慈利县张家界大峡谷景区内</div>   
          <div class="zhangjiajie-map-text2">地图</div>   
          <div class="zhangjiajie-map-text3">电话</div>
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-local.svg" alt="定位" class="zhangjiajie-position" /> 
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-phone.svg" alt="电话" class="zhangjiajie-phone" />      
        </div>
    </div>

    <!-- 公告和攻略 -->
    <img src="../../../assets/image/zhangjiajie/zhangjiajie-gg.svg" alt="公告" class="zhangjiajie-notice" />  

    <!-- 米白色背景 -->
    <div class="zhangjiajie-glass-bridge-bg"></div>

    <!-- 预订区域 -->
    <div class="zhangjiajie-booking">
      <!-- 灰色和白色背景 -->
      <div class="zhangjiajie-grey-bg"></div>
      <div class="zhangjiajie-white-bg"></div>

      <div class="zhangjiajie-top-bar">
        <img src="../../../assets/icon/zhangjiajie/zhangjiajie-dg.svg" alt="对钩" class="zhangjiajie-tick" />
        <div class="zhangjiajie-white-rect"></div>
        <div class="zhangjiajie-top-text1">预订</div>
        <div class="zhangjiajie-top-text2">点评/笔记</div>
        <div class="zhangjiajie-top-text3">周边</div>
        <img src="../../../assets/icon/zhangjiajie/zhangjiajie-yd.svg" alt="预定" class="zhangjiajie-book" />
      </div>

      <!-- 左侧导航栏 -->
      <div class="zhangjiajie-left-bar">

        <div class="zhangjiajie-left-bar-bg"></div>

        <div class="zhangjiajie-left-text3">园内项目</div>
        <div class="zhangjiajie-left-text4">门票套餐</div>
        <div class="zhangjiajie-left-text5">景点联票</div>
        <div class="zhangjiajie-left-text6">人气酒店</div>
        <div class="zhangjiajie-left-text7">一日游</div>
      </div>
    </div>

    <!-- 左侧导航 -->
    <div class="zhangjiajie-left-navigation">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ 'zhangjiajie-nav-item': true, 'zhangjiajie-active': zhangjiajie_activeNavIndex === index }"
        :style="{ top: item.top, left: item.left }"
        @click="onNavItemClick(index)"
      >
        {{ item.text }}
      </div>
    </div>
    
    <!-- 右侧内容 -->
    <div class="zhangjiajie-right-content">
      <!-- 根据选中的导航项显示不同内容 -->
      <div v-if="zhangjiajie_activeNavIndex === 0">
          <img src="../../../assets/icon/zhangjiajie/zhangjiajie-czjx.svg" alt="超值精选" class="zhangjiajie-super-select" />
          <!-- 领券和超值特惠 -->
          <img src="../../../assets/image/zhangjiajie/zhangjiajie-lq.svg" alt="领券" class="zhangjiajie-coupon" />
          <img src="../../../assets/image/zhangjiajie/zhangjiajie-sale.svg" alt="超值特惠" class="zhangjiajie-super-value" />
      </div>
      <div v-else-if="zhangjiajie_activeNavIndex === 1">
          <div class="zhangjiajie-red-rect"></div>
          <!-- 景点门票 -->
          <div class="zhangjiajie-entrance-ticket-text">景点门票</div>
          <img src="../../../assets/image/zhangjiajie/zhangjiajie-jdmp.svg" alt="景点门票" class="zhangjiajie-entrance-ticket-img" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AttractionDetail',
  data() {
    return {
      zhangjiajie_activeNavIndex: 0,
      navItems: [
        { text: '超值精选', top: '793px', left: '11px' },
        { text: '景点门票', top: '833px', left: '12px' }
      ]      
    }
  },
  methods: {
    onClickLeft() {
      history.back(); // 返回上一页
    },
    
    onNavItemClick(index) {
      this.zhangjiajie_activeNavIndex = index; // 更新 activeNavIndex
    }
  }

}

</script>

<style>
.zhangjiajie-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

/* 顶部标题区域 */
.zhangjiajie-header {
  position: relative;
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.zhangjiajie-back-btn {
  position: absolute; 
  top: 44px; 
  left: 8px; 
  z-index: 2; 
}
.zhangjiajie-share{
  position: absolute; 
  top: 48px; 
  left: 301px; 
  z-index: 2;   
}
.zhangjiajie-star{
  position: absolute; 
  top: 48px; 
  left: 331px; 
  z-index: 2;   
}
.zhangjiajie-more{
  position: absolute; 
  top: 48px; 
  left: 361px; 
  z-index: 2;   
}
.zhangjiajie-album-icon{
  position: absolute; 
  top: 187px; 
  left: 8px; 
  z-index: 2;   
}
.zhangjiajie-album-text{
    position: absolute; 
    font-size: 8px;
    color: #FFFFFF;
    font-weight: bold;
    top: 189px; 
    left: 18px;  
    z-index: 3;    
}
.zhangjiajie-note-icon{
  position: absolute; 
  top: 187px; 
  left: 56px; 
  z-index: 2;   
}
.zhangjiajie-note-text{
    position: absolute; 
    font-size: 8px;
    color: #FFFFFF;
    font-weight: bold;
    top: 189px; 
    left: 62px;  
    z-index: 3;    
}
.zhangjiajie-header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.zhangjiajie-glass-bridge-bg{
  position: absolute;
  width: 390px;       
  height: 700px;     
  background: #F6F1EB;
  border-radius: 20px; 
  top:208px;
  z-index: 0;
}
.zhangjiajie-grey-rect{
  position: absolute;
  width: 38px;       
  height: 3px;     
  background: #CCCCCC;
  border-radius: 2px; 
  top:219px;
  left:176px;
  z-index: 1;
}
.zhangjiajie-bridge-text{
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: #000000;  
  top:231px;
  left:18px;
  z-index: 1;
}
.zhangjiajie-fire-icon{
    position: absolute;
    top:243px;
    left:141px;
    z-index: 1;
}
.zhangjiajie-fire-text{
  position: absolute;
  font-size: 11px;
  color: #A72D22;  
  top:241px;
  left:153px;
  z-index: 1;    
}

.zhangjiajie-brown-rect{
  position: absolute;
  width: 46px;       
  height: 20px;     
  background: rgba(136, 103, 77, 0.7);
  border-radius: 4px; 
  top:267px;
  left:18px;
  z-index: 1;
}
.zhangjiajie-score1-text{
  position: absolute;
  font-size: 13px;
  color: #FFFFFF;  
  top:268px;
  left:22px;
  z-index: 1;    
}
.zhangjiajie-score2-text{
  position: absolute;
  font-size: 13px;
  color: #664329;  
  top:268px;
  left:44px;
  z-index: 1;
  letter-spacing: 4px;    
}
.zhangjiajie-comment-text{
  position: absolute;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.53);   
  top:268px;
  left:71px;
  z-index: 1; 
  font-weight: 500;
}   
.zhangjiajie-right-arrow{
    position: absolute;
    top:272px;
    left:143px;
    z-index: 1;
}
.zhangjiajie-amazing-text{
  position: absolute;
  font-size: 13px;
  color: #75431D;  
  top:268px;
  left:162px;
  z-index: 1;    
}



/* 景点基本信息区域 */
.zhangjiajie-park-bg {
  position: absolute;
  width: 105px;       
  height: 47px;     
  background:#FFFFFF;
  top:303px;
  left:18px;
  z-index: 1;
}
.zhangjiajie-clock{
    position: absolute;
    top:309px;
    left:24px;
    z-index: 1;

}
.zhangjiajie-park-text1{
  position: absolute;
  font-size: 13px;
  color: #A72D22;  
  top:307px;
  left:46px;
  z-index: 1;  
  font-weight: 500;  
}
.zhangjiajie-park-text2{
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.53);   
  top:330px;
  left:25px;
  z-index: 1;  
}
.zhangjiajie-ticket-bg {
  position: absolute;
  width: 81px;       
  height: 47px;     
  background:#FFFFFF;
  top:303px;
  left:131px;
  z-index: 1;

}
.zhangjiajie-ticket{
    position: absolute;
    top:308px;
    left:138px;
    z-index: 1;

}
.zhangjiajie-ticket-text1{
  position: absolute;
  font-size: 13px;
  color: #000000;  
  top:307px;
  left:162px;
  z-index: 1;  
  font-weight: 500;  
}
.zhangjiajie-ticket-text2{
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.53);   
  top:330px;
  left:139px;
  z-index: 1;  
}
.zhangjiajie-policy-bg {
  position: absolute;
  width: 87px;       
  height: 47px;     
  background:#FFFFFF;
  top:303px;
  left:221px;
  z-index: 1;

}
.zhangjiajie-policy{
    position: absolute;
    top:308px;
    left:228px;
    z-index: 1;

}
.zhangjiajie-policy-text1{
  position: absolute;
  font-size: 13px;
  color: #000000;  
  top:305px;
  left:246px;
  z-index: 1;  
  font-weight: 500;  
}
.zhangjiajie-policy-text2{
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.53);   
  top:330px;
  left:229px;
  z-index: 1;  
}
.zhangjiajie-vertical-rect{
    position: absolute;
    top:300px;
    left:331px;
    z-index: 1;

}
.zhangjiajie-right-arrow2{
    position: absolute;
    top:320px;
    left:349px;
    z-index: 1;

}
.zhangjiajie-map{
    position: absolute;
    top:370px;
    left:18px;
    z-index: 1;
}
.zhangjiajie-map-text1{
  position: absolute;
  font-size: 13px;
  color:#000000;   
  top:396px;
  left:32px;
  z-index: 1;  
}
.zhangjiajie-map-text2{
  position: absolute;
  font-size: 12px;
  color:#000000;   
  top:416px;
  left:268px;
  z-index: 1;  
}
.zhangjiajie-map-text3{
  position: absolute;
  font-size: 12px;
  color:#000000;   
  top:416px;
  left:321px;
  z-index: 1;  
}
.zhangjiajie-position{
    position: absolute;
    top:380px;
    left:266px;
    z-index: 1;

}
.zhangjiajie-phone{
    position: absolute;
    top:380px;
    left:319px;
    z-index: 1;

}
.zhangjiajie-notice{
    position: absolute;
    top:452px;
    left:16px;
    z-index: 1;

}
.zhangjiajie-tick{
    position: absolute;
    top:681px;
    left:19px;
    z-index: 1;

}
.zhangjiajie-white-rect{
  position: absolute;
  width: 112px;       
  height: 47px;     
  background:#FFFFFF;
  top:667px;
  left:0px;
  z-index: 0;
  border-radius: 10px;
}

.zhangjiajie-white-bg{
  position: absolute;
  width: 390px;       
  height: 350px;     
  background:#FFFFFF;
  top:704px;
  left:0px;
  z-index: 0;
}
.zhangjiajie-grey-bg{
  position: absolute;
  width: 390px;       
  height: 384px;     
  background:#EDEDED;
  top:667px;
  left:0px;
  z-index: 0;
  border-radius: 10px;
}
.zhangjiajie-top-text1{
  position: absolute;
  font-size: 18px;
  color:#A72D22;   
  top:678px;
  left:47px;
  z-index: 1;  
  font-weight: bold;
}
.zhangjiajie-top-text2{
  position: absolute;
  font-size: 16px;
  color:#000000;   
  top:678px;
  left:157px;
  z-index: 1;  
}
.zhangjiajie-top-text3{
  position: absolute;
  font-size: 16px;
  color:#000000;   
  top:678px;
  left:312px;
  z-index: 1;  
}
.zhangjiajie-book{
    position: absolute;
    top:725px;
    left:14px;
    z-index: 1;

}
.zhangjiajie-coupon{
    position: absolute;
    top:784px;
    left:95px;
    z-index: 1;

}
.zhangjiajie-super-value{
    position: absolute;
    top:843px;
    left:95px;
    z-index: 1;

}
.zhangjiajie-super-select{
    position: absolute;
    top:782px;
    left:-3px;
    z-index: 1;

}
.zhangjiajie-left-bar-bg{
  position: absolute;
  width: 96px;       
  height: 249px;     
  background: rgba(237, 237, 237, 0.61);
  top:770px;
  left:-14px;
  z-index: 0;
  border-radius: 5px;
}

.zhangjiajie-left-text3{
  position: absolute;
  font-size: 13px;
  color:#000000;   
  top:863px;
  left:12px;
  z-index: 1;  
  font-weight: 500;
}
.zhangjiajie-left-text4{
  position: absolute;
  font-size: 13px;
  color:#000000;   
  top:893px;
  left:12px;
  z-index: 1;  
  font-weight: 500;
}
.zhangjiajie-left-text5{
  position: absolute;
  font-size: 13px;
  color:#000000;   
  top:923px;
  left:12px;
  z-index: 1;  
  font-weight: 500;
}
.zhangjiajie-left-text6{
  position: absolute;
  font-size: 13px;
  color:#000000;   
  top:953px;
  left:12px;
  z-index: 1;  
  font-weight: 500;
}
.zhangjiajie-left-text7{
  position: absolute;
  font-size: 13px;
  color:#000000;   
  top:983px;
  left:12px;
  z-index: 1;  
  font-weight: 500;
}
.zhangjiajie-red-rect{
  position: absolute;
  width: 86px;       
  height: 35.77px;     
  background:#A72D22;
  top:823px;
  left:-4px;
  z-index: 0;
  border-radius: 4px;
}
/* 景点门票*/
.zhangjiajie-entrance-ticket-text{
  position: absolute;
  font-size: 13px;
  color:#808080;   
  top:770px;
  left:95px;
  z-index: 1; 
  font-weight: 500; 
}
.zhangjiajie-entrance-ticket-img{
    position: absolute;
    top:793px;
    left:93px;
    z-index: 1;

}


.zhangjiajie-nav-item {
  position: absolute;
  color: #000000; /* 默认字体颜色 */
  font-size: 13px;
  font-weight: 500;
  z-index: 2; 
}

.zhangjiajie-active {
  position: absolute;
  font-size: 14px;
  color: #F5DADA; /* 激活状态的字体颜色 */
  font-weight: bold; /* 激活状态加粗（可选） */
  z-index: 2; 

}

</style>