<style scoped lang="scss" rel="stylesheet/scss">
	@import '../assets/css/appVideo.scss';
</style>

<template>
	<div id="appVideo">
		<video width="100%" height="100%" poster="static/img/video.jpg" controls>
			<source src="http://covteam.u.qiniudn.com/oceans.mp4" type="video/mp4">
			<object data="http://covteam.u.qiniudn.com/oceans.mp4" width="100%" height="100%">
				<embed src="http://covteam.u.qiniudn.com/oceans.mp4" width="100%" height="100%">
			</object>
		</video>
	</div>
</template>
