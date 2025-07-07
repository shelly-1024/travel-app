<template>
    <div class="start-layout">
        <router-link :to="'/home'">
            <img src="../assets/icon/com/start.svg">
        </router-link>
    </div>
</template>

<script>
//author: 陈一鸣
</script>

<style>
.start-layout{
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/image/com/start-bg.png');
    width: 100%;
    height: 844px;
}
</style>