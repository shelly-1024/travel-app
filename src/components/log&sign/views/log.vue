<template>
    <div class="log-input-layout">
        <p class="log-title">手机号</p>
        <div class="log-form-inputbox">
            <form class="log-form-input" @submit.prevent="login">
                <input type="text" v-model="formData.phoneNumber" class="log-form-text" name="words"
                    autocomplete="off"
                    placeholder="请输入手机号" @keydown.enter="login">
            </form>
        </div>
        <p class="log-title">密码</p>
        <div class="log-form-inputbox">
            <form class="log-form-input" @submit.prevent="login">
                <input type="password" v-model="formData.password" class="log-form-text" name="words"
                    autocomplete="off"
                    placeholder="请输入密码" @keydown.enter="login">
            </form>
        </div>
        <p class="log-change">验证码登录</p>
    </div>
    <div class="log-button" @click="login">
        <div><p>登录</p></div>
    </div>
    <div class="log-three">
        <div class="log-line"></div>
        <p>第三方登录</p>
        <div class="log-line"></div>
    </div>
    <div class="log-three-icon">
        <img src="../../../assets/icon/log/log-wx.png">
        <img src="../../../assets/icon/log/log-QQ.png">
        <img src="../../../assets/icon/log/log-dy.png">
    </div>
    <div class="log-form-select">
        <van-radio-group v-model="checked" shape="dot">
            <van-radio name="1" class="log-form-radio">
                <div id="log-radio-text">我已阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span></div>
            </van-radio>
        </van-radio-group>
    </div>
    <van-toast id="van-toast" />
</template>

<script>
//author: 陈一鸣
import '../../../assets/styles/com.css';
import axios from 'axios';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            formData: {
                phoneNumber: '',
                password: ''
            },
            checked: '1'
        };
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
        validateForm() {
            if (!this.formData.phoneNumber) {
                showToast('请输入手机号');
                return false;
            }
            if (!/^1\d{10}$/.test(this.formData.phoneNumber)) {
                showToast('请输入正确的手机号格式');
                return false;
            }
            if (!this.formData.password) {
                showToast('请输入密码');
                return false;
            }
            if (this.formData.password.length < 6) {
                showToast('密码长度不能少于6位');
                return false;
            }
            if (this.checked !== '1') {
                showToast('请阅读并同意用户协议和隐私政策');
                return false;
            }
            return true;
        },
        async login() {
            if (!this.validateForm()) {
                return;
            }

            try {
                const response = await axios.post('http://114.55.146.90:8080/api/user/login', this.formData);
                
                if (response.data && response.data.code === 1) {
                    showToast('登录成功');
                    // 保存token到本地存储
                    if (response.data.data && response.data.data.token) {
                        localStorage.setItem('token', response.data.data.token);
                        localStorage.setItem('userId', response.data.data.id);
                    }
                    // 登录成功后跳转到首页
                    setTimeout(() => {
                        this.router.push('/start');
                    }, 1500);
                } else {
                    showToast(response.data.msg || '登录失败，请检查账号密码');
                }
            } catch (error) {
                console.error('登录请求出错:', error);
                showToast('登录失败，请检查网络连接');
            }
        }
    }
};
</script>

<style scoped>
.log-change{
    font-size: 14px;
    line-height: 20px;
    color: #A62B1F;
}

.log-three{
    margin-top: 88px;
    width: 100%;
    height: 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.log-three p{
    width: 60px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 11px;
    color: #4D4A4A;
}
.log-line{
    width: 64px;
    height: 1px;
    background-color: #000;
}

.log-three-icon{
    margin-top: 6px;
    width: 100%;
    height: 52px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
}

/* 修改密码输入框样式 */
input[type="password"] {
    background: none;
    width: 100%;
    border: 0px;
    height: 100%;
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    color: #000!important;
    padding-left: 16px;
}
</style>