<template>
     <div class="view-bg1">
        <img src="../../../assets/image/search/search-bg.png">
    </div>
    <div class="search-haeder">
        <van-nav-bar border="false" @click-left="onClickLeft">
            <template #left>
               <img src="../../../assets/icon/com/back.png" class="search-back">
            </template>
            <template #title>
                <div class="search-searchbox">
                    <img src="../../../assets/icon/com/search.png">
                    <div>
                        <form class="search-searchbox-form" @submit.prevent="search">
                            <input type="text" v-model="searchText" class="searchbox-input" name="words"
                                autocomplete="off"
                                placeholder="搜索目的地、景点、美食…" @keydown.enter="search">
                        </form>
                    </div>
                    <img src="../../../assets/icon/com/voice.png">
                </div>
            </template>
            <template #right>
                <div class="zjj-header-right">
                    <div class="zjj-header-icon">
                        <img src="../../../assets/icon/zjj/zjj-map.png">
                        <p>地图</p>
                    </div>
                    <div class="zjj-header-icon">
                        <img src="../../../assets/icon/zjj/zjj-more.png">
                        <p>更多</p>
                    </div>
                </div>
            </template>
        </van-nav-bar>
    </div>
    <div class="zjj-body">
        <div class="zjj-local">
            <p>张家界</p>
            <img src="../../../assets/icon/zjj/zjj-arrow-down.png">
            <span>中国</span>
        </div>
        <div class="zjj-nav">
            <div class="zjj-nav-item" v-for="item in zjjNavList" :key="item.id">
                <img :src="item.img" :alt="item.id">
                <p>{{ item.text }}</p>
            </div>
        </div>
        <p class="zjj-title">必看精选</p>
        <div class="zjj-select">
            <div class="zjj-select-item" v-for="item in zjjSelectList" :key="item.id">
                <img :src="item.img" :alt="item.id">
                <div>{{ item.text }}</div>
            </div>
            <div class="zjj-select-itemf">
                <p>查看更多</p>
                <img src="../../../assets/icon/zjj/zjj-down-arrow.png">
            </div>
        </div>
        <div class="zjj-nav2">
            <img src="../../../assets/image/zjj/zjj-ddzn.svg">
            <img src="../../../assets/image/zjj/zjj-lxrd.svg">
            <img src="../../../assets/image/zjj/zjj-ptkbb.svg">
        </div>
        <p class="zjj-title">游玩路线</p>
        <div class="zjj-nav3">
            <div class="zjj-nav3-item">
                <div class="zjj-nav3-title">
                    <span>线路规划</span>
                    <img src="../../../assets/icon/zjj/zjj-right-arrow.png">
                </div>
                <p>一键智能安排行程</p>
            </div>
            <div class="zjj-nav3-item">
                <div class="zjj-nav3-title">
                    <span>连玩目的地</span>
                    <img src="../../../assets/icon/zjj/zjj-right-arrow.png">
                </div>
                <p>凤凰、长沙景区...</p>
            </div>
        </div>
        <p class="zjj-title">更多推荐</p>
        <div class="zjj-more">
            <div class="zjj-more-item1">
                <div class="zjj-more-detail">
                    <div class="zjj-more-detail1-item">
                        <img src="../../../assets/icon/zjj/zjj-food.png">
                        <p>美食</p>
                        <img src="../../../assets/icon/zjj/zjj-arrow-right.png">
                    </div>
                    <div class="zjj-more-detail1-line"></div>
                    <div class="zjj-more-detail1-item">
                        <img src="../../../assets/icon/zjj/zjj-shop.png">
                        <p>购物</p>
                        <img src="../../../assets/icon/zjj/zjj-arrow-right.png">
                    </div>
                    <div class="zjj-more-detail1-line"></div>
                    <div class="zjj-more-detail1-item">
                        <img src="../../../assets/icon/zjj/zjj-night.png">
                        <p>夜游</p>
                        <img src="../../../assets/icon/zjj/zjj-arrow-right.png">
                    </div>
                </div>
            </div>
            <div class="zjj-more-item2">
                <p>张家界必打卡景点榜</p>
            </div>
            <div class="zjj-more-item3">
                <div class="zjj-more-item3-name">
                    <div>张家界国家森林公园  <span>5A</span></div>
                </div>
                <div class="zjj-more-item3-title">
                    <img src="../../../assets/icon/zjj/zjj-camera.png">
                    <p>2025全球100必打卡景点</p>
                </div>
                <div class="zjj-more-item3-tag">
                    <div class="zjj-more-item3-tag-item1">
                        <img src="../../../assets/icon/zjj/zjj-fire.png">
                        <p>9.1</p>
                    </div>
                    <div class="zjj-more-item3-tag-item2">
                        <p>避暑纳凉</p>
                    </div>
                    <div class="zjj-more-item3-tag-item2">
                        <p>遛娃宝藏地</p>
                    </div>
                </div>
                <div class="zjj-more-item3-local">
                    <img src="../../../assets/icon/zjj/zjj-local.png">
                    <p>张家界 · 张家界市武陵...</p>
                </div>
                <div class="zjj-more-item3-price">
                    <div>￥<span>227</span>起   4.5分</div>
                </div>
            </div>
            <div class="zjj-more-item4">
                <img src="../../../assets/image/zjj/zjj-ptwd.svg">
                <div class="zjj-more-item4-detail">
                    <div>最近去张家界穿什么衣服合适？</div>
                    <img src="../../../assets/icon/zjj/zjj-search.png">
                </div>
                <div class="zjj-more-item4-detail">
                    <div>张家界近期有哪些热门活动？</div>
                    <img src="../../../assets/icon/zjj/zjj-search.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//author：陈一鸣
import "../../../assets/styles/com.css";

import hotel from "../../../assets/icon/zjj/zjj-hotel.png";
import jdxx from "../../../assets/icon/zjj/zjj-jdxx.png";
import travel from "../../../assets/icon/zjj/zjj-travel.png";
import ms from "../../../assets/icon/zjj/zjj-ms.png";
import flight from "../../../assets/icon/zjj/zjj-flight.png";
import sale from "../../../assets/icon/zjj/zjj-sale.png";

import tmsgjslgy from "../../../assets/image/zjj/zjj-tmsgjslgy.png";
import zjjgjslgy from "../../../assets/image/zjj/zjj-zjjgjslgy.png";
import zjj72ql from "../../../assets/image/zjj/zjj-zjj72ql.png";
import zjjdxg from "../../../assets/image/zjj/zjj-zjjdxg.png";
import wly from "../../../assets/image/zjj/zjj-wly.png";
export default {
    setup() {
        const onClickLeft = () => history.back();
        return {
        onClickLeft,
        };
    },
    data(){
        return{
            zjjNavList:[
                {
                    id: 1,
                    img: hotel,
                    text: '酒店',
                },
                {
                    id: 2,
                    img: jdxx,
                    text: '景点/玩乐',
                },
                {
                    id: 3,
                    img: travel,
                    text: '跟团游',
                },
                {
                    id: 4,
                    img: ms,
                    text: '民宿',
                },
                {
                    id: 5,
                    img: flight,
                    text: '机票/火车票',
                },
                {
                    id: 6,
                    img: sale,
                    text: '特价/直播',
                },
            ],
            zjjSelectList:[
                {
                    id: 1,
                    img: tmsgjslgy,
                    text: '天门山国家森林公园',
                },
                {
                    id: 2,
                    img: zjjgjslgy,
                    text: '张家界国家森林公园',
                },
                {
                    id: 3,
                    img: zjj72ql,
                    text: '张家界七十二奇楼',
                },
                {
                    id: 4,
                    img: zjjdxg,
                    text: '张家界大峡谷',
                },
                {
                    id: 5,
                    img: wly,
                    text: '武陵源',
                },
            ],
        }
    }
}
</script>

<style scoped>
.van-nav-bar{
    height: 30px;
    background: none!important;
}
::v-deep .van-nav-bar__content{
    height: 30px;
}
::v-deep  .van-nav-bar__left{
    height: 30px;
    padding: 0;
}
::v-deep  .van-nav-bar__title{
    height: 30px;
    width: 74%;
    max-width: 100%;
    margin: 0;
    padding-left: 40px;
}

.zjj-header-right{
    display: flex;
    flex-direction: row;
    gap: 16px;
}
.zjj-header-right p{
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    font-weight: 500;
    color: #000;
}
.zjj-header-icon{
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.zjj-body{
    position: absolute;
    top: 106px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 14px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 90%;
    width: 100%;
}
.zjj-body::-webkit-scrollbar {
  display: none;
}
.zjj-local{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
}
.zjj-local p{
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    color: #000;
}
.zjj-local img{
    margin-left: 6px;
    margin-right: 9px;
    width: 16px;
    height: 16px;
}
.zjj-local span{
    font-size: 16px;
    line-height: 19px;
    color: #808080;
}

.zjj-nav{
    position: absolute;
    top: 40px;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    flex-direction: row;
    gap: 10px;
    height: 30px;
    width: 100%;
    align-items: center;
}
.zjj-nav::-webkit-scrollbar {
  display: none;
}
.zjj-nav-item{
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 4px;
    background-color: rgba(214, 214, 214, 0.36);
    border-radius: 5px;
    height: 30px;
    flex-shrink: 0;
}
.zjj-nav-item:last-child{
    margin-right: 20px;
}
.zjj-nav-item p{
    font-size: 14px;
    color: #000;
}

.zjj-title{
    font-size: 18px;
    color: #000;
    font-weight: bold;
    line-height: 22px;
}

.zjj-select{
    position: absolute;
    top:128px;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 18px;
    height: 144px;
    width: 100%;
    align-items: center;
}
.zjj-select::-webkit-scrollbar {
  display: none;
}
.zjj-select-item{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    background-color: #F2F2F2;
    border-radius: 10px;
    width: 147px;
    height: 144px;
    flex-shrink: 0;
}
.zjj-select-item div{
    width: 137px;
    text-align: left;
    padding: 4px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
}
.zjj-select-itemf{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
    background-color: #F2F2F2;
    border-radius: 10px;
    height: 144px;
    margin-right: 20px;
}
.zjj-select-itemf p{
    padding: 4px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
}

.zjj-nav2{
    margin-top: 160px;
    margin-bottom: 4px;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    gap: 26px;
}

.zjj-nav3{
    margin-top: -10px;
    display: flex;
    gap: 20px;
}
.zjj-nav3-item{
    width: 170px;
    height: 69px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    flex-direction: column;
    gap: 4px;
}
.zjj-nav3-item:first-child{
    background-image: url('../../../assets/image/zjj/zjj-xlgh.png');
}
.zjj-nav3-item:last-child{
    background-image: url('../../../assets/image/zjj/zjj-lwmdd.png');
}
.zjj-nav3-item p{
    font-size: 14px;
    color: #808080;
    line-height: 17px;
}
.zjj-nav3-title{
    display: flex;
    flex-direction: row;
    gap: 2px;
}
.zjj-nav3-title span{
    font-size: 16px;
    font-weight: bold;
    color: #000;
    line-height: 19px;
}

.zjj-more{
    margin-top: -10px;
    display: flex;
    flex-direction: row;
    gap: 14px 18px;
    flex-wrap: wrap;
}
.zjj-more-item1{
    width: 170px;
    height: 161px;
    background-image: url('../../../assets/image/zjj/zjj-ddjx.svg');
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-shrink: 0;
}
.zjj-more-detail{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    width: 147px;
    height: 110px;
    border-radius: 10px;
    background-color: #fff;
}
.zjj-more-detail1-item{
    padding-left: 7px;
    display: flex;
    flex-direction: row;
}
.zjj-more-detail1-item img{
    object-fit: none;
}
.zjj-more-detail1-item p{
    margin-left: 4px;
    margin-right: 56px;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #000;
}
.zjj-more-detail1-line{
    width: 130px;
    height: 0.5px;
    background-color: #808080;
}

.zjj-more-item2{
    width: 170px;
    height: 217px;
    padding-left: 8px;
    padding-top: 160px;
    background-image: url('../../../assets/image/zjj/zjj-zjjbdkjdb.svg');
    flex-shrink: 0;
}
.zjj-more-item2 p{
    color: #000;
    font-weight: 450;
    font-size: 12px;
    line-height: 15px;
}

.zjj-more-item3{
    margin-left: -4px;
    margin-top: -56px;
    width: 178px;
    height: 225px;
    padding-left: 8px;
    padding-top: 128px;
    background-image: url('../../../assets/image/zjj/zjj-zjjgjslgy 5A.png');
    flex-shrink: 0;
}
.zjj-more-item3-name{
    display: flex;
    flex-direction: row;
    gap: 6px;
    font-weight: 500;
    line-height: 20px;
    font-size: 13px;
    color: #000;
}
.zjj-more-item3-name span{
    font-size: 9px;
    color: #808080;
}

.zjj-more-item3-title{
    margin-top: -2px;
    height: 13px;
    background-color: rgba(212, 48, 48, 0.18);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
    width: 118px;
    gap: 2px;
}
.zjj-more-item3-title img{
    object-fit: none;
}
.zjj-more-item3-title p{
    font-size: 9px;
    font-weight: 500;
    color: #A8463D;
}

.zjj-more-item3-tag{
    margin-top: 5px;
    height: 10px;
    display: flex;
    flex-direction: row;
    gap: 3px;
}
.zjj-more-item3-tag-item1{
    border-radius: 1px;
    background-image: url('../../../assets/image/zjj/zjj-tagbg.png');
    padding: 0 3px 0 3px;
    display: flex;
    flex-direction: row;
    gap: 0;
    align-items: center;
    justify-content: center;
}
.zjj-more-item3-tag-item1 img{
    object-fit: none;
}
.zjj-more-item3-tag-item1 p{
    font-size: 8px;
    font-weight: 500;
    color: #fff;
}
.zjj-more-item3-tag-item2{
    border-radius: 1px;
    border: 0.2px solid #A8463D;
    display: flex;
    padding: 0 3px 0 3px;
    align-items: center;
    justify-content: center;
}
.zjj-more-item3-tag-item2 p{
    font-size: 8px;
    font-weight: 500;
    color: #A32C21;
}
.zjj-more-item3-local{
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
}
.zjj-more-item3-local img{
    object-fit: none;
}
.zjj-more-item3-local p{
    line-height: 15px;
    font-size: 8px;
    font-weight: 500;
    color: #a6a6a6;
}
.zjj-more-item3-price{
    margin-top: -6px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    font-size: 8px;
    font-weight: 500;
    color: #DB2414;
}
.zjj-more-item3-price span{
    font-size: 18px;
}
.zjj-more-item4{
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding-top: 8px;
    width: 170px;
    height: 161px;
    border-radius: 10px;
    background-image: url('../../../assets/image/zjj/zjj-ptwd.png');
}
.zjj-more-item4 img:first-child{
    width: 58px;
    height: 11px;
    margin: 5px 0 5px 14px;
}
.zjj-more-item4-detail{
    margin-left: 10px;
    width: 154px;
    height: 49px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.88);
    display: flex;
    flex-direction: row;
    gap: 3px;
    justify-content: center;
    align-items: center;
}
.zjj-more-item4-detail div{
    width: 114px;
    height: 40px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #000;
}
.zjj-more-item4-detail img{
    object-fit: none;
}
</style>