<template>
    <div class="log-input-layout">
        <p class="log-title">用户名</p>
        <div class="log-form-inputbox">
            <form class="log-form-input" @submit.prevent="register">
                <input type="text" v-model="formData.name" class="log-form-text" name="words"
                    autocomplete="off"
                    placeholder="请输入您的用户名" @keydown.enter="register">
            </form>
        </div>
        <p class="log-title">手机号</p>
        <div class="log-form-inputbox">
            <form class="log-form-input" @submit.prevent="register">
                <input type="text" v-model="formData.phoneNumber" class="log-form-text" name="words"
                    autocomplete="off"
                    placeholder="请输入手机号" @keydown.enter="register">
            </form>
        </div>
        <p class="log-title">密码</p>
        <div class="log-form-inputbox">
            <form class="log-form-input" @submit.prevent="register">
                <input type="password" v-model="formData.password" class="log-form-text" name="words"
                    autocomplete="off"
                    placeholder="请输入您的密码" @keydown.enter="register">
            </form>
        </div>
        <p class="log-title">确认密码</p>
        <div class="log-form-inputbox">
            <form class="log-form-input" @submit.prevent="register">
                <input type="password" v-model="confirmPassword" class="log-form-text" name="words"
                    autocomplete="off"
                    placeholder="请再次输入您的密码" @keydown.enter="register">
            </form>
        </div>
    </div>
    <div class="log-button" @click="register">
        <div><p>注册</p></div>
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
        name: '',
        phoneNumber: '',
        password: ''
      },
      confirmPassword: '',
      checked: '1'
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    validateForm() {
      if (!this.formData.name) {
        showToast('请输入用户名');
        return false;
      }
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
      if (this.formData.password !== this.confirmPassword) {
        showToast('两次输入的密码不一致');
        return false;
      }
      if (this.checked !== '1') {
        showToast('请阅读并同意用户协议和隐私政策');
        return false;
      }
      return true;
    },
    async register() {
      if (!this.validateForm()) {
        return;
      }

      try {
        const response = await axios.post('http://114.55.146.90:8080/api/user/register', this.formData);
        
        if (response.data && response.data.code === 1) {
          showToast('注册成功');
          // 注册成功后跳转到首页或登录页
          setTimeout(() => {
            this.router.push('/start');
          }, 1500);
        } else {
          showToast(response.data.msg || '注册失败，请稍后重试');
        }
      } catch (error) {
        console.error(error);
        showToast('注册失败，请检查网络连接');
      }
    }
  }
};
</script>

<style scoped>
/* 使用com.css中的样式，这里只添加额外的样式 */
.log-form-select{
    padding-top: 24px;
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