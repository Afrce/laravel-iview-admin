<style lang="less">
  @import 'login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import {login} from "../../api/user/login.js";
import LoginForm from '_c/login-form'

export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit ({ userName, password }) {
      login({ username:userName, password:password })
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>
