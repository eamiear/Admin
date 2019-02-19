<template>
  <section>
    <h3 >招商</h3>
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <el-form-item prop="account">
        <el-input name="account" type="text" v-model="loginForm.account" placeholder="账号" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          name="password"
          type="password"
          v-model="loginForm.password"
          placeholder="密码"
          @keyup.enter.native="handleLogin" />
      </el-form-item>

      <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'login',
  data () {
    const validateAccount = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [{ required: true, trigger: 'blur', validator: validateAccount }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('loginByAccount', this.loginForm).then(response => {
            this.loading = false
            if (response.code !== 0) {
              this.$message({
                message: response.msg || '登录失败',
                type: 'error'
              })
              this.$router.push({path: '/login'})
            } else {
              this.$router.push({path: '/'})
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

