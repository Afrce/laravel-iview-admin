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
          <MenuItem name="deleted">
            <span class="category-title">回收站</span><Badge style="margin-left: 10px" class-name="gray-dadge" :count="messageDeletedCount"></Badge>
          </MenuItem>
        </Menu>
      </div>
      <div class="message-page-con message-list-con" style="overflow: auto">
        <Spin fix v-if="listLoading" size="large"></Spin>
        <Menu
          width="auto"
          active-name=""
          @on-select="handleView"
        >
          <MenuItem v-for="(item, key) in currentMsgList" :name="key" :key="`${key}`">
            <div>
              <p class="msg-title">{{ item.msg.msg }}</p>
              <Badge status="default" :text="item.created_at" />
              <Button
                style="float: right;margin-right: 20px;"
                :style="{ display: item.loading ? 'inline-block !important' : '' }"
                :loading="item.loading"
                size="small"
                :icon="currentMessageType === 'readed' ? 'md-trash' : ''"
                :title="currentMessageType === 'readed' ? '删除' :''"
                type="text"
                v-show="currentMessageType !== 'unread'"
                @click.native.stop="removeMsg(key)"></Button>
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
  import {messageSuccess} from "../../../common/common";

  export default {
  name: 'message_page',
  data () {
    return {
      listLoading: false,
      contentLoading: false,
      currentMessageType: 'unread',
      messageContent: '',
      messageList: [],
      currentMsgList: [],
      showingMsgItem: {},
      messageUnreadCount: 0,
      messageReadedCount: 0,
      messageDeletedCount: 0
    }
  },
  computed: {
  },
  methods: {
    handleSelect (name) {
      this.messageContent = "";
      this.currentMessageType = name
      this.currentMsgList = this.messageList[name]
    },
    handleView (key) {
      let _this = this;
      this.messageContent = "";
      let currentMsg = this.currentMsgList[key]
      this.messageContent = currentMsg['msg']['url']
      let msg_id = currentMsg['id']
      if (this.currentMessageType === 'unread'){
        this.readMsg(msg_id)
      }
    },
    readMsg(msg_id){
      readMsg(msg_id).then(function (data) {
        if(data.data.status){
          _this.getMessageList();
        }
      }).catch(function () {
      })
    },
    removeMsg (key) {
      let currentMsg = this.currentMsgList[key]
      let msg_id = currentMsg['id']
      console.log(msg_id)
      if (this.currentMessageType === 'readed'){
          delMsg(msg_id).then(function (data) {
            if(data.data.status){
              messageSuccess({"title":"删除成功！"})
            }
          }).catch(function () {

          })
      }
    },
    getMessageList(){
      let _this = this;
      getMessageList().then(function (data) {
        _this.messageList = data.data.data
        _this.messageUnreadCount = _this.messageList.unread.length
        _this.messageReadedCount = _this.messageList.readed.length
        _this.messageDeletedCount =_this.messageList.deleted.length
        _this.currentMsgList = _this.messageList.unread
        _this.listLoading = false
      })
    }
  },
  mounted () {
    let _this = this
    _this.listLoading = true
    // 请求获取消息列表
    _this.getMessageList();
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
