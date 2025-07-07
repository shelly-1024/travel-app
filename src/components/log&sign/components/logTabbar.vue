<template>
    <div class="log-layout">
        <div class="view-bg">
            <img src="../../../assets/image/log&sign/log-bg.png">
        </div>
        <div class="log-nav">
            <van-tabs v-model:active="active" sticky offset-top="154px" 
            line-width="64px" line-height="4px" background="none"
            title-active-color="#A62B1F" color="#A62B1F" title-inactive-color="#000000">
                <van-tab position="fixed">
                    <template #title>
                        <div class="tab-title">登录</div>
                    </template>
                    <div class="tab-content">
                        <Log />
                    </div>
                </van-tab>
                <van-tab position="fixed">
                    <template #title>
                        <div class="tab-title">注册</div>
                    </template>
                    <div class="tab-content">
                        <Sign />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
//author: 陈一鸣
import "../../../assets/styles/com.css";
import Log from '../views/log.vue';
import Sign from '../views/sign.vue';
import { ref } from 'vue';

export default {
    setup() {
        const active = ref(0);
        return { active };
    },
    components: {
        Log,
        Sign
    },
}
</script>

<style>
.log-layout{
    position: absolute;
    top: 0px;
    width: 100%;
}
.log-nav{
    position: absolute;
    top: 140px;
    width: 100%;
    background: none;
    border-radius:20px 20px 0  0 ;
}
.tab-title{
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
}
.tab-content{
    width: 100%;
    position: absolute;
    top: 92px;
}
</style>