<style scoped lang="scss">
	@import '../assets/css/appSidebar.scss';
</style>

<template>
	<div class="tb_box" @click="backTotop">
		<a href="javascript:;" class="backTotop">
			<p>
				<span>返回顶部</span>
			</p>
		</a>
	</div>
</template>

<script>
  // import '../assets/js/jquery.js'
  export default{
    data () {
      return {
      }
    },
    methods: {
      backTotop () {
        document.body.scrollTop = 0
      }
    }
  }
</script>
