<template>
    <div class="view-layout">
        <div class="view-bg">
            <img src="../assets/image/home/home-bg.png">
        </div>
        <div class="home-title">
            游中国
        </div>
        <div id="app" class="home-searchbox">
            <img src="../assets/icon/com/search.png" class="iconfont icon-search">
            <router-link :to="'/search'">
                <form class="home-searchbox-form" @submit.prevent="search">
                <input type="text" v-model="searchText" class="searchbox-input" name="words"
                        autocomplete="off"
                        placeholder="搜索目的地、景点、美食…" @keydown.enter="search">
                </form>
            </router-link>
            <router-link :to="'/error'" class="searchbox-voice">
                <img src="../assets/icon/com/voice.png" class="iconfont icon-search">
            </router-link>
        </div>
        <div class="home-card-layout">
            <div class="home-card" v-for="item in homeCardList" :key="item.id">
                <img :src="item.img" alt="图标" class="home-card-img">
                <div class="home-card-text">{{item.text}}</div>
            </div>
        </div>
        <div class="home-ad">
            <div class="home-ad-bg">
                <div class="home-ad-title">故宫博物院</div>
                <div class="home-ad-text">感受皇家园林的壮丽</div>
            </div>
        </div>
        <div class="home-nav-layout">
            <router-link :to="'/error'" class="home-nav">
                <img src="../assets/icon/home/home-jdmp.png" alt="图标" class="home-nav-img">
                <div class="home-nav-text">景点门票</div>
            </router-link>
            <router-link :to="'/error'" class="home-nav">
                <img src="../assets/icon/home/home-msdt.png" alt="图标" class="home-nav-img">
                <div class="home-nav-text">美食地图</div>
            </router-link>
            <router-link :to="'/hotel'" class="home-nav">
                <img src="../assets/icon/home/home-msjd.png" alt="图标" class="home-nav-img">
                <div class="home-nav-text">民宿酒店</div>
            </router-link>
            <router-link :to="'/error'" class="home-nav">
                <img src="../assets/icon/home/home-jtcx.png" alt="图标" class="home-nav-img">
                <div class="home-nav-text">交通出行</div>
            </router-link>
        </div>
        <div class="home-cube">
            <router-link :to="'/error'" class="home-cube-tsty">
                <img src="../assets/image/home/home-tsty.svg">
            </router-link>
            <div class="home-cube-right">
                <router-link :to="'/error'" class="home-cube-wchw">
                    <img src="../assets/image/home/home-wchw.svg">
                </router-link>
                <div class="home-cube-bottom">
                    <router-link :to="'/gtly'" class="home-cube-gtly">
                        <img src="../assets/image/home/home-gtly.svg">
                    </router-link>
                    <router-link :to="'/error'" class="home-cube-znbk">
                        <img src="../assets/image/home/home-znbk.svg">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="home-recommand">
            <div class="home-recommand-title">为你推荐</div>
            <div class="home-recommand-content">
                <router-link to="/error" class="home-recommand-item">
                    <p>西湖断桥残雪</p>
                    <span>杭州西湖十景之一</span>
                    <div class="home-recommand-like">
                        <img src="../assets/icon/home/home-like.png">
                        <p>4.9</p>
                        <p>(2389)</p>
                    </div>
                </router-link>
                <router-link to="/zjjblq" class="home-recommand-item">
                    <p>张家界玻璃桥</p>
                    <span>世界最长玻璃桥</span>
                    <div class="home-recommand-like">
                        <img src="../assets/icon/home/home-like.png">
                        <p>4.8</p>
                        <p>(1876)</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    
</template>

<script>
//author: 陈一鸣
import "../assets/styles/com.css";
import rmmdd from "../assets/icon/home/home-rmmdd.png";
import zty from "../assets/icon/home/home-zty.png";
import thhd from "../assets/icon/home/home-thhd.png";
export default{
    data(){
        return{
            homeCardList:[
                {
                    id: 1,
                    img: rmmdd,
                    text: '热门目的地',
                },
                {
                    id: 2,
                    img: zty,
                    text: '主题游',
                },
                {
                    id: 3,
                    img: thhd,
                    text: '特惠活动',
                },
            ],
        }
    }
}
</script>

<style>

.home-title{
    position: absolute;
    height: 28px;
    width: 100%;
    top: 42px;
    height: 28px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}

.home-searchbox{
    position: absolute;
    left: 20px;
    right: 20px;
    display: flex;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 999px;
    top: 84px;
    background-color: #F3F4F6;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.05);
}

.home-searchbox-form{
    flex: 1;
    margin-left: 8px;
    width: 260px;
    height: 40px;
}

.home-card-layout{
    display: flex;
    align-items: center;
    position: absolute;
    top: 140px;
    height: 52px;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: flex-start;
    gap: 10px;
}
.home-card{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9FAFB;
    height: 36px;
    border-radius: 999px;
    padding-left: 16px;
    padding-right: 16px;
}
.home-card-img{
    width: 16px;
    height: 16px;
}
.home-card-text{
    padding-left: 8px;
    font-size: 14px;
}

.home-ad{
    position: absolute;
    top: 208px;
    width: 100%;
    padding: 0 16px 0 16px;
    height: 200px;
}
.home-ad-bg{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url(../assets/image/home/home-1.png);
    border-radius: 12px;
}
.home-ad-title{
    position: absolute;
    margin-top: 132px;
    margin-left: 16px;
    font-size: 20px;
    line-height: 28px;
    color: #fff;
}
.home-ad-text{
    position: absolute;
    margin-top: 164px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    color: rgba(255,255,255,0.8);
}

.home-nav-layout{
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 432px;
    width: 100%;
    padding: 0 16px 0 16px;
}
.home-nav{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.home-nav-img{
    width: 48px;
    height: 48px;
}
.home-nav-text{
    margin-top: 8px;
    color: #4B5563;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    text-align: center;
}

.home-cube{
    display: flex;
    position: absolute;
    top: 526px;
    width: 100%;
    padding: 0 16px 0 16px;
    height: 176px;
    gap: 5px;
}
.home-cube-right{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.home-cube-bottom{
    display: flex;
    gap: 5px;
}

.home-cube-tsty{
    padding-left: 8px;
    padding-top: 20px;
    width: 183px;
    height: 176px;
    background-image: url('../assets/image/home/home-tsty.png');
}
.home-cube-wchw{
    padding-left: 10px;
    padding-top: 16px;
    width: 170px;
    height: 86px;
    background-image: url('../assets/image/home/home-wchw.png');
}
.home-cube-gtly{
    padding-left: 5px;
    padding-top: 10px;
    width: 82px;
    height: 85px;
    background-image: url('../assets/image/home/home-gtly.png');
}
.home-cube-znbk{
    padding-left: 3px;
    padding-top: 10px;
    width: 83px;
    height: 85px;
    background-image: url('../assets/image/home/home-znbk.png');
}

.home-recommand{
    position: absolute;
    top: 720px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 16px 80px 16px;
}
.home-recommand-title{
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    align-items: center;
}
.home-recommand-content{
    display: flex;
    gap: 12px;
}
.home-recommand-item{
    padding-left: 12px;
    padding-top: 140px;
    width: 175px;
    height: 215px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.home-recommand-item:first-child{
    background-image: url('../assets/image/home/home-xh.png');
}
.home-recommand-item:last-child{
    background-image: url('../assets/image/home/home-zjjblq.png');
}
.home-recommand-item p{
    font-size: 16px;
    font-weight: 500;
    color: #000;
    line-height: 24px;
}
.home-recommand-item span{
    font-size: 12px;
    line-height: 16px;
    color: #6B7280;
}
.home-recommand-like{
    display: flex;
    flex-direction: row;
    gap: 4px;
    height: 20px;
}
.home-recommand-like img{
    object-fit: none;
}
.home-recommand-like p{
    font-size: 14px;
    line-height: 20px;
}
.home-recommand-like p:first-child{
    color: #333333;
}
.home-recommand-like p:last-child{
    color: #666666;
}
</style>