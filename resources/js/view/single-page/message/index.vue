<template>
  <Card shadow>
    <div>
      <div class="message-page-con message-category-con">
        <Menu width="auto" active-name="unread" @on-select="handleSelect">
          <MenuItem name="unread">
            <span class="category-title">未读消息</span><Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
          </MenuItem>
          <MenuItem name="readed">
            <span class="category-title">已读消息</span><Badge style="margin-left: 10px" class-name="gray-dadge" :count="messageReadedCount"></Badge>
          </MenuItem>
          <MenuItem name="trash">
            <span class="category-title">回收站</span><Badge style="margin-left: 10px" class-name="gray-dadge" :count="messageTrashCount"></Badge>
          </MenuItem>
        </Menu>
      </div>
      <div class="message-page-con message-list-con">
        <Spin fix v-if="listLoading" size="large"></Spin>
        <Menu
          width="auto"
          active-name=""
          @on-select="handleView"
        >
          <MenuItem v-for="item in messageList" :name="item.msg_id" :key="`msg_${item.msg_id}`">
            <div>
              <p class="msg-title">{{ item.title }}</p>
              <Badge status="default" :text="item.create_time" />
              <Button
                style="float: right;margin-right: 20px;"
                :style="{ display: item.loading ? 'inline-block !important' : '' }"
                :loading="item.loading"
                size="small"
                :icon="currentMessageType === 'readed' ? 'md-trash' : ''"
                :title="currentMessageType === 'readed' ? '删除' :''"
                type="text"
                v-show="currentMessageType !== 'unread'"
                @click.native.stop="removeMsg(item)"></Button>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <div class="message-page-con message-view-con">
        <Spin fix v-if="contentLoading" size="large"></Spin>
        <div class="message-view-header">
          <h2 class="message-view-title">{{ showingMsgItem.title }}</h2>
          <time class="message-view-time">{{ showingMsgItem.create_time }}</time>
        </div>
        <div v-html="messageContent"></div>
      </div>
    </div>
  </Card>
</template>

<script>
  import { getMessageList, readMsg, delMsg } from "../../../api/user/msg";

  export default {
  name: 'message_page',
  data () {
    return {
      listLoading: false,
      contentLoading: false,
      currentMessageType: 'unread',
      messageContent: '',
      messageList: [],
      showingMsgItem: {},
      messageUnreadCount: 0,
      messageReadedCount: 0,
      messageTrashCount: 0
    }
  },
  computed: {
  },
  methods: {
    handleSelect (name) {
      this.currentMessageType = name
    },
    handleView (msg_id) {
      this.contentLoading = true
      readMsg(msg_id).then(function (data) {
        console.log(data)
      }).catch(function () {

      })
    },
    removeMsg (item) {
      item.loading = true
      const msg_id = item.msg_id
      if (this.currentMessageType === 'readed'){
          delMsg(msg_id).then(function (data) {
            console.log(data)
          }).catch(function () {

          })
      }
    }
  },
  mounted () {
    let _this = this
    _this.listLoading = true
    // 请求获取消息列表
    getMessageList().then(function (data) {
      console.log(data)
      _this.listLoading = false
    })
  }
}
</script>

<style lang="less">
.message-page{
  &-con{
    height: ~"calc(100vh - 176px)";
    display: inline-block;
    vertical-align: top;
    position: relative;
    &.message-category-con{
      border-right: 1px solid #e6e6e6;
      width: 200px;
    }
    &.message-list-con{
      border-right: 1px solid #e6e6e6;
      width: 230px;
    }
    &.message-view-con{
      position: absolute;
      left: 446px;
      top: 16px;
      right: 16px;
      bottom: 16px;
      overflow: auto;
      padding: 12px 20px 0;
      .message-view-header{
        margin-bottom: 20px;
        .message-view-title{
          display: inline-block;
        }
        .message-view-time{
          margin-left: 20px;
        }
      }
    }
    .category-title{
      display: inline-block;
      width: 65px;
    }
    .gray-dadge{
      background: gainsboro;
    }
    .not-unread-list{
      .msg-title{
        color: rgb(170, 169, 169);
      }
      .ivu-menu-item{
        .ivu-btn.ivu-btn-text.ivu-btn-small.ivu-btn-icon-only{
          display: none;
        }
        &:hover{
          .ivu-btn.ivu-btn-text.ivu-btn-small.ivu-btn-icon-only{
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
