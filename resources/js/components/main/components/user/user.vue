<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge class="allBadeg" :count="unreadMsg" overflow-count="99">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge style="margin-left: 10px" :count="unreadMsg"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import {getUserInfo, logout} from "../../../../api/user/login";

export default {
  name: 'User',
  data() {
    return{
      unreadMsg: 0
    }
  },
  methods: {
    logout () {
      logout()
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  },
  mounted() {
    let _this = this
    getUserInfo().then(function () {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      _this.unreadMsg = userInfo.unreadMsg
    })
  }
}
</script>
