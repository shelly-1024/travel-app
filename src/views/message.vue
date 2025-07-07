<template>
    <div class="customer-service-page">
        <!-- 顶部客服信息区域 -->
        <div class="header">
          <div class="message-bg">
            <img src="../assets/image/message/message-bg.png" >
          </div>
          <div class="avatar">
              <img src="../assets/icon/message/message-kefutouxiang.png" alt="客服头像" class="avatar-icon" />
          </div>
          <p class="desc">24小时专业客服为您服务</p>
        </div>

        <!-- 功能图标区 -->
        <div class="func-list">
        <van-grid :column-num="4" :border="false">
            <van-grid-item text="订单查询" @click="handleFunc('orderQuery')">
              <template #icon>
                <img src="../assets/icon/message/message-dingdanchaxun.png" alt="订单查询" class="grid-icon" />
              </template>
            </van-grid-item>
            <van-grid-item text="退款售后" @click="handleFunc('refundAfterSale')">
              <template #icon>
                <img src="../assets/icon/message/message-tuikuanshouhou.png" alt="退款售后" class="grid-icon" />
              </template>
            </van-grid-item>
            <van-grid-item text="门票预订" @click="handleFunc('ticketBooking')">
              <template #icon>
                <img src="../assets/icon/message/message-menpiaoyuding.png" alt="门票预订" class="grid-icon" />
              </template>
            </van-grid-item>
            <van-grid-item text="行程变更" @click="handleFunc('itineraryChange')">
              <template #icon>
                <img src="../assets/icon/message/message-xinchenbiangen.png" alt="行程变更" class="grid-icon" />
              </template>
            </van-grid-item>
            <!-- 会员服务 -->
            <van-grid-item text="会员服务" @click="handleFunc('memberService')">
              <template #icon>
                <img src="../assets/icon/message/message-huiyuanfuwu.png" alt="会员服务" class="grid-icon" />
              </template>
            </van-grid-item>
            <!-- 发票申请 -->
            <van-grid-item text="发票申请" @click="handleFunc('invoiceApply')">
              <template #icon>
                <img src="../assets/icon/message/message-fapiaoshenqing.png" alt="发票申请" class="grid-icon" />
              </template>
            </van-grid-item>
            <!-- 投诉建议 -->
            <van-grid-item text="投诉建议" @click="handleFunc('complaintSuggest')">
              <template #icon>
                <img src="../assets/icon/message/message-tousujianyi.png" alt="投诉建议" class="grid-icon" />
              </template>
            </van-grid-item>
            <!-- 紧急求助 -->
            <van-grid-item text="紧急求助" @click="handleFunc('emergencyHelp')">
              <template #icon>
                <img src="../assets/icon/message/message-jinjiqiuzhu.png" alt="紧急求助" class="grid-icon" />
              </template>
            </van-grid-item>
        </van-grid>
        </div>
        <!-- 客服小游 -->
        <div class="xiaoyou-layout">
          <div class="xiaoyou">
            <div class="text-xy">智能客服 小游</div>
            <div class="text-ks">快速解答您的问题</div>
            <img src="../assets/image/message/message-zhinengkefuxiaoyou.png" >
          </div>
        </div>
        <!-- 咨询方式区 -->
        <div class="consult-layout">
            <div class="consult">
                <div class="bg-rectangle">
                    <router-link :to="'/error'" class="consult">
                        <div class="red-rectangle">
                          <div class="consult-online-text">在线咨询</div>
                        </div>
                    </router-link>
                    
                    <router-link :to="'/error'" class="consult">
                        <div class="red-white-rectangle">
                          <div class="consult-phone-text">电话咨询</div>
                        </div>
                    </router-link>
                    <div class="clock-img">
                      <img src="../assets/icon/message/message-shijian.png" >
                    </div>
                    <div class="clock-text">预计等待时间：2分钟</div>    
                    <div class="phone-img">
                      <img src="../assets/icon/message/message-dianhua.png" >
                    </div>
                    <div class="phone-text">当前在线：12人</div>                                 
                </div>
 
            </div>
        </div>
        <!-- 热门问题区 -->
        <div class="hot-questions-layout">
            <div class="hot-questions">
              <div class="bg2-rectangle">
                  <p class="title">热门问题</p>
                  <div class="top-separator"></div> <!-- 分隔线元素 -->
                  <van-list>
                      <van-cell 
                      v-for="(item, index) in hotQuestionList" 
                      :key="index" 
                      :title="item" 
                      is-link 
                      @click="goQuestionDetail(item)" 
                      />
                  </van-list>
              </div>

            </div>          
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  name: 'CustomerService',
  setup() {
    const active = ref('service'); // 控制 TabBar 激活项
    const hotQuestionList = ref([
      '如何修改订单信息？',
      '退款规则说明',
      '景点门票预约指南',
      '会员积分规则',
      '紧急联系方式'
    ]);

    // 功能点击事件（可扩展实际逻辑，如跳转对应页面）
    const handleFunc = (funcType) => {
      Toast(`点击了 ${funcType} 功能`);
      // 这里可写实际路由跳转或调用接口逻辑，示例仅提示
    };

    // 在线咨询点击
    const goOnlineConsult = () => {
      Toast('进入在线咨询');
      // 实际可跳转在线聊天组件或页面
    };

    // 电话咨询点击
    const goPhoneConsult = () => {
      Toast('进入电话咨询');
      // 实际可唤起拨号或跳转拨号页面
    };

    // 热门问题点击
    const goQuestionDetail = (question) => {
      Toast(`查看 ${question} 详情`);
      // 实际可跳转问题详情页，传 question 参数
    };

    return {
      active,
      hotQuestionList,
      handleFunc,
      goOnlineConsult,
      goPhoneConsult,
      goQuestionDetail
    };
  }
};
</script>

<style>
.customer-service-page {
  position: absolute;
  top: 0;
  width: 100%;
  /*background: linear-gradient(to bottom, #f8eede, #fff);
  min-height: 100vh;*/
}
.header {
  height: 228px;
  text-align: center;
  /* padding: 57px 0 0 0; */
}
.message-bg{
    position: absolute;
    top: 0px;
}
.avatar {
  position: absolute;
  top: 57px; 
  left: 0;
  right: 0;
  margin: 0 auto; /* 实现水平居中 */

}

.desc {
  position: absolute;
  font-size: 16px;
  color: #1F2937;
  top: 165px; 
  left: 0;
  right: 0;
  margin: 0 auto; 

}

.func-list {
  background: #fff;
  margin: 10px 10px; 

}
.van-grid-item__content {
  padding: 8px 0px !important; 
  width: 90px;
}
.xiaoyou-layout{
  background-color: #F7F7F7;
  height: 112px;
}
.xiaoyou{
  position: relative;
  height: 96px;
  text-align: center;
  padding: 16px 0px;
}
.text-xy{
  position: absolute; 
  color: #543000; 
  font-size: 24px; 
  padding: 20px 74px; 
  font-weight: bold; 
}
.text-ks {
  position: absolute; 
  color: #120C04; 
  font-size: 16px; 
  padding: 60px 74px; 
  font-weight: 500; 
}
.consult-layout{
  background-color: #F7F7F7;
  padding: 16px; /* 容器内边距，避免贴边 */

}
.consult{
  width: 100%;
  height: 118px;
}
.bg-rectangle{
  position: absolute;
  background-color: #FFFFFF;
  width: 358px;
  height: 118px;
  border-radius: 16px;
}
.red-rectangle {
  position: absolute;
  width: 154px;    
  height: 50px;   
  background-color: #A62B1F; 
  border-radius: 12px; /* 圆角 */
  top:16px;
  left:16px;

}
.red-white-rectangle{
  position: absolute;
  width: 154px;    
  height: 50px;   
  background-color: #FFFFFF; /* 将背景颜色修改为白色 */
  border: 1px solid #A62B1F; /* 设置 2px 宽的红色边框 */
  border-radius: 12px; /* 圆角 */
  top: 16px;
  left: 186px;
}
.consult-online-text{
  position: absolute; 
  color: #FFFFFF; 
  font-size: 16px; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.consult-phone-text{
  position: absolute; 
  color: #A62B1F; 
  font-size: 16px; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.clock-img{
  position: absolute;
  top:84px;
  left:16px;
}
.clock-text{
  position: absolute;
  top:83px;
  left:36px;
  color: #4B5563; 
  font-size: 14px; 
}
.phone-img{
  position: absolute;
  top:84px;
  left:203px;
}
.phone-text{
  position: absolute;
  top:83px;
  left:223px;
  color: #4B5563; 
  font-size: 14px; 
}
.hot-questions-layout{
  background-color: #F7F7F7;
  padding: 0 16px 16px; 
}
.hot-questions {
  width: 100%;
  height: 345px;

}
.bg2-rectangle{
  position: absolute;
  background-color: #FFFFFF;
  width: 358px;
  height: 345px;
  border-radius: 16px;
}
.title {
  font-size: 18px;
  padding: 16px 16px;
}
.top-separator {
  height: 1px;
  background-color: #F3F4F6; 
  margin: 0 16px; 
}

</style>