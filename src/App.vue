<template>
  <div id="app">
    <a href="javascript:;" @click="dialogShow">dialog</a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    methods: {
      dialogShow() {
        this.$easyDialog.use({
          title: '标题',
          content: 'content',
          customBtns: [
            {
              className: 'error',
              text: '取消',
              callback: this.clickError
            },
            {
              className: 'ok',
              text: '确定',
              callback: this.clickOk
            }
          ]
        })
      },
      clickError() {
        console.log('error')
      },
      clickOk() {
        console.log('ok')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
