<style lang="less" scoped>
@import '../assets/less/sky.less';
</style>

<template>
<div>
  <video class="background_video" loop muted></video>
  <div class="video_cover"></div>
  <div class="video_controls">
    <span class="play">
				<img src="../assets/images/flag/play.png">
			</span>
    <span class="pause">
				<img src="../assets/images/flag/pause.png">
			</span>
  </div>
  <section class="content">
    <a class="back" href="/">
				back to index
			</a>
  </section>
</div>
</template>

<script>
import SimplexNoise from '../assets/js/fv.js'
import piratesContent from '../components/piratesContent'

export default {
  data() {
    return {

    }
  },
  components: {
    piratesContent
  },
  mounted() {
    var bv = new Fideo();
    bv.init({
      // 视频区域
      videoEl: document.querySelector('.background_video'),

      // 容器区域
      container: document.querySelector('body'),

      // 是否适配屏幕
      resize: true,

      // 自动播放默认是 true
      // autoplay: false,

      isMobile: window.matchMedia('(max-width: 768px)').matches,
      playButton: document.querySelector('#play'),
      pauseButton: document.querySelector('#pause'),

      // 视频源，适配多格式
      src: [{
        src: 'static/images/flag/night.mp4',
        type: 'video/mp4'
      }],

      // 初始加载
      onLoad: function() {
        document.querySelector('.video_cover').style.display = 'none';
      }
    });
  }
}
</script>
