<template>
	<div id="app">
		<top></top>
		<bottom></bottom>
	</div>
</template>

<script>
import top from './components/appHeader'
import bottom from './components/appFooter'

export default {
  name: 'app',
  components: {
    top,
    bottom
  }
}
</script>

<style lang="scss">
	@import '/assets/css/normal.scss';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
