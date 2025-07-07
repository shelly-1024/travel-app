<template>
    <div class="view-bg1">
        <img src="../../../assets/image/search/search-bg.png">
    </div>
    <div class="hotel-haeder">
        <van-nav-bar border="false" @click-left="onClickLeft">
            <template #left>
               <img src="../../../assets/icon/com/back.png" class="search-back">
            </template>
            <template #title>
                <div class="hotel-searchbox">
                    <p>上海</p> 
                    <div class="hotel-searchbox-date">
                        <span>07-02  1间</span>
                        <span>07-02  1人</span>
                    </div>
                    <div class="hotel-searchbox-line"></div>
                    <div class="hotel-searchbox-wrap">
                        <img src="../../../assets/icon/hotel/hotel-search.svg">
                        <form class="hotel-searchbox-form" @submit.prevent="search">
                            <input type="text" v-model="searchText" class="searchbox-input" name="words"
                                autocomplete="off"
                                placeholder="外滩附近" @keydown.enter="search">
                        </form>
                    </div>
                </div>
            </template>
            <template #right>
                <div class="hotel-header-icon">
                    <img src="../../../assets/icon/hotel/hotel-map.svg">
                    <p>地图</p>
                </div>
            </template>
        </van-nav-bar>
        
    </div>
    <div class="hotel-nav">
        <div  class="hotel-nav-item" v-for="item in hotelNavList" :key="item.id">
            <p>{{ item.text }}</p>
            <img src="../../../assets/icon/hotel/hotel-down-arrow.svg">
        </div>
    </div>
    <div class="hotel-card">
        <div  class="hotel-card-item" v-for="item in hotelCardList" :key="item.id">
            <img v-if="item.id === 3" src="../../../assets/icon/hotel/hotel-money.svg">
            <p>{{ item.text }}</p>
            <img v-if="item.id === 4" src="../../../assets/icon/hotel/hotel-down-arrow.svg">
        </div>
    </div>
    <div class="hotel-body">
        <div class="hotel-ad">
            <div class="hotel-ad-left">
                <div class="hotel-ad-title">
                    <img src="../../../assets/image/hotel/hotel-szhl.svg">
                    <img src="../../../assets/icon/hotel/hotel-question.svg">
                </div>
                <div class="hotel-ad-detail">
                    <span>首住好礼</span>
                    <span>85折起</span>
                </div>
            </div>
            <div class="hotel-ad-right">查看</div>
        </div>
        <div class="hotel-detail">
            <div class="hotel-detail-item" v-for="item in hotelItemList" :key="item.id">
                <img :src="item.img" :alt="item.id">
                <div class="hotel-detail-content">
                    <div class="hotel-detail-name">
                        {{ item.name }}
                        <img src="../../../assets/icon/hotel/hotel-vip-F.svg" v-for="img in item.vipfList" :key="img.id">
                    </div>
                    <div class="hotel-detail-eval">
                        <div>{{ item.score }}</div>
                        <span>{{ item.eval }}</span>
                        <p>{{ item.evalnum }}</p>
                    </div>
                    <p class="hotel-detail-local">{{ item.local }}</p>
                    <p class="hotel-detail-comment">{{ item.comments }}</p>
                    <div class="hotel-detail-tag">
                        <div v-if="item.isCanDelay" class="hotel-detail-tag-item1">延迟退房</div>
                        <div class="hotel-detail-tag-item" v-for="tag in item.hotelTagList" :key="item.id">
                            {{ tag.tagText }}
                        </div>
                    </div>
                    <div class="hotel-other">
                        <div class="hotel-rank">
                            <img v-if="item.name==='维也纳国际酒店（上海浦东机场店）'" src="../../../assets/icon/hotel/hotel-vip.svg">
                            {{ item.rank }}
                        </div>
                        <div class="hotel-price-layout">
                            <div class="hotel-oprice">
                                <span>{{ item.oPrice }}</span>
                                <div class="hotel-price">￥<span>{{ item.price }}</span>起</div>
                            </div>
                            <div class="hotel-sale">{{ item.priceTag }}</div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="hotel-detail-more">
                查看更多
                <img src="../../../assets/icon/hotel/hotel-arrow-down.svg">
            </div>
        </div>
    </div>
</template>

<script>
//author：陈一鸣
import "../../../assets/styles/com.css";

import ht from "../../../assets/image/hotel/hotel-ht.png";
import wyn from "../../../assets/image/hotel/hotel-wyngj.png";
import mxgjp from "../../../assets/image/hotel/hotel-mxg.png";
import rjjx from "../../../assets/image/hotel/hotel-rjjx.png";

export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
  data(){
        return{
            hotelNavList:[
                {
                    id: 1,
                    text: '欢迎度排序',
                },
                {
                    id: 2,
                    text: '位置距离',
                },
                {
                    id: 3,
                    text: '价格/星级',
                },
                {
                    id: 4,
                    text: '筛选',
                },                
            ],
            hotelCardList:[
                {
                    id: 1,
                    text: '双床房',
                },
                {
                    id: 2,
                    text: '国家会展中心（上海）',
                },
                {
                    id: 3,
                    text: '积分当钱花',
                },
                {
                    id: 4,
                    text: '品牌',
                },
                {
                    id: 5,
                    text: '近地铁',
                },
                {
                    id: 6,
                    text: '4.8分以上',
                },
            ],
            hotelItemList: [
                {
                    id: 1,
                    img: ht,
                    name: '汉庭酒店（上海虹桥机场北翟路新店）',
                    vipfList: [1, 2],
                    score: 4.7,
                    eval: '很好',
                    evalnum: '2252点评 · 1.6万收藏',
                    local: '近上海虹桥站 · 中骏广场',
                    comments: '隔音效果挺高，服务很不错',
                    isCanDelay: false,
                    hotelTagList: [
                        {
                            id: 1,
                            tagText: '立即确认',
                        },
                        {
                            id: 2,
                            tagText: '穿梭机场班车',
                        },
                        {
                            id: 3,
                            tagText: '免费停车',
                        },
                    ],
                    rank: '上海虹桥站经济型酒店热卖No.4',
                    oPrice: '￥209',
                    price: '168',
                    priceTag: '优惠41',
                },
                {
                    id: 2,
                    img: wyn,
                    name: '维也纳国际酒店（上海浦东机场店）',
                    vipfList: [1, 2, 3, 4],
                    score: 4.7,
                    eval: '很好',
                    evalnum: '1.3万点评 · 7.2万收藏',
                    local: '近上海弗洛伦塞小镇 · 江镇新都汇生活',
                    comments: '整体环境安静，周边配套设施完善',
                    isCanDelay: false,
                    hotelTagList: [
                        {
                            id: 1,
                            tagText: '立即确认',
                        },
                        {
                            id: 2,
                            tagText: '免费接送机',
                        },
                        {
                            id: 3,
                            tagText: '洗衣房',
                        },
                        {
                            id: 4,
                            tagText: '健身室',
                        },
                    ],
                    rank: '上海高档酒店榜No.17',
                    oPrice: '',
                    price: '321',
                    priceTag: '特惠！',
                },
                {
                    id: 3,
                    img: mxgjp,
                    name: '麦新格精品酒店（上海浦东国际机场店）',
                    vipfList: [1, 2],
                    score: 4.5,
                    eval: '不错',
                    evalnum: '4179点评 · 3.2万收藏',
                    local: '4179点评 · 3.2万收藏',
                    comments: '接机服务真的很贴心，有叫醒服务',
                    isCanDelay: true,
                    hotelTagList: [
                        {
                            id: 1,
                            tagText: '立即确认',
                        },
                        {
                            id: 2,
                            tagText: '免费机场班车',
                        },
                    ],
                    rank: '上海经济型酒店热卖No.1',
                    oPrice: '￥268',
                    price: '186',
                    priceTag: '优惠82',
                },
                {
                    id: 4,
                    img: rjjx,
                    name: '如家精选酒店（上海浦东机场绿地生活广场店）',
                    vipfList: [1, 2, 3],
                    score: 4.7,
                    eval: '很好',
                    evalnum: '3990点评 · 2.5万收藏',
                    local: '近上绿地东海岸时代广场 · 施湾绿地广场',
                    comments: '接送机服务很贴心，周围很安静',
                    isCanDelay: true,
                    hotelTagList: [
                        {
                            id: 1,
                            tagText: '迪士尼接送',
                        },
                        {
                            id: 2,
                            tagText: '免费洗衣服务',
                        },
                    ],
                    rank: '连续24位住客好评',
                    oPrice: '￥299',
                    price: '232',
                    priceTag: '优惠67',
                },
            ]
        }
    }
};
</script>

<style scoped>
.hotel-haeder{
    position: fixed;
    top: 44px;
    height: 56px;
    width: 100%;
    padding-left: 10px;
}
.van-nav-bar{
    height: 56px;
    background: none!important;
}
::v-deep .van-nav-bar__content{
    height: 56px;
}
::v-deep  .van-nav-bar__left{
    height: 56px;
    padding: 0;
}
::v-deep  .van-nav-bar__title{
    height: 56px;
    width: 84%;
    max-width: 100%;
    margin: 0;
    padding-left: 40px;
}
.hotel-searchbox{
    display: flex;
    height: 56px;
    width: 100%;
    border-radius: 999px;
    background-color: #fff;
    align-items: center;
    justify-content: flex-start;
}
.hotel-searchbox p{
    margin-left: 12px;
    font-size: 13px;
    font-weight: bold;
    color: #000;
}
.hotel-searchbox-date{
    margin-left: 9px;
    margin-right: 4px;
    display: flex;
    flex-direction: column;
    gap: 0;
}
.hotel-searchbox-date span{
    line-height: 15px;
    font-size: 13px;
    color: #000;
    font-weight: 500;
}
.hotel-searchbox-line{
    width: 3px;
    height: 56px;
    background-color: #F4EBDF;
}
.hotel-searchbox-wrap{
    display: flex;
}
.hotel-searchbox-wrap img{
    margin-left: 12px;
    margin-right: 8px;
    object-fit: none;
}
.hotel-searchbox-form{
    flex: 1;
    width: 100px;
    height: 20px;
}
.hotel-header-icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -1px;
}
.hotel-header-icon img{
    object-fit: none;
}
.hotel-header-icon p{
    width: 20px;
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    color: #000;
}

.hotel-nav{
    position: fixed;
    top: 110px;
    width: 100%;
    padding: 0 14px 0 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.hotel-nav-item{
    display: flex;
    flex-direction: row;
    gap: 4px;
}
.hotel-nav-item p{
    font-size: 13px;
    font-weight: bold;
    color: #000;
    line-height: 18px;
}
.hotel-nav-item img{
    object-fit: none;
}

.hotel-card{
    padding-left: 14px;
    position: fixed;
    top: 140px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 15px;
}
.hotel-card-item{
    display: inline-flex;
    gap: 4px;
    height: 28px;
    background-color: rgba(229, 229, 229, 0.6);
    padding: 7px 8px;
    border-radius: 5px;
    flex-shrink: 0;
}
.hotel-card-item p{
    font-size: 12px;
    line-height: 14px;
    color: #000;
}
.hotel-card-item img{
    object-fit: none;
}

.hotel-body{
    position: absolute;
    top: 170px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 14px;
    overflow-y: auto;
    height: 80%;
}
.hotel-body::-webkit-scrollbar {
  display: none;
}

.hotel-ad{
    flex-shrink: 0;
    margin-top: 16px;
    padding-left: 8px;
    display: flex;
    align-items: center;
    gap: 146px;
    width: 362px;
    height: 78px;
    background-image: url('../../../assets/image/hotel/hotel-szhl-bg.png');
}
.hotel-ad-title{
    padding-top: 6px;
    display: flex;
    align-items: center;
    gap: 3px;
}
.hotel-ad-title img{
    object-fit: none;
}
.hotel-ad-detail{
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 113px;
    height: 19px;
    background-image: url('../../../assets/image/hotel/hotel-disc-bg.png');
}
.hotel-ad-detail span:first-child{
    padding-left: 6px;
    margin-right: 18px;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
}
.hotel-ad-detail span:last-child{
    font-size: 10px;
    font-weight: 500;
    color: #A18150;
}
.hotel-ad-right{
    width: 63px;
    height: 29px;
    background-image: url('../../../assets/image/hotel/hotel-ck.png');
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
}

.hotel-detail{
    padding-right: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.hotel-detail-item{
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-bottom: 12px;
    border-bottom: 0.2px solid #808080;
}
.hotel-detail-item img{
    object-fit: none;
}
.hotel-detail-content{
    display: flex;
    flex-direction: column;
    gap: 1px;
}
.hotel-detail-name {
    font-size: 16px;
    font-weight: bold;
    color: #000;
}
.hotel-detail-eval{
    display: flex;
    flex-direction: row;
    gap: 4px;
    font-size: 13px;
}
.hotel-detail-eval div{
    width: 25px;
    height: 17px;
    padding-top: 2px;
    background-image: url('../../../assets/image/hotel/hotel-score-bg.png');
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.hotel-detail-eval span{
    font-weight: 500;
    color: #D43030;
}
.hotel-detail-eval p{
    color: #383838;
}
.hotel-detail-local{
    font-size: 13px;
    color: #808080;
}
.hotel-detail-comment{
    font-size: 13px;
    color: #D43030;
}

.hotel-detail-tag{
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    gap: 5px;
}
.hotel-detail-tag-item1{
    height: 17px;
    padding: 0 6px 0 6px;
    border: 0.2px solid #8F6321;
    font-size: 11px;
    color: #8F6321;
    border-radius: 2px;
}
.hotel-detail-tag-item{
    height: 17px;
    padding: 0 6px 0 6px;
    border: 0.2px solid #D43030;
    font-size: 11px;
    color: #D43030;
    border-radius: 2px;
}
.hotel-other{
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.hotel-rank{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    gap: 4px;
    padding: 0 8px 0 8px;
    background-color: #F7F0E8;
    font-size: 9px;
    color: #8F6321;
}
.hotel-price-layout{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.hotel-oprice{
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: baseline;
    font-size: 11px;
    color: #000;
    font-weight: 450;
}
.hotel-oprice span{
    text-decoration: line-through;
}
.hotel-price{
    background: linear-gradient(to right, rgba(167,45,34,1) ,  rgba(167,45,34,0.63) );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 450;
}
.hotel-price span{
    font-size: 24px;
    font-weight: bold;
}
.hotel-sale{
    margin-top: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px 0 8px;
    width: 40px;
    height: 14px;
    background-repeat: no-repeat;
    background-image: url('../../../assets/image/hotel/hotel-sale-bg.png');
    font-size: 7px;
    color: #A72D22;
}
.hotel-detail-more{
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #000;
}
</style>