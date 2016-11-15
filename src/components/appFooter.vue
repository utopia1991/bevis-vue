<style lang="scss" scoped>
	@import '../assets/css/appFooter.scss';
</style>

<template>
	<div id="footer">
		<div class="footer-main">
			<ul>
				<!-- v-if="" 条件渲染 -->
				<!-- v-bind:function 可以直接缩写成为 :function,  v-on:function 可以直接缩写成为 @function-->
				<li><a v-if="github" v-bind:href="githubUrl" target="_blank">LUFFY</a></li>
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
      githubUrl: '',
      shares: [
        {
          name: 'ZERO',
          url: ''
        },
        {
          name: 'SANJI',
          url: ''
        },
        {
          name: 'NAMI',
          url: ''
        },
        {
          name: 'USOPP',
          url: ''
        },
        {
          name: 'CHOPPER',
          url: ''
        },
        {
          name: 'ROBBIN',
          url: ''
        },
        {
          name: 'FRANK',
          url: ''
        },
        {
          name: 'BROOK',
          url: ''
        }
      ],
      rules: [
        {
          name: '克洛克达尔'
        },
        {
          name: '女帝汉库克'
        },
        {
          name: '多弗朗明哥'
        },
        {
          name: '巴索罗谬 大熊'
        },
        {
          name: '鱼人甚平'
        },
        {
          name: '小丑巴基'
        },
        {
          name: '第一剑客鹰眼'
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
