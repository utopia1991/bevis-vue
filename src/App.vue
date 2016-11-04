<template>
	<div id="app">
		<div class="header">
			<span class="header-logo"></span>
		</div>
		<hello></hello>
	</div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	.header {
		width: 100%;
		.header-logo {
			display: inline-block;
			margin: 0 auto;
			width: 150px;
			height: 150px;
			border-radius: 50%;
			background: url('./assets/logo.png') no-repeat;
			background-size: cover;
			background-position: center;
		}
	}
}
</style>
