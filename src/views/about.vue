<style lang="less" scoped>
@import '../assets/less/about/about.less';
</style>

<template>
<div class="main">
  <div class="loading" @click="isLoading = !isLoading" v-if="isLoading">
    <canvas id="loading" width="200" height="200">Your browser does not support the HTML5 canvas tag.</canvas>
    <p>
      Click Me!
    </p>
  </div>
  <transition name="fade" mode="out-in">
    <div v-if="!isLoading">
      <top></top>
      <div class="usernyeart" @click="shuffle">
        <div class="cont">
          <div class="user">
            <span class="inner">
									<img :src="user.img" alt="">
								</span>
          </div>
          <div class="snow">
            <span v-for="flower in flowers">
									<img :src="flower.url" :width="flower.width" :height="flower.height" alt="">
								</span>
          </div>
        </div>
      </div>
      <bottom></bottom>
    </div>
  </transition>
</div>
</template>

<script>
import top from '../components/common/header'
import bottom from '../components/common/footer'

export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      isLoading: true,
      user: {
        img: 'static/images/logo/logo.png'
      },
      flowers: [{
          url: 'static/images/flowers/flower1.png',
          width: 61,
          height: 86
        },
        {
          url: 'static/images/flowers/flower2.png',
          width: 79,
          height: 117
        },
        {
          url: 'static/images/flowers/flower4.png',
          width: 87,
          height: 116
        },
        {
          url: 'static/images/flowers/flower3.png',
          width: 85,
          height: 114
        },
        {
          url: 'static/images/flowers/flower5.png',
          width: 111,
          height: 137
        },
        {
          url: 'static/images/flowers/flower6.png',
          width: 61,
          height: 66
        },
        {
          url: 'static/images/flowers/flower7.png',
          width: 78,
          height: 109
        },
        {
          url: 'static/images/flowers/flower8.png',
          width: 56,
          height: 98
        },
        {
          url: 'static/images/flowers/flower9.png',
          width: 89,
          height: 114
        },
        {
          url: 'static/images/flowers/flower10.png',
          width: 80,
          height: 113
        },
        {
          url: 'static/images/flowers/flower2.png',
          width: 69,
          height: 98
        },
        {
          url: 'static/images/flowers/flower7.png',
          width: 69,
          height: 98
        },
      ]
    }
  },
  // 页面加载完成立即执行js：mounted(){}
  mounted() {
    var waveWidth = 300,
      offset = 0,
      waveHeight = 8,
      waveCount = 5,
      startX = -100,
      startY = 204,
      progress = 0,
      progressStep = 1,
      d2 = waveWidth / waveCount,
      d = d2 / 2,
      hd = d / 2;
    var c = document.getElementById("loading");
    var ctx = c.getContext("2d");
    var img = new Image();
    ctx.fillStyle = "#111";

    function tick() {
      offset -= 5;
      progress += progressStep;
      if (progress > 220 || progress < 0) progressStep *= -1;
      if (-1 * offset === d2) offset = 0;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      var offsetY = startY - progress;
      ctx.moveTo(startX - offset, offsetY);
      for (var i = 0; i < waveCount; i++) {
        var dx = i * d2;
        var offsetX = dx + startX - offset;
        ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
        ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
      }

      ctx.lineTo(startX + waveWidth, 300);
      ctx.lineTo(startX, 300);
      ctx.fill();
      //画布上已有的内容只会在它和新图形重叠的地方保留。新图形绘制于内容之后。
      ctx.globalCompositeOperation = "destination-atop";
      ctx.drawImage(img, 0, -1)
      requestAnimationFrame(tick);
    }
    img.onload = function() {
      tick();
    };
    img.src = 'static/images/logo/logo.png';
  },
  methods: {
    shuffle() {
      //Fisher–Yates shuffle
      Array.prototype.shuffleArray = function() {
        var input = this;
        for (var i = input.length - 1; i >= 0; i--) {
          var randomIndex = Math.floor(Math.random() * (i + 1));
          var itemAtIndex = input[randomIndex];
          input[randomIndex] = input[i];
          input[i] = itemAtIndex;
        }
        return input;
      }

      var random = [1, 2, 3, 4, 5, 6, 7, 8].shuffleArray();
      console.log(random);
    }
  }
}
</script>
