<template>
	<div id="app">
		<top></top>
		<slider></slider>
		<wanted></wanted>
		<sidebar></sidebar>
		<bottom></bottom>
	</div>
</template>

<script>
import top from './components/appHeader';
import slider from './components/appSlider';
import wanted from './components/appContentWanted';
import sidebar from './components/appSidebar';
import bottom from './components/appFooter';
import $ from 'jquery';

export default {
  name: 'app',
  components: {
    top,
    slider,
    wanted,
    sidebar,
    bottom
  }
}
</script>

<style lang="scss">
	@import '/assets/css/normal.scss';
</style>
