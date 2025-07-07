<template>
    <div id="gentuanyou-layout">
      <div id="gentuanyou-search-box">
        <div class="gentuanyou-return"  @click="onClickLeft">
          <img src="../../../assets/icon/gentuanyou/gentuanyou-arrow.png">
        </div>
        <div class="gentuanyou-kuang">
          <img class="gentuanyou-position" src="../../../assets/icon/gentuanyou/gentuanyou-position.png">
          <span class="gentuanyou-chufadi" >上海出发</span>
          <form class="gentuanyou-searchbox-form" @submit.prevent="search">
                <input type="text" v-model="searchText" class="gentuanyou-searchbox-input" name="words"
                    autocomplete="off"
                    placeholder="张家界" @keydown.enter="search">
          </form>
          <img class="gentuanyou-search" src="../../../assets/icon/gentuanyou/gentuanyou-search.png">
          <div class="gentuanyou-huafenxian"></div>
          <img class="gentuanyou-cha" src="../../../assets/icon/gentuanyou/gentuanyou-cha.png">
        </div>
        <img class="gentuanyou-kefu" src="../../../assets/icon/gentuanyou/gentuanyou-kf.png">
        <img class="gentuanyou-more" src="../../../assets/icon/gentuanyou/gentuanyou-more.png">
        <span class="gentuanyou-wenzi1" >客服</span>
        <span class="gentuanyou-wenzi2">更多</span>
      </div>
      <div id="gentuanyou-after">
        <img src="../../../assets/image/gentuanyou/gentuanyou-baise2.png" class="gentuanyou-white2">
        <div id="gentuanyou-white">
          <img src="../../../assets/icon/gentuanyou/gentuanyou-zh.png" class="gentuanyou-zonghe">
          <span class="gentuanyou-zonghe-wenzi">综合</span>
          <img src="../../../assets/icon/gentuanyou/gentuanyou-flag.png" class="gentuanyou-flag">
          <span class="gentuanyou-flag-wenzi">跟团游</span>
          <img src="../../../assets/icon/gentuanyou/gentuanyou-dz.png" class="gentuanyou-dingzhi">
          <span class="gentuanyou-dingzhi-wenzi">私家团·定制</span>
        </div>
        <div id="gentuanyou-tuijian">
          <img class="gentuanyou-fenghuang" src="../../../assets/image/gentuanyou/gentuanyou-fh.svg">
          <img class="gentuanyou-changsha" src="../../../assets/image/gentuanyou/gentuanyou-changsha.svg">
          <img class="gentuanyou-yidi" src="../../../assets/image/gentuanyou/gentuanyou-ground.svg">
          <img class="gentuanyou-shaoshan" src="../../../assets/image/gentuanyou/gentuanyou-ss.svg">
        </div>
        <div id="gentuanyou-biaoqian">
          <div class="gentuanyou-shaixuan" >
            <span class="gentuanyou-shaixuan-wenzi">筛选</span>
            <img class="gentuanyou-bottom-arrow" src="../../../assets/icon/gentuanyou/gentuanyou-bottom-arrow.png">
          </div>
          <div class="gentuanyou-date">
            <span class="gentuanyou-date-wenzi">天数/日期</span>
            <img class="gentuanyou-bottom-arrow" src="../../../assets/icon/gentuanyou/gentuanyou-bottom-arrow.png">
          </div>
          <div class="gentuanyou-dangdicantuan">
            <span class="gentuanyou-dangdicantuan-wenzi">当地参团</span>
          </div>
          <div class="gentuanyou-qingzizhengxuan">
            <span class="gentuanyou-qingzizhenxuan-wenzi">亲子甄选</span>
            <img class="gentuanyou-qingzi-hudong" src="../../../assets/icon/gentuanyou/gentuanyou-qzzx.png">
          </div>
          <div class="gentuanyou-product">
            <span class="gentuanyou-product-wenzi">产品钻级</span>
            <img class="gentuanyou-bottom-arrow" src="../../../assets/icon/gentuanyou/gentuanyou-bottom-arrow.png">
          </div>
          <div class="gentuanyou-most">
            <span class="gentuanyou-most-wenzi">最多9人团</span>
          </div>
        </div>
        <img src="../../../assets/image/gentuanyou/gentuanyou-line.png" class="gentuanyou-line">
        <div id="gentuanyou-zhibo">
          <span >张家界热门直播间</span>
          <span>最高减100元</span>
          <span>直播中</span>
        </div>
      </div>
      <div id="gentuanyou-first">
          <span>张家界</span>
          <span>国家森林公园+天门山国家森</span>
          <span>林公园+芙蓉镇+凤凰古...</span>
          <div class="gentuanyou-maidian">
            <span class="gentuanyou-maidian-wenzi">卖点：</span>
            <span>景区快速排队通道|亲子游|纯玩</span>
          </div>
          <img class="gentuanyou-car" src="../../../assets/icon/gentuanyou/gentuanyou-car.png">
          <span>5-35座 | 驾龄5年+</span>
          <img class="gentuanyou-car-header" src="../../../assets/image/gentuanyou/gentuanyou-sjavatar.png">
          <span class="gentuanyou-car-choose" >394名司导可选，含</span>
          <span class="gentuanyou-jinpai">金牌司导</span>
          <img class="gentuanyou-jinpai-line" src="../../../assets/image/gentuanyou/gentuanyou-jinpai-line.png">
          <img class="gentuanyou-title1" src="../../../assets/image/gentuanyou/gentuanyou-tag1.svg">
          <span class="gentuanyou-score" >4.9分</span>
          <span class="gentuanyou-sale">已售241</span>
          <span class="gentuanyou-place">张家界</span>
          <span class="gentuanyou-￥">￥</span>
          <span class="gentuanyou-2300">2300</span>
          <span class="gentuanyou-qi">起</span>
      </div>
      <div id="gentuanyou-second">
          <span>长沙+张家界+天门山+凤凰5日4晚跟团游</span>
          <div class="gentuanyou-maidian2">
            <span class="gentuanyou-maidian-wenzi2">卖点：</span>
            <span>18人团【纯玩0自费】暑期亲子出行送...</span>
          </div>
          <img class="gentuanyou-title2" src="../../../assets/image/gentuanyou/gentuanyou-title2.svg">
          <span class="gentuanyou-score2" >4.7分</span>
          <span class="gentuanyou-paiming">张家界高档跟团游No.4</span>
          <span class="gentuanyou-sale2">已售4532人</span>
          <span class="gentuanyou-place2">上海出发参团</span>
          <span class="gentuanyou-￥2">￥</span>
          <span class="gentuanyou-1899">1899</span>
          <span class="gentuanyou-qi2">起</span>
          <img  class="gentuanyou-ziying" src="../../../assets/image/gentuanyou/gentuanyou-ziying.svg">
          <img class="gentuanyou-cuxiao" src="../../../assets/image/gentuanyou/gentuanyou-cuxiao.svg">
          <span class="gentuanyou-last">长沙当地参团（不含大交通）</span>
          <img class="gentuanyou-1404" src="../../../assets/image/gentuanyou/gentuanyou-1404.svg">
      </div>
      <div id="gentuanyou-third">
          <span>长沙+张家界+天门山+凤凰5日4晚拼小团</span>
          <div class="gentuanyou-maidian2">
            <span class="gentuanyou-maidian-wenzi2">卖点：</span>
            <span>【2-9人含4大VIP通道】-纯玩特惠专线...</span>
          </div>
          <img class="gentuanyou-title2" src="../../../assets/image/gentuanyou/gentuanyou-title2.svg">
          <span class="gentuanyou-score2" >4.9分</span>
          <span class="gentuanyou-paiming">“配合司机服务周到”</span>
          <span class="gentuanyou-sale2">已售241人</span>
          <span class="gentuanyou-place2">上海出发参团</span>
          <span class="gentuanyou-￥2">￥</span>
          <span class="gentuanyou-3905">3905</span>
          <span class="gentuanyou-qi2">起</span>
          <img  class="gentuanyou-ziying" src="../../../assets/image/gentuanyou/gentuanyou-ziying.svg">
      </div>
      <img src="../../../assets/image/gentuanyou/gentuanyou-last-line.png" class="gentuanyou-line-last">
      <span class="gentuanyou-look-more">查看更多</span>
      <img src="../../../assets/image/gentuanyou/gentuanyou-arrow-last.png" class="gentuanyou-arrow-last">
    </div>
</template>

<script>
export default {
    setup() {
        const onClickLeft = () => history.back();
        return {
        onClickLeft,
        };
    },
};
</script>

<style>
#gentuanyou-layout{
  background: 
    linear-gradient(360deg, rgb(255, 255, 255) 0%, rgba(243, 232, 218, 1) 100%) no-repeat,
    #ffffff; /* 第二层纯白背景 */
  background-size: 100% 300px; /* 渐变高300px */
  position:absolute;
  top:0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height:1150px ;
  width: 100%;
  overflow: hidden;
  }
#gentuanyou-search-box{
  height:39px;
  flex-direction: row;
  display: flex;
  position:relative;
  width:100%;
  top:53px;
}
.gentuanyou-return{
  width: 24px;
  height: 24px;
  position:relative;
  left:10.91px;
  top:10px;
}
.gentuanyou-kuang{
  width: 276px;
  height: 39px;
  position:relative;
  left:20.09px;
  background: rgba(255, 255, 255, 1);
  border-radius: 999px;
}
.gentuanyou-chufadi{
  position:absolute;
  width: 52px;
  height: 19px;
  top:10px;
  left:35px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 18.82px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;

}
.gentuanyou-position{
  position:absolute;
  width: 16px;
  height: 17px;
  top:11px;
  left:12px;
}
.gentuanyou-searchbox-input{
  border:none;
  position:absolute;
  width: 126px;
  height: 15px;
  top:11.8px;
  left:143px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  color: rgba(156, 163, 175, 1);
  text-align: left;
  vertical-align: middle;
}
.gentuanyou-search{
  position:absolute;
  width: 17px;
  height: 17px;
  top:11px;
  left:123px;
}
.gentuanyou-huafenxian{
  position:absolute;
  width: 3px;
  height: 40px;
  top:0px;
  left:112px;
  background: rgba(244, 235, 223, 1);
}
.gentuanyou-cha{
  position:absolute;
  width: 17px;
  height: 17px;
  top:11px;
  left:244px;
}
.gentuanyou-more{
  position:absolute;
  width: 16px;
  height: 16px;
  top:7px;
  left:364px;
}
.gentuanyou-kefu{
  position:absolute;
  width: 18px;
  height: 18px;
  top:7px;
  left:332px;
}
.gentuanyou-wenzi1{
  position:absolute;
  width: 20px;
  height: 15.39px;
  top:25px;
  left:330px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 15px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-wenzi2{
  position:absolute;
  width: 20px;
  height: 15.39px;
  top:25px;
  left:362px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 15px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
#gentuanyou-after{
  background-image: url(../../../assets/image/gentuanyou/gentuanyou-baise.png);
  left: -5px;
  top: 107px;
  width: 390px;
  height: 627px;
  position: absolute;
}

.gentuanyou-white2{
  position:absolute;
  right:-5px;
  top:60px;

}

.gentuanyou-zonghe{
  left: 65px;
  top: 5px;
  width: 45px;
  height: 45px;
  position: relative;
}

.gentuanyou-zonghe-wenzi{
  left: 75px;
  top:42px;
  width: 24px;
  height: 18px;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}

.gentuanyou-flag{
  left: 191px;
  top: 15px;
  width: 24px;
  height: 24px;
  position: absolute;
}

.gentuanyou-flag-wenzi{
  left: 185px;
  top:42px;
  width: 36px;
  height: 18px;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}

.gentuanyou-dingzhi{
  left: 314px;
  top: 15px;
  width: 24px;
  height: 24px;
  position: absolute;
}

.gentuanyou-dingzhi-wenzi{
  left: 295px;
  top:42px;
  width: 72px;
  height: 18px;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}

#gentuanyou-tuijian {
  position: absolute;
  left: 0;
  top: 63px;
  width: 100%;
  height: 89px; 
  overflow-x: auto; 
  overflow-y: hidden; 
  white-space: nowrap;
  padding: 0 10px;
  box-sizing: border-box;
}

#gentuanyou-tuijian img {
  display: inline-block; /* 让图片横排显示 */
  margin-right: 10px; /* 图片之间留点间距 */
  width: 103px;
  height: 69px;
}

#gentuanyou-tuijian::-webkit-scrollbar {
  display: none;
}

.gentuanyou-fenghuang{
  left: 11px;
  top: 10px;
  width: 103px;
  height: 69px;
  position: absolute;
}

.gentuanyou-changsha{
  left: 132px;
  top: 10px;
  width: 103px;
  height: 69px;
  position:absolute;

}

.gentuanyou-yidi{
  left: 253px;
  top: 12px;
  width: 103px;
  height: 69px;
  position:absolute;
}

.gentuanyou-shaoshan{
  left: 374px;
  top: 12px;
  width: 103px;
  height: 69px;
  position:absolute;
}
#gentuanyou-biaoqian{
  display:flex;
  align-items: flex-end;
  position:absolute;
  left:11px;
  top:157px;
}
.gentuanyou-shaixuan{
  left: 0px;
  top: 0px;
  width: 42px;
  height: 18px;
  background: rgba(229, 229, 229, 0.44);
  border-radius:3px;
  position:absolute;
  flex:1;
}

.gentuanyou-shaixuan span{
  left: 4px;
  top: 2px;
  width: 22px;
  height: 16px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 15.93px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  position:absolute;
}

.gentuanyou-shaixuan img{
  left: 29px;
  top: 5px;
  width: 8px;
  height: 9px;
  position:absolute;
}

.gentuanyou-date{
  left: 52px;
  top:0px;
  width: 68px;
  height: 18px;
  background: rgba(229, 229, 229, 0.44);
  border-radius:3px;
  position:absolute;
  flex:1;
}

.gentuanyou-date span{
  left: 4px;
  top: 2px;
  width: 49px;
  height: 16px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 15.93px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  position:absolute;
}

.gentuanyou-date img{
  left: 53px;
  top: 5px;
  width: 8px;
  height: 9px;
  position:absolute;
}

.gentuanyou-dangdicantuan{
  left: 130px;
  top:0px;
  width: 59px;
  height: 18px;
  background: rgba(229, 229, 229, 0.44);
  border-radius:3px;
  position:absolute;
  flex:1;
}

.gentuanyou-dangdicantuan span{
  left: 6px;
  top: 2px;
  width: 47px;
  height: 16px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 15.93px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  position:absolute;
}

.gentuanyou-qingzizhengxuan{
  left: 199px;
  top:0px;
  width: 73px;
  height: 18px;
  background: rgba(229, 229, 229, 0.44);
  border-radius:3px;
  position:absolute;
  flex:1;
}

.gentuanyou-qingzizhengxuan span{
  left: 18px;
  top: 2px;
  width: 47px;
  height: 16px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 15.93px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  position:absolute;
}

.gentuanyou-qingzizhengxuan img{
  left: 5px;
  top: 4px;
  width: 12px;
  height: 10px;
  position:absolute;
}

.gentuanyou-product{
  left: 282px;
  top:0px;
  width: 68px;
  height: 18px;
  background: rgba(229, 229, 229, 0.44);
  border-radius:3px;
  position:absolute;
  flex:1;
}

.gentuanyou-product span{
  left: 6px;
  top: 2px;
  width: 47px;
  height: 16px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 15.93px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  position:absolute;
}

.gentuanyou-product img{
  left: 53px;
  top: 5px;
  width: 8px;
  height: 9px;
  position:absolute;
}

.gentuanyou-most{
  left: 360px;
  top:0px;
  width: 59px;
  height: 18px;
  background: rgba(229, 229, 229, 0.44);
  border-radius:3px;
  position:absolute;
  flex:1;
}

.gentuanyou-most span{
  left: 6px;
  top: 2px;
  width: 56px;
  height: 16px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 15.93px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  position:absolute;
}
.gentuanyou-line{
  width: 369.71px;
  height: 1px;
  left: 11px;
  top:187px;
  position:absolute;
}

#gentuanyou-zhibo{
  position:absolute;
  top:200px;
  background-image: url("../../../assets/image/gentuanyou/gentuanyou-zb.png");
  left:16px;
  width: 368px;
  height: 47px;
}

#gentuanyou-zhibo span:first-child{
  width: 179px;
  height: 17px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 16.41px;
  color: rgba(135, 86, 12, 1);
  position:relative;
  top:14px;
  left:59px;
}

#gentuanyou-zhibo span:nth-child(2){
  width: 179px;
  height: 17px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 16.41px;
  color: rgba(135, 86, 12, 1);
  text-align: left;
  vertical-align: top;
  position:relative;
  top:19px;
  left:65px;
}

#gentuanyou-zhibo span:nth-child(3){
  width: 30px;
  height: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 11.72px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
  position:absolute;
  top:20px;
  left:310px;
}
#gentuanyou-first{
  background-image:url("../../../assets/image/gentuanyou/gentuanyou-first.png");
  width: 369.71px;
  height: 207px;
  left: 13px;
  top: 371px;
  position:absolute;
}
#gentuanyou-first>span:first-child{
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  position:absolute;
  left:114px;
  top:0px;
  width: 50px;
  height: 50px;
}
#gentuanyou-first>span:nth-child(2){
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
  position:absolute;
  left:163px;
  top:0px;
  width: 300px;
  height: 50px;
}
#gentuanyou-first>span:nth-child(3){
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
  position:absolute;
  left:114px;
  top:21px;
  width: 252px;
  height: 50px;
}
.gentuanyou-maidian{
  width: 249px;
  height: 25px;
  left: 117px;
  top: 52px;
  position:absolute;
  border-radius: 5px;
  background: rgba(204, 204, 204, 0.16);
}
.gentuanyou-maidian-wenzi{
  height: 25px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  position:absolute;
  left:4px;
  top:0px;
}
.gentuanyou-maidian>span:nth-child(2)
{
  height: 25px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  position:absolute;
  left:42px;
  top:0px;
}

.gentuanyou-car{
  width: 14px;
  height: 14px;
  left: 117px;
  top: 87px;
  position:absolute;
}

.gentuanyou-car+span{
  width: 89px;
  height: 25px;
  left: 138px;
  top: 81px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(166, 166, 166, 0.85);
  text-align: left;
  vertical-align: top;
}

.gentuanyou-car-header{
  width: 71px;
  height: 25px;
  left: 114px;
  top: 106px;
  position:absolute;
}

.gentuanyou-car-choose{
  width: 141px;
  height: 25px;
  left: 191px;
  top: 106px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(128, 128, 128, 1);
}

.gentuanyou-jinpai{
  width: 141px;
  height: 25px;
  left: 287px;
  top: 106px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(135, 86, 12, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-jinpai-line{
  width: 42px;
  height: 4px;
  left: 288px;
  top: 122px;
  position:absolute;
}
.gentuanyou-title1{
  width: 220px;
  height: 25px;
  left: 116px;
  top: 131px;
  position:absolute;
}
.gentuanyou-score{
  width: 33px;
  height: 25px;
  left: 116px;
  top: 154px;
  position:absolute;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-sale{
  width: 42px;
  height: 25px;
  left: 155px;
  top: 154px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(135, 86, 12, 1);
  text-align: left;
  vertical-align: top;
  position:absolute;
}
.gentuanyou-place{
  width: 80px;
  height: 29px;
  left: 116px;
  top: 177px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(128, 128, 128, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-￥{
  width: 10px;
  height: 29px;
  left: 288px;
  top: 168px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
.gentuanyou-2300{
  width: 58px;
  height: 24px;
  left: 298px;
  top: 165px;
  position:absolute;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
.gentuanyou-qi{
  width: 58px;
  height: 24px;
  left:356px;
  top: 168px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
#gentuanyou-second{
  background-image:url("../../../assets/image/gentuanyou/gentuanyou-second.png");
  left: 12px;
  top: 591px;
  width: 369.71px;
  height: 271px;
  position:absolute;
}
#gentuanyou-second>span:first-child{
  width: 252px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
  left:114px;
  top:0px;
  position: absolute;
}
#gentuanyou-third>span:first-child{
  width: 252px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
  left:114px;
  top:0px;
  position: absolute;
}
#gentuanyou-third{
  background-image:url("../../../assets/image/gentuanyou/gentuanyou-third.png");
  left: 11px;
  top: 877px;
  width: 369.71px;
  height: 230.32px;
  position:absolute;
}
.gentuanyou-maidian2{
  width: 249px;
  height: 25px;
  left: 117px;
  top: 52px;
  position:absolute;
  border-radius: 5px;
  background: rgba(204, 204, 204, 0.16);
}
.gentuanyou-maidian-wenzi2{
  height: 25px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  position:absolute;
  left:4px;
  top:0px;
}
.gentuanyou-maidian2>span:nth-child(2)
{
  height: 25px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  position:absolute;
  left:42px;
  top:0px;
}
.gentuanyou-title2{
  width: 220px;
  height: 48px;
  position:absolute;
  left:117px;
  top:79px;
}
.gentuanyou-score2{
  width: 33px;
  height: 25px;
  position:absolute;
  left:118px;
  top:126px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(167, 45, 34, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-paiming{
  width: 112px;
  height: 25px;
  position:absolute;
  left:156px;
  top:126px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(135, 86, 12, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-ziying{
  width: 77px;
  height: 25px;
  position:absolute;
  left:116px;
  top:151px;
}
.gentuanyou-sale2{
  width: 59px;
  height: 25px;
  position:absolute;
  left:196px;
  top:151px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(135, 86, 12, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-place2{
  width: 66px;
  height: 25px;
  position:absolute;
  left:114px;
  top:175px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(128, 128, 128, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-￥2{
  width: 10px;
  height: 29px;
  left: 288px;
  top: 160px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
.gentuanyou-1899{
  width: 58px;
  height: 24px;
  left: 298px;
  top: 156px;
  position:absolute;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
.gentuanyou-3905{
  width: 58px;
  height: 24px;
  left: 298px;
  top: 156px;
  position:absolute;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
.gentuanyou-qi2{
  width: 58px;
  height: 24px;
  left:356px;
  top: 160px;
  position:absolute;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 28.13px;
  color: rgba(167, 45, 34, 1);
}
.gentuanyou-cuxiao{
  width: 92px;
  height: 25px;
  position:absolute;
  left:276px;
  top:182px;
}
.gentuanyou-last{
  width: 156px;
  height: 25px;
  position:absolute;
  left:102px;
  top:225px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-1404{
  width: 76px;
  height: 22px;
  position:absolute;
  left:282px;
  top:227px;
}
.gentuanyou-line-last{
  width: 370px;
  height: 1px;
  position:absolute;
  left:10px;
  top:1086px;
}
.gentuanyou-look-more{
  width: 56px;
  height: 25px;
  position:absolute;
  left:167px;
  top:1115px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.gentuanyou-arrow-last{
  width: 11px;
  height: 10px;
  position:absolute;
  left:228px;
  top:1123px;
}
</style>