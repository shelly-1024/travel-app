<template>
    <div class="view-layout">
        <div class="view-bg">
            <img src="../assets/image/my/my-bg.png">
        </div>
        <div class="my-user">
            <img src="../assets/image/my/my-avatar.png">
            <div class="my-user-info">
                <div class="my-user-name">行者·李逍遥</div>
                <div class="my-user-intro">读万卷书，行万里路</div>
                <div class="my-user-vip">黄金会员</div>
            </div>
        </div>
        <div class="my-nav">
            <div class="my-nav-item">
                <div class="my-nav-num">12</div>
                <div class="my-nav-text">已打卡城市</div>
            </div>
            <div class="my-nav-item">
                <div class="my-nav-num">28</div>
                <div class="my-nav-text">收藏地点</div>
            </div>
            <div class="my-nav-item">
                <div class="my-nav-num">4521</div>
                <div class="my-nav-text">行走里程</div>
            </div>
        </div>
        <div class="my-func">
            <div class="my-jour">
                <p>近期行程</p>
                <img src="../assets/icon/my/my-add.png">
            </div>
            <div class="my-jour-card">
                <div class="my-jour-content">
                    <div class="my-jour-data">
                        <div class="my-jour-date">
                            <img src="../assets/icon/my/my-data.png">
                            <p>7月5日-8日</p>
                        </div>
                        <div class="my-jour-title">成都·川渝美食之旅</div>
                        <div class="my-jour-cd">还有3天出发</div>
                    </div>
                    <img src="../assets/image/my/my-1.png" class="my-jour-img">
                </div>
                <div class="my-jour-card-layout">
                    <router-link :to="'/error'" class="my-jour-card-item">
                        <div class="my-jour-card-name">我的钱包</div>
                        <div class="my-jour-card-num">¥1,288</div>
                        <div class="my-jour-card-content">3张优惠券</div>
                    </router-link>
                    <router-link :to="'/orders'" class="my-jour-card-item">
                        <div class="my-jour-card-name"><p>全部订单</p></div>
                        <div class="my-jour-card-num">1笔</div>
                        <div class="my-jour-card-content">查看历史订单</div>
                    </router-link>
                </div>
            </div>
            <div class="my-jour">
                <p>常用设置</p>
            </div>
            <div class="my-set">
                <div class="my-set-item">
                    <img src="../assets/icon/my/my-zhanghaoanquan.png">
                    <p>账号安全</p>
                    <img src="../assets/icon/my/my-more.png">
                </div>
                <div class="my-set-item">
                    <img src="../assets/icon/my/my-yinsishezhi.png">
                    <p>隐私设置</p>
                    <img src="../assets/icon/my/my-more.png">
                </div>
                <div class="my-set-item">
                    <img src="../assets/icon/my/my-xiaoxitongzhi.png">
                    <p>消息通知</p>
                    <img src="../assets/icon/my/my-more.png">
                </div>
                <div class="my-set-item">
                    <img src="../assets/icon/my/my-yuyanshezhi.png">
                    <p>语言设置</p>
                    <img src="../assets/icon/my/my-more.png">
                </div>
                <div class="my-set-item">
                    <img src="../assets/icon/my/my-yijianfankui.png">
                    <p>意见反馈</p>
                    <img src="../assets/icon/my/my-more.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//author: 陈一鸣
import "../assets/styles/com.css";
</script>

<style>
.my-user{
    position: absolute;
    width: 100%;
    top: 48px;
    display: flex;
    padding: 0 20px 0 20px;
    gap: 8px;
}
.my-user-info{
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.my-user-name{
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    font-weight: bold;
}
.my-user-intro{
    font-size: 14px;
    line-height: 20px;
    color: #543710;
}
.my-user-vip{
    display: flex;
    background-image: url(../assets/image/my/my-vipbg.png);
    width: 70px;
    height: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    color: #874D01;
}

.my-nav{
    position: absolute;
    top: 152px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 52px;
    padding: 0 20px 0 20px;
    gap: 16px;
}
.my-nav-item{
    width: 106px;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 0px;
}
.my-nav-num{
    font-size: 24px;
    line-height: 32px;
    color: #111827;
}
.my-nav-text{
    font-size: 14px;
    line-height: 20px;
    color: #4B5563;
}

.my-func{
    position: absolute;
    width: 100%;
    height: 700px;
    top: 215px;
    border-radius: 20px;
    background-color: #fff;
}

.my-jour{
    position: absolute;
    top: 380px;
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row;
    padding: 0 20px 0 20px;
    align-items: center;
}
.my-jour:first-child{
    top: 24px;
}
.my-jour p{
    font-size: 18px;
    line-height: 28px;
    color: #A62B1F;
    font-weight: bold;
}
.my-jour img{
    margin-left: auto;
    font-size: 18px;
    line-height: 28px;
    color: #A62B1F;
}

.my-jour-card{
    position: absolute;
    top: 76px;
    width: 100%;
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.my-jour-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 114px;
    background-color: #FCF5ED;
    border-radius: 20px;
    border: 1px solid #A62B1F;
    gap: 56px;
}
.my-jour-data{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.my-jour-date{
    display: flex;
    flex-direction: row;
    gap: 12px;
}
.my-jour-date p{
    font-size: 14px;
    line-height: 20px;
    color: #4B5563;
}
.my-jour-title{
    font-size: 16px;
    line-height: 24px;
    color: #000;
}
.my-jour-cd{
    font-size: 14px;
    line-height: 20px;
    color: #A62B1F;
}
.my-jour-img{
    height: 93px;
}

.my-jour-card-layout{
    display: flex;
    gap: 16px;
}
.my-jour-card-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 167px;
    height: 130px;
}
.my-jour-card-item:first-child{
    background-image: url(../assets/image/my/my-money.png);
}
.my-jour-card-item:last-child{
    background-image: url(../assets/image/my/my-dingdan.png);
}
.my-jour-card-name{
    padding-left: 12px;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #F0E4D8;
}
.my-jour-card-name p{
    font-weight: bold;
    color: #877859;
}
.my-jour-card-num{
    padding-left: 16px;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    color: #fff;
}
.my-jour-card-content{
    padding-left: 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 350;
    color: #fff;
}

.my-set{
    position: absolute;
    top: 432px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.my-set-item{
    display: flex;
    flex-direction: row;
    padding: 0 20px 0 20px;
}
.my-set-item img{
    width: 20px;
    height: 20px;
}
.my-set-item p{
    margin-left: 12px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
}

.my-set-item img:last-child{
    margin-left: 234px;
}
</style>