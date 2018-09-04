<template>
  <div class="easy-dialog" v-show="show">
    <div class="easy-dialog-mask" v-show="maskShow"></div>
    <div class="easy-dialog-content">
      <i class="iconfont" :class="iconClass"></i>
      <div class="title" v-if="title">{{title}}</div>
      <div class="content" v-if="content">{{content}}</div>
      <div class="easy-dialog-btns">
        <a href="javascript:;"
           class="btn"
           v-for="(item, index) in customBtns"
           :key="index"
           :class="item.className"
           @click="customClick(item.callback)"
        >{{item.text}}</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'easy-dialog',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      maskShow: {
        type: Boolean,
        default: true
      },
      iconClass: {
        type: String,
        default: 'icon-ok'
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      customBtns: {
        type: Array,
        default: () => [
          {
            className: 'success',
            text: '确定',
            callback: null
          }
        ]
      }
    },
    methods: {
      close() {
        this.show = false
      },
      customClick(ev = null) {
        if (!ev) {
          this.close()
          return
        }
        ev()
        this.close()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '//at.alicdn.com/t/font_822134_ahb24d4gqz.css'

  div, i, a {
    margin: 0
    padding: 0
  }

  .easy-dialog {
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 999
    &-mask {
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, .5)
    }
    &-content {
      position: absolute
      top: 50%
      left: 50%
      z-index: 2
      padding-top: 10px
      width: 290px
      font-size: 0
      text-align: center
      border-radius: 6px
      background: #fff
      transform: translate(-50%, -50%)
      .iconfont {
        display: inline-block
        font-size: 50px
      }
      .title {
        margin-top: 10px
        font-size: 14px
        font-weight: 700
      }
      .content {
        margin-top: 10px
        font-size: 12px
      }
    }
    &-btns {
      display: flex
      margin-top: 10px
      border-top: 1px solid #ddd
      .btn {
        flex: 1
        display: block
        width: 100%
        font-size: 12px
        color: #888
        line-height: 34px
        text-decoration: none
        box-sizing: border-box
        &:nth-child(n+2) {
          border-left: 1px solid #ddd
        }
      }
    }
  }
</style>
