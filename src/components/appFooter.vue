<style lang="scss" scoped>
	@import '../assets/css/appFooter.scss';
</style>

<template>
	<div id="footer">
		<div class="footer-main">
			<ul>
				<!-- v-if="" 条件渲染 -->
				<!-- v-bind:function 可以直接缩写成为 :function,  v-on:function 可以直接缩写成为 @function-->
				<li><a v-if="github" v-bind:href="githubUrl" target="_blank">Github</a></li>
				<li v-for="share in shares"><a :href="share.url" target="_blank">{{share.name}}</a></li>
			</ul>
			<div class="footer-nav">
				<a href="" v-for="rule in rules" target="_blank">{{rule.name}}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      github: true,
      githubUrl: 'https://github.com/utopia1991',
      shares: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/bevis1991'
        },
        {
          name: 'Linkein',
          url: 'http://www.linkedin.com/in/bevis1991'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/bevis_shen'
        },
        {
          name: 'Weibo',
          url: 'http://weibo.com/2619492527'
        },
        {
          name: 'Wechat',
          url: ''
        },
        {
          name: 'QQ',
          url: ''
        }
      ],
      rules: [
        {
          name: '免责条款'
        },
        {
          name: '隐私保护'
        },
        {
          name: '咨询热点'
        },
        {
          name: '联系我们'
        },
        {
          name: '公司简介'
        },
        {
          name: '批发方案'
        },
        {
          name: '配送方式'
        }
      ]
    }
  },
  methods: {
    doSomething () {
      // ps:在vue里字符串被规定位要用单引号,且注释的时候双斜杆后面要用空格
      console.log('Bevis is a awesome man!')
    }
  }
}
</script>
