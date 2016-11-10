<template>
	<div id="app">
		<top></top>
		<wanted></wanted>
		<sidebar></sidebar>
		<bottom></bottom>
	</div>
</template>

<script>
import top from './components/appHeader'
import wanted from './components/appContentWanted'
import sidebar from './components/appSidebar'
import bottom from './components/appFooter'

export default {
  name: 'app',
  components: {
    top,
    wanted,
    sidebar,
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
