<template>
  <div class="mytravel-app-container">

    <div class="mytravel-header">
      <router-link :to="'/jour'" class="mytravel-back">
        <img src="../../../assets/icon/mytravel/mytravel-fanhuijiantou.png" alt="图标" class="mytravel-back">
      </router-link>
      <h1 class="mytravel-title">我的行程</h1>
      <img src="../../../assets/icon/mytravel/mytravel-fenxiang.png" alt="图标" class="mytravel-share">
    </div>

    <div class="mytravel-card">
      <img src="../../../assets/image/mytravel/mytravel-beijingwenhuazhilv.png" alt="北京之旅" class="mytravel-img">
      <div class="mytravel-info">
        <h2 class="mytravel-title-beijing">北京文化之旅</h2>
        <p class="mytravel-date">2024.02.15 - 02.18</p>
        <div class="mytravel-buttons">
          <div class="mytravel-preview-btn">预览行程</div>
          <div class="mytravel-edit-btn">编辑行程</div>
        </div>
      </div>
    </div>


    <div class="mytravel-progress-info">
      <img src="../../../assets/icon/mytravel/mytravel-dingwei.png" alt="图标" class="mytravel-定位">
      <span>当前：故宫博物院</span>
      <img src="../../../assets/icon/mytravel/mytravel-time.png" alt="图标" class="mytravel-time">
      <span>预计30分钟</span>
    </div>

    <div class="mytravel-progress-bar-wrapper">
      <div class="mytravel-progress-bar-bg">
        <div class="mytravel-progress-bar-fill"></div>
      </div>
      <div class="mytravel-next-stop">下一站：什刹海 (2.5km)</div>
    </div>





    <div class="mytravel-filter-scroll">
    <div class="mytravel-filter-buttons">
    <button
      v-for="tag in tags"
      :key="tag.label"
      :class="['mytravel-filter-btn', tag.active ? 'active' : '']">
      <img :src="tag.img" alt="" class="mytravel-btn-icon" />
      <span>{{ tag.label }}</span>
    </button>
  </div>
</div>








    <!-- 推荐路线 -->
    <div class="mytravel-section">
      <h2 class="mytravel-section-title">推荐路线</h2>
      <div class="mytravel-route-scroll">
        <div v-for="(route, index) in routes" :key="index" class="mytravel-route-card">
          <img :src="route.image" class="mytravel-route-img" />
          <div class="mytravel-route-content">
            <h3 class="mytravel-route-title">{{ route.title }}</h3>
            <p class="mytravel-route-sub">{{ route.duration }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ route.spots }}个景点</p>
            <div class="mytravel-route-footer">
              <img src="../../../assets/icon/mytravel/mytravel-star.png" alt="图标" class="mytravel-star">
              <span>{{ route.rating }}</span>
              <button class="mytravel-add-btn">加入行程</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 精选攻略 -->
    <div class="mytravel-section">
      <h2 class="mytravel-section-title">精选攻略</h2>
      <div v-for="(tip, index) in tips" :key="index" class="tip-card">
        <img :src="tip.image" class="tip-img" />
        <div class="tip-content">
          <h3 class="tip-title">{{ tip.title }}</h3>
          <p class="tip-desc">{{ tip.desc }}</p>
          <p class="tip-mytravel-meta">
            <span class="mytravel-meta-item">{{ tip.author }}</span>
            <span class="mytravel-meta-item-gap">{{ tip.views }} 阅读</span>
            <span>{{ tip.likes }} 点赞</span>
          </p>

        </div>
      </div>
    </div>


    <div class="mytravel-bottom">
      <img src="../../../assets/icon/mytravel/mytravel-startwrite.png" alt="图标" class="mytravel-startwriteimg">
      <div class="mytravel-startwrite">开始规划行程</div>
    </div>

    <div class="mytravel-bottom-last">
    <img src="../../../assets/image/mytravel/mytravel-bottom-last.png" alt="图标" class="mytravel-bottom-last-img">
    </div>
  </div>


</template>

<script setup>
  import RMMDD from '../../../assets/icon/mytravel/mytravel-remenmudidi.png'
  import ZTLY from '../../../assets/icon/mytravel/mytravel-zhutilvxing.png'
  import JJJX from '../../../assets/icon/mytravel/mytravel-jijiejinxuan.png'
  import TSMS from '../../../assets/icon/mytravel/mytravel-tesemeishi.png'
  import GGMWY from '../../../assets/image/mytravel/mytravel-gugongbowuyuanshenduyoulanzhinan.png'
  import BJHT from '../../../assets/image/mytravel/mytravel-beijinghutongmeishiditu.png'
  import GGSDY from '../../../assets/image/mytravel/mytravel-gugongshenduyou.png'
  import HTWHTY from '../../../assets/image/mytravel/mytravel-hutongwenhuatiyan.png'
  import BJSDBWG from '../../../assets/image/mytravel/mytravel-beijingshoudubowuguan.png'
  const tags = [
    {
      img:RMMDD,
      label: '热门目的地',
      active: true
    },
    {
      img:ZTLY,
      label: '主题旅行',
      active: false
    },
    {
      img:JJJX,
      label: '季节精选',
      active: false

    },
    {
      img:TSMS,
      label: '特色美食',
      active: false

    },
  ];

const routes = [
  {
    title: '故宫深度游',
    duration: '2天1夜',
    spots: 8,
    rating: 4.8,
    image: GGSDY,
  },
  {
    title: '胡同文化体验',
    duration: '1天',
    spots: 5,
    rating: 4.6,
    image: HTWHTY,
  },
  {
    title: '北京首都博物馆',
    duration: '1天',
    spots: 1,
    rating: 4.8,
    image: BJSDBWG,
  },
];

const tips = [
        {
          title: '故宫博物院深度游览指南',
          desc: '避开人流的游览路线，带你发现故宫的不为人知之处',
          author: '故宫达人',
          views: '2.3k',
          likes: 856,
          image: GGMWY,
        },
        {
          title: '北京胡同美食地图',
          desc: '老北京地道美食推荐，带你寻找传统味道',
          author: '美食探店',
          views: '1.8k',
          likes: 654,
          image: BJHT,
        },
];
</script>

<style scoped>
.mytravel-app-container {
  width: 390px;
  height: 844px;
  background-color: #F6F1EB;
  overflow-y: auto;
  margin: auto;
  font-family: sans-serif;
  color: #1a1a1a;
}


.mytravel-header {
  display: flex;
  justify-content: space-between;
  padding: 32px;
  align-items: center;
}
.mytravel-title {
  font-size: 18px;
  font-weight: bold;
}
.mytravel-back {
  top:32px;
  left:16px;
  height: 40px;
  width: 40px;
}
.mytravel-share{
  top:32px;
  left:290px;
  height: 40px;
  width: 40px;
}




.mytravel-card {
  display: flex;
  background-color: #a1311f;
  color:white;
  border: 1px solid #A38262;
  stroke-width: 1px;
  margin: 0 16px;
  border-radius: 12px;
  padding: 12px;
  align-items: center;
}
.mytravel-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}
.mytravel-info {
  flex: 1;
  margin-left: 12px;
}
.mytravel-title-beijing{
  font-size: 16px;
  font-weight: bold;
}
.mytravel-date {
  font-size: 14px;
  font-weight: lighter;
  margin-top: 4px;
}

.mytravel-buttons {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}
.mytravel-preview-btn {
  color: #ffffff;
  border-radius: 16px;
  padding: 2px 12px;
  font-size: 14px;
  border: 0.5px solid #ffffff;
}
.mytravel-edit-btn {
  background: #C7AC91;
  color: #ffffff;
  border-radius: 16px;
  padding: 2px 12px;
  font-size: 14px;
}




/* 进度条 */
.mytravel-progress-info {
  display: flex;
  padding-top: 8px;
  padding-left: 16px;
  padding-bottom:8px;
  font-size: 14px;
  color: #4B5563;
  gap:8px;
}
.mytravel-定位{
  width: 20px;
  height: 20px;
}
.mytravel-time{
  margin-left: 100px;
  width: 20px;
  height: 20px;
}
.mytravel-progress-bar-wrapper {
  padding: 0 16px;
}
.mytravel-progress-bar-bg {
  width: 100%;
  height: 6px;
  background: #EBD4B9;
  border-radius: 6px;
}
.mytravel-progress-bar-fill {
  width: 50%;
  height: 6px;
  background: #D4AF37;
  border-radius: 6px;
}
.mytravel-next-stop {
  font-size: 14px;
  margin-left: 200px;
  color: #666;
  margin-top: 4px;
}

/* 标签横滑 */
.mytravel-filter-scroll {
  overflow-x: auto;
  scrollbar-width: none;
  white-space: nowrap;
  padding: 16px 16px 4px 4px;
  margin-left: 12px;
}

.mytravel-filter-buttons {
  display: inline-flex;
  gap: 16px;
}

.mytravel-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 999px;
  background: white;
  color: #4B5563;
  white-space: nowrap;
}

.mytravel-filter-btn.active {
  background: #a1311f;
  color: white;
  border: none;
}

.mytravel-btn-icon {
  width: 14px;
  height: 14px;
  object-fit: contain;
}


/* 推荐路线 */
.mytravel-section {
  padding: 16px;
}
.mytravel-section-title {
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 8px;
}
.mytravel-route-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
}
.mytravel-route-card {
  background: white;
  border-radius: 12px;
  width: 200px;
  height: 232px;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  padding-bottom: 4px;
}
.mytravel-route-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}
.mytravel-route-content {
  padding: 8px;
  font-size: 14px;
}
.mytravel-route-title {
  font-weight: bold;
  margin-left: 6px;
}
.mytravel-route-sub {
  font-size: 14px;
  color: #4B5563;
  margin-top: 4px;
  margin-left: 8px;
}
.mytravel-star{
  width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-right: 4px;
}
.mytravel-route-footer {
  display: flex;
  margin-top: 8px;
  font-size: 14px;
  margin-left: 8px;
}
.mytravel-add-btn {
  color: #FFFFFF;
  background-color: #A62B1F;
  border: none;
  padding:2px 16px;
  margin-left: 48px;
  border-radius: 999px;
  font-size: 14px;
  padding-bottom: 4px;
}

/* 精选攻略 */
.tip-card {
  display: flex;
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.tip-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
}
.tip-content {
  margin-left: 12px;
  font-size: 16px;
}
.tip-title {
  font-weight: bold;
}
.tip-desc {
  font-size: 14px;
  color: #666;
  margin-top: 2px;
}
.tip-mytravel-meta {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.mytravel-meta-item {
  display: inline-block;
  margin-right: 56px;
}
.mytravel-meta-item-gap {
  display: inline-block;
  margin-right: 8px;
}

.mytravel-bottom {
  display: flex;
  background: #a1311f;
  padding: 12px;
  width: 358px;
  height: 48px;
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 32px;
  border-radius: 999px;
}
.mytravel-startwriteimg{
  margin-top: 4px;
  margin-left: 110px;
  width: 20px;
  height: 20px;
}
.mytravel-startwrite {
  font-size: 16px;
  font-weight: bold;
  color:#ffffff;
  margin-left: 4px;
}
.mytravel-bottom-last{
  width: 390px;
}
</style>
