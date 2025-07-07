<template>
    <div class="disc-layout">
        <div class="disc-bg">
            <img src="../assets/image/disc/disc-bg.png">
        </div>
        <div id="app" class="disc-searchbox">
            <img src="../assets/icon/disc/disc-sosuo.png" class="iconfont disc-icon-search">
            <router-link :to="'/afterSearch'">
                <form class="disc-searchbox-form" @submit.prevent="search">
                <input type="text" v-model="searchText" class="disc-searchbox-input" name="words"
                    autocomplete="off"
                    placeholder="搜索感兴趣的内容..." @keydown.enter="search">
                </form>
            </router-link>
            <router-link :to="'/afterVoice'" class="disc-searchbox-voice">
                <img src="../assets/icon/disc/disc-yuyin.png" class="iconfont disc-icon-search">
            </router-link>
            <img src="../assets/image/disc/disc-touxiang.png" class="disc-header">
        </div>
        <div id="disc-choose">
            <span class="disc-recommand">推荐<img src="../assets/image/disc/disc-line1.png" class="disc-line1"></span>
            <span class="disc-video">视频</span>
            <span class="disc-picture">图文动态</span>
        </div>
        <div id="dayanta">
            <img src="../assets/image/disc/disc-dayanta.png" class="disc-dayanta-piacture">
            <span class="where-go">最近去哪玩了？快来和大家分享<br>一下最近的旅游趣事吧！！！</span>
            <span class="disc-fabu">发布动态</span>
        </div>
        <div id="disc-mine-guanzhu">
            <img class="disc-guanzhu-image" src="../assets/image/disc/disc-wodeguanzhu.svg">
        </div>
        <span class="disc-title1">热门动态</span>
        <img class="disc-line2" src="../assets/image/disc/disc-line2.png">
        <div id="disc-dongtai1">
            <img class="disc-custom1" src="../assets/image/disc/disc-yonghu1touxiang.png">
            <img class="disc-custom-photo1" src="../assets/image/disc/disc-huangshan.png">
            <img class="disc-dianzan1" src="../assets/image/disc/disc-dianzan1.png">
            <span class="disc-name1">lkeda</span>
            <span class="disc-goCount" >踏足27省</span>
            <span class="disc-content1">在黄山的云海中，仿佛能听见古人的吟诵。<br>
“黄山一夜雪，渭水雁声多”，这句诗恰如其分<br>地描绘了眼前的景象。</span>
            <div class="disc-guanzhu-border">
                <span class="disc-guanzhu1">关注</span>
            </div>
        </div>
        <div id="disc-dongtai2">
            <img class="disc-custom2" src="../assets/image/disc/disc-yonghu2touxiang.png">
            <img class="disc-custom-photo2" src="../assets/image/disc/disc-xihu.png">
            <img class="disc-dianzan2" src="../assets/image/disc/disc-dianzan2.png">
            <span class="disc-name2">刘旭达</span>
            <span class="disc-goCount2" >踏足15省</span>
            <span class="disc-content2">雨后西湖，烟波浩渺，仿佛一幅水墨画。宋代诗人说得好：“欲把西湖比西子，淡妆浓抹总相宜。”</span>
            <div class="disc-guanzhu-border2">
                <span class="disc-guanzhu2">关注</span>
            </div>
        </div>
    </div>
    
</template>

<script>
//author: 陈欣悦
import Tabbar from '../components/tabbar.vue'; // 路径按你项目的实际路径调整

export default {
    components: {
    Tabbar
    }
};

</script>
<style>
.disc-layout {
    background-color: #F8F8F8;
    position:absolute;
    top:0px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.disc-searchbox {
    position: absolute;
    left: 73.96px;
    top: 77.62px;
    width: 301px;
    height: 36px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 9999px;
    padding: 0 10px;
    box-sizing: border-box;
}

.disc-icon-search {
    width: 23px;
    height: 23px;
    margin-right: 10px;
}

.disc-searchbox-form {
    flex: 1;
}

.disc-searchbox-input {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    font-size: 14px;
    color: #9CA3AF;
    outline: none;
}

.disc-searchbox-voice img {
    width: 22px;
    height: 22px;
    margin-left: 40px;
    margin-top:5px;
}

.disc-header{
    width:41px;
    height:41px;
    border-radius:999px;
    position:absolute;
    right:315px;
    top:2px;
}

#disc-choose{
    left:23px;
    top:140px;
    width: 203px;
    height: 15px;
    position:absolute;
    display: flex;
}

.disc-recommand{
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    color: rgba(166, 43, 31, 1);
    flex:1;
}

.disc-video{
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    color: rgba(0, 0, 0, 1);
    flex:1;
}

.disc-picture{
    font-size: 12px; 
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    color: rgba(0, 0, 0, 1);
    flex:1;
}

#dayanta{
    left:18px;
    top:110px;
    width: 400px;
    height: 190px;
    position:absolute;
    display: flex;
}

.where-go{
    width: 197px;
    height: 40px;
    position:absolute;
    left: 24px;
    top:93px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
}

.disc-fabu{
    left: 36px;
    top: 149px;
    width: 52px;
    height: 15px;
    position:absolute;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    color: rgba(133, 101, 69, 1);
    text-align: left;
    vertical-align: top;
}

.disc-guanzhu-image{
    left: 20px;
    top: 305.62px;
    width: 355px;
    height: 150px;
    position:absolute;
    opacity:1;
}

.disc-title1{
    left: 25px;
    top: 473.62px;
    width: 72px;
    height: 15px;
    position:absolute;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 15px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
}

.disc-line2{
    left: 26px;
    top: 498px;
    width: 72.05px;
    height: 5px;
    position:absolute;
}

#disc-dongtai1{
    width: 370px;
    height: 425px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    position:absolute;
    top:520px;
    left:10px;
}

.disc-custom1{
    width: 40px;
    height: 40px;
    position:relative;
    top:18px;
    left:16px;
}

.disc-name1{
    width: 41px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: middle;
    position:absolute;
    top:18px;
    left:68px;
}

.disc-goCount{
    width: 58px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
    color: rgba(107, 114, 128, 1);
    text-align: left;
    vertical-align: middle;
    position:absolute;
    top:42px;
    left:68px;
}

.disc-content1{
    width: 324px;
    height: 72px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: middle;
    vertical-align: middle;
    position:absolute;
    top:75.5px;
    left:16px;
}

.disc-guanzhu-border {
    left: 294px;
    top: 23px;
    width: 60px;
    height: 30px;
    border-radius: 9999px;
    border: 1px solid rgba(166, 43, 31, 1);
    position: absolute;
    display: flex;
    justify-content: center; 
    align-items: center;      
}

.disc-guanzhu-border .disc-guanzhu1 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px; 
    color: rgba(166, 43, 31, 1);
    text-align: center; 
    width: 28px;
    height: 20px;
}

.disc-dianzan1{
    left:0px;
    top:380px;
    width:370px;
    height:45px;
    position:absolute;
}

.disc-custom-photo1{
    left:16px;
    top:158px;
    width: 338px;
    height: 200px;
    position:absolute;
}


#disc-dongtai2{
    width: 370px;
    height: 425px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    position:absolute;
    top:970px;
    left:10px;
}

.disc-custom2{
    width: 40px;
    height: 40px;
    position:relative;
    top:18px;
    left:16px;
}

.disc-name2{
    width: 50px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: middle;
    position:absolute;
    top:18px;
    left:68px;
}

.disc-goCount2{
    width: 58px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
    color: rgba(107, 114, 128, 1);
    text-align: left;
    vertical-align: middle;
    position:absolute;
    top:42px;
    left:68px;
}

.disc-content2{
    width: 324px;
    height: 72px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: middle;
    vertical-align: middle;
    position:absolute;
    top:75.5px;
    left:16px;
}

.disc-guanzhu-border2 {
    left: 294px;
    top: 23px;
    width: 60px;
    height: 30px;
    border-radius: 9999px;
    border: 1px solid rgba(166, 43, 31, 1);
    position: absolute;
    display: flex;
    justify-content: center; 
    align-items: center;      
}

.disc-guanzhu-border2 .disc-guanzhu2 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px; 
    color: rgba(166, 43, 31, 1);
    text-align: center; 
    width: 28px;
    height: 20px;
}

.disc-dianzan2{
    left:0px;
    top:380px;
    width:370px;
    height:45px;
    position:absolute;
}

.disc-custom-photo2{
    left:16px;
    top:158px;
    width: 338px;
    height: 200px;
    position:absolute;
}
</style>