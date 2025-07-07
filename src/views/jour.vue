<template>
  <div class="jour-layout">

    <div class="jour-bg">
        <img src="../assets/image/home/home-bg.png">
    </div>

    <div class="jour-headpic">
        <img src="../assets/image/jour/jour-headpic.png" style="border-radius: 50%;">
    </div>

    <div id="app" class="jour-searchbox">
      <img src="../assets/icon/com/search.png" class="iconfont icon-search">
      <router-link :to="'/search'">
          <form class="jour-searchbox-form" @submit.prevent="search">
          <input type="text" v-model="searchText" class="jour-searchbox-input" name="words"
                  autocomplete="off"
                  placeholder="搜索目的地、景点、美食…" @keydown.enter="search">
          </form>
      </router-link>
      <router-link :to="'/error'" class="jour-searchbox-voice">
          <img src="../assets/icon/com/voice.png" class="iconfont icon-search">
      </router-link>
    </div>


    <div class="jour-nav-layout">
      <router-link :to="'/error'" class="jour-nav">
          <img src="../assets/image/jour/jour-dingjiudian.png" alt="图标" class="jour-nav-img">
          <div class="jour-nav-text">订酒店</div>
      </router-link>
      <router-link :to="'/error'" class="jour-nav">
          <img src="../assets/image/jour/jour-jipiao.png" alt="图标" class="jour-nav-img">
          <div class="jour-nav-text">机票</div>
      </router-link>
      <router-link :to="'/error'" class="jour-nav">
          <img src="../assets/image/jour/jour-huochepiao.png" alt="图标" class="jour-nav-img">
          <div class="jour-nav-text">火车票</div>
      </router-link>
      <router-link :to="'/error'" class="jour-nav">
          <img src="../assets/image/jour/jour-menpiao.png" alt="图标" class="jour-nav-img">
          <div class="jour-nav-text">门票</div>
      </router-link>
    </div>


    <div class="jour-card-layout">
        <div class="jour-card" v-for="item in jourCardList" :key="item.id">
            <div class="jour-card-text">{{item.text}}</div>
        </div>
    </div>

    <div class="jour-travelexp">
    <div class="jour-exp" v-for="item in jourtwoList" :key="item.id">
      <router-link v-if="item.id === 1" :to="{ name: 'MyTravel' }" class="jour-exp-link">
        <img :src="item.image" alt="图片" class="jour-exp-img" />
        <div class="jour-exp-bottom">
          <div class="jour-exp-text">{{ item.text }}</div>
          <div class="jour-exp-time">
            <img src="../assets/image/jour/jour-clock.png" class="jour-clock-icon" />
            {{ item.dataRange }}
          </div>
          <div class="jour-exp-progress">
            <div class="jour-exp-progress-bar"></div>
          </div>
        </div>
      </router-link>
      <div v-else class="jour-exp-content">
        <img :src="item.image" alt="图片" class="jour-exp-img" />
        <div class="jour-exp-bottom">
          <div class="jour-exp-text">{{ item.text }}</div>
          <div class="jour-exp-time">
            <img src="../assets/image/jour/jour-clock.png" class="jour-clock-icon" />
            {{ item.dataRange }}
          </div>
          <div class="jour-exp-progress">
            <div class="jour-exp-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="jour-more">
    <span>查看全部  ></span>
  </div>

  <div class="jour-mytravelmap">
    <div class="jour-title">我的旅行地图</div>
    <div class="jour-subtitle">已点亮12个城市</div>
    <img src="../assets/image/jour/jour-wodelvyouditu.png" alt="图片">
  </div>

  <div class="jour-xiaotu-container">
    <div class="jour-xiaotu">
      <img src="../assets/image/jour/jour-lvyou1.png" alt="图片" class="xiaotu-img">
      <img src="../assets/image/jour/jour-lvyou2.png" alt="图片" class="xiaotu-img">
      <img src="../assets/image/jour/jour-lvyou3.png" alt="图片" class="xiaotu-img">
      <img src="../assets/image/jour/jour-lvyou4.png" alt="图片" class="xiaotu-img">
    </div>
  </div>
</div>
</template>

<script>
import jourBeijing from '../assets/image/jour/jour-beijingwenhuazhilv.png'
import jourZJJ from '../assets/image/jour/jour-zhangjiajieboliqiao.png'
import jourHZXH from '../assets/image/jour/jour-hangzhouxihu.png'

export default {
  data(){
        return{
            jourCardList:[
                {
                    id: 1,
                    text: '全部行程',
                },
                {
                    id: 2,
                    text: '待出行',
                },
                {
                    id: 3,
                    text: '已完成',
                },
            ],
            jourtwoList:[
              {
                id:1,
                text:'北京文化之旅',
                image:jourBeijing,
                dataRange:'2024.02.15 - 02.18',
              },
              {
                id:2,
                text:'张家界玻璃桥',
                image: jourZJJ,
                dataRange:'2024.03.01 - 03.05',
              },
              {
                id:3,
                text:'杭州西湖',
                image: jourHZXH,
                dataRange:'2024.04.05 - 04.07',
              },
            ],
        }
    }
}
</script>

<style>

.jour-layout{
    position:absolute;
    top:0px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 105%;
    width: 100%;
}

.jour-bg{
    position: absolute;
    top: 0px;
}

.jour-headpic{
    position: absolute;
    top: 53px;
    left: 24px;
    height: 42px;
    width: 42px;
}

.jour-searchbox{
    position: absolute;
    top: 56px;
    left: 80px;
    right: 16px;
    display: flex;
    height: 36px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 999px;
    background-color: #ffffff;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.05);
}
.jour-searchbox .icon-search{
    display: relative;
    left: 16px;
    height: 16px;
}
.jour-searchbox .icon-scan{
    display: relative;
    left: 263px;
    height: 16px;
}
.jour-searchbox-voice{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.jour-searchbox-form{
    flex: 1;
    margin-left: 8px;
    width: 223px;
    height: 40px;
}
.jour-searchbox-input{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background: none;
    color: #9CA3AF;
    font-size: 14px;
    border: 0px;
}
.jour-searchbox-input::-webkit-input-placeholder{
    color: #9CA3AF;
}
.jour-searchbox-input::-moz-placeholder{
    color: #9CA3AF;
}
.jour-searchbox-input::-moz-placeholder{
    color: #9CA3AF;
}
.jour-searchbox-input::-ms-input-placeholder{
    color: #9CA3AF;
}

.jour-nav-layout{
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 111px;
    width: 100%;
    padding: 0px 16px 0 16px;
}
.jour-nav{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.jour-nav-img{
    width: 48px;
    height: 48px;
}
.jour-nav-text{
    margin-top: 8px;
    color: #4B5563;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    text-align: center;
}



.jour-card-layout{
    display: flex;
    position: absolute;
    top: 200px;
    align-items: center;
    height: 27px;
    width: 100%;
    padding-left: 32px;
    padding-right: 16px;
    justify-content: flex-start;
    gap: 8px;
}
.jour-card{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 27px;
    border-radius: 999px;
    padding-left: 16px;
    padding-right: 16px;
    border: 1px solid #a62b1f;
}

.jour-card:first-child {
    background-color: #a62b1f;
}

.jour-card-text{
    font-size: 14px;
    color: #a62b1f;
}

.jour-card:first-child .jour-card-text {
    color: #ffffff;
}

.jour-travelexp {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  white-space: nowrap;
  position:absolute;
  top: 240px;
  left: 0px;
  right: 0;
  padding: 2px;
  z-index: 1000;
}

.jour-exp {
  flex-shrink: 0;
  width: 238px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f8f5f2;
  border: 2px solid #a62b1f;
  margin-left: 16px;
}

.jour-exp-content {
  display: block;
  text-decoration: none;
}

.jour-exp-img {
  width: 236px;
  height: 120px;
  object-fit: cover;
  display: block;
}

.jour-exp-bottom {
  padding: 10px;
  background-color: #f8f5f2;
}

.jour-exp-text {
  font-size: 16px;
  font-weight: 500;
  color: #3d3d3d;
  margin-bottom: 6px;
}

.jour-exp-time {
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.jour-clock-icon {
  width: 14px;
  height: 14px;
  margin-right: 4px;
}

.jour-exp-progress {
  background-color: #e0d9d0;
  height: 4px;
  border-radius: 4px;
  overflow: hidden;
}

.jour-exp-progress-bar {
  width: 60%;
  background-color: #a62b1f;
  height: 100%;
  border-radius: 4px;
}

.jour-more{
  position: absolute;
  top:460px;
  left:282px;
  font-size: 14px;
  color: #6B7280;
}

.jour-mytravelmap{
    position: absolute;
    top: 496px;
    left: 16px;
    height: 298px;
    width: 358px;
    background:linear-gradient(to bottom,#F1E4D4,#F1EFE9);
    border-radius: 10px;
    display: flex;
}



.jour-title {
  position: absolute;
  margin-top: 16px;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #32464A;
}

.jour-subtitle {
  position: absolute;
  margin-top: 16px;
  margin-left: 233px;
  font-size: 14px;
  color: #88674D;
  margin-bottom: 20px;
}

.jour-mytravelmap img {
  width:326px;
  height: 160px;
  border-radius: 8px;
  margin-top: 56px;
  margin-left: 16px;
}

.jour-xiaotu-container {
  position: absolute;
  top: 728px;
  left: 50%;
  transform: translateX(-50%);
  width: 344px;
  text-align: center;
}

.jour-xiaotu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.jour-xiaotu-img {
  width: 80px;
  height: 50px;
  border-radius: 8px;
  margin:0px;
}

</style>