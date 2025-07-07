<template>
    <div>
      <van-tabbar v-model="active" v-if="$route.meta.showTabbar" 
      active-color="#A62B1F" inactive-color="#4B5563">
        <van-tabbar-item to="/home" style="background-color: #fff;">
            <span>首页</span>
            <template #icon="props">
            <img :src="props.active? icon.homeActive : icon.homeInactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/disc" style="background-color: #fff;">
            <span>发现</span>
            <template #icon="props">
            <img :src="props.active? icon.discActive : icon.discInactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/jour" style="background-color: #fff;">
            <span>行程</span>
            <template #icon="props">
            <img :src="props.active? icon.jourActive : icon.jourInactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/message" style="background-color: #fff;">
            <span>客服</span>
            <template #icon="props">
            <img :src="props.active? icon.messageActive : icon.messageInactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/my" style="background-color: #fff;">
            <span>我的</span>
            <template #icon="props">
            <img :src="props.active? icon.myActive : icon.myInactive" />
            </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </template>
  
  <script>
  //author: 陈一鸣
  import homeActive from '../assets/icon/tabbar/home-active.png';
  import homeInactive from '../assets/icon/tabbar/home.png';
  import discActive from '../assets/icon/tabbar/disc-active.png';
  import discInactive from '../assets/icon/tabbar/disc.png';
  import jourActive from '../assets/icon/tabbar/jour-active.png';
  import jourInactive from '../assets/icon/tabbar/jour.png';
  import messageActive from '../assets/icon/tabbar/message-active.png';
  import messageInactive from '../assets/icon/tabbar/message.png';
  import myActive from '../assets/icon/tabbar/my-active.png';
  import myInactive from '../assets/icon/tabbar/my.png';
  import { ref } from 'vue';
  export default {
    name: 'Tabbar',
    setup() {
      const active = ref(0);
      const icon = {
        homeActive,
        homeInactive,
        discActive,
        discInactive,
        jourActive,
        jourInactive,
        messageActive,
        messageInactive,
        myActive,
        myInactive,
      };
      return {
        icon,
        active,
      };
    },
  };
  </script>
  
  <style scoped>
  .van-tabbar{
    height: 64px!important;
  }
  </style>
  