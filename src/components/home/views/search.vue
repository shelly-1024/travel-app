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
                <div class="search-button">搜索</div>
            </template>
        </van-nav-bar>
        
    </div>
    <div class="search-body">
        <div>
            <p>历史搜索</p>
            <div class="search-card-layout">
                <div class="search-card" v-for="item in historyCardList" :key="item.id">{{ item.text }}</div>
            </div>
        </div>
        <div>
            <p>热门推荐</p>
            <div class="search-card-layout">
                <router-link :to="'/zjj'" class="search-card-first">张家界</router-link>
                <div class="search-card" v-for="item in hotCardList" :key="item.id">{{ item.text }}</div>
                <img src="../../../assets/icon/search/search-arrow-down.png">
            </div>
        </div>
        <div class="search-rank-layout">
            <div class="search-rank" v-for="item in rankList" :key="item.id">
                <img :src="item.url" alt="榜单名">
                <div class="search-rankList">
                    <div class="search-rank-card" v-for="data in item.rankCardList" :key="item.id">
                        <img :src="data.url" :alt="data.id" class="search-rank-card-id">
                        <div>
                            <div class="search-rank-card-text">{{ data.text }}</div>
                            <span>{{ data.num }}分 | {{ data.local }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//author：陈一鸣
import "../../../assets/styles/com.css";

import ranklist1 from "../../../assets/image/search/search-ranklist1.svg";
import ranklist2 from "../../../assets/image/search/search-ranklist2.svg";

import rank1 from "../../../assets/icon/search/search-rank1.svg";
import rank2 from "../../../assets/icon/search/search-rank2.svg";
import rank3 from "../../../assets/icon/search/search-rank3.svg";
import rank4 from "../../../assets/icon/search/search-rank4.svg";
import rank5 from "../../../assets/icon/search/search-rank5.svg";
import rank6 from "../../../assets/icon/search/search-rank6.svg";
import rank7 from "../../../assets/icon/search/search-rank7.svg";
import rank8 from "../../../assets/icon/search/search-rank8.svg";
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
  data(){
        return{
            historyCardList:[
                {
                    id: 1,
                    text: '张家界玻璃桥',
                },
                {
                    id: 2,
                    text: '北京故宫',
                },
                {
                    id: 3,
                    text: '雷峰塔',
                },
            ],
            hotCardList:[
                {
                    id: 1,
                    text: '张家界大峡谷景区',
                },
                {
                    id: 2,
                    text: '旅游',
                },
                {
                    id: 3,
                    text: '上海隐辰·怡蓝湾酒店',
                },
                {
                    id: 4,
                    text: '杭州西湖',
                },
            ],
            rankList:[
                {
                    id: 1,
                    url: ranklist1,
                    rankCardList:[
                        {
                            id: 1,
                            url: rank1,
                            text: '东明山森林公园',
                            num: 3.8,
                            local: '杭州·浙江省杭州市余...'
                        },
                        {
                            id: 2,
                            url: rank2,
                            text: '浙江省科技馆',
                            num: 4.4,
                            local: '杭州·杭州市拱墅区环...'
                        },
                        {
                            id: 3,
                            url: rank3,
                            text: '山沟沟景区',
                            num: 4.1,
                            local: '杭州·浙江省杭州市余...'
                        },
                        {
                            id: 4,
                            url: rank4,
                            text: '钱王饲',
                            num: 4.6,
                            local: '杭州·浙江省杭州市上...'
                        },
                        {
                            id: 5,
                            url: rank5,
                            text: '少年儿童公司',
                            num: 4.3,
                            local: '杭州·虎跑路61号'
                        },
                        {
                            id: 6,
                            url: rank6,
                            text: '杭州西山国家森林公...',
                            num: 4.7,
                            local: '杭州·浙江省杭州市西...'
                        },
                        {
                            id: 7,
                            url: rank7,
                            text: '大树王景区',
                            num: 4.2,
                            local: '杭州·杭州市临安区天...'
                        },
                        {
                            id: 8,
                            url: rank8,
                            text: '浙江省自然博物馆（杭州馆）',
                            num: 4.5,
                            local: '杭州·西湖文化广场6号'
                        },
                    ],
                },
                {
                    id: 2,
                    url: ranklist2,
                    rankCardList:[
                        {
                            id: 1,
                            url: rank1,
                            text: '杭州Vallie酒店',
                            num: 4.7,
                            local: '西湖区景区/灵隐度假区'
                        },
                        {
                            id: 2,
                            url: rank2,
                            text: '杭州FINDME凡觅民宿...',
                            num: 4.8,
                            local: '双溪竹海/径山/山沟沟'
                        },
                        {
                            id: 3,
                            url: rank3,
                            text: '西子·礼白酒店（杭州...',
                            num: 4.8,
                            local: '西湖湖滨商圈'
                        },
                        {
                            id: 4,
                            url: rank4,
                            text: '杭州西湖银江PLUS酒店',
                            num: 4.7,
                            local: '西湖湖滨商圈'
                        },
                        {
                            id: 5,
                            url: rank5,
                            text: '杭州余来民宿',
                            num: 4.8,
                            local: '太湖源度假区'
                        },
                        {
                            id: 6,
                            url: rank6,
                            text: '紫金港黄龙祈悦酒店',
                            num: 4.6,
                            local: '三墩地区/北部软件园'
                        },
                        {
                            id: 7,
                            url: rank7,
                            text: '东明山·月泉里民宿（...',
                            num: 4.7,
                            local: '良渚文化村周边'
                        },
                        {
                            id: 8,
                            url: rank8,
                            text: '杭州秋水山庄',
                            num: 4.7,
                            local: '西湖风景区/灵隐度假区'
                        },
                    ],
                },
            ],
        }
    }
};
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
.search-button{
    background-image: url('../../../assets/image/search/search-button.png');
    width: 67px;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-body{
    position: absolute;
    top: 90px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 10px;
    overflow-y: auto;
    height: 90%;
}
.search-body::-webkit-scrollbar {
  display: none;
}
.search-body p{
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 700;
}
.search-card-layout{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px 10px;
}
.search-card-layout img{
    width: 16px;
    height: 16px;
    margin-top: 8px;
}
.search-card{
    padding: 0 12px 0 12px;
    font-size: 16px;
    color: #808080;
    background-color: rgba(229, 229, 229, 0.49);
    border-radius: 999px;
}
.search-card-first{
    padding: 0 12px 0 12px;
    border-radius: 999px;
    font-size: 16px;
    color: #383838;
    background-color: rgba(184, 89, 81, 0.15);
}

.search-rank-layout{
    position: absolute;
    top: 222px;
    width: 100%;
    height: 580px;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
}
.search-rank{
    background-image: url('../../../assets/image/search/search-ranklist-bg.png');
    width: 277px;
    height: 567px;
    margin-bottom: 20px;
    padding: 12px;
    flex-shrink: 0;
}
.search-rank:last-child{
    margin-right: 20px;
}
.search-rankList{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.search-rank-card{
    display: flex;
    flex-direction: row;
    gap: 13px;
}
.search-rank-card-id{
    width: 24px;
    height: 24px;
    background-color: #E5E5E5;
    color: #808080;
    border-radius: 2px;
    font-size: 20px;
    font-weight: bold;
}
.search-rank-card-text{
    margin-bottom: 4px;
    font-size: 16px;
    height: 19px;
    width: 220px;
    color: #000;
}
.search-rank-card span{
    font-size: 13px;
    height: 16px;
    width: 212px;
    color: #808080;
}
</style>