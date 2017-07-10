<style lang="less" scoped>
@import '../assets/less/come/come.less';
</style>

<template>
<div>
  <canvas id="flash"></canvas>
  <piratesContent></piratesContent>
</div>
</template>

<script>
import SimplexNoise from '../assets/js/simplex.js'
import piratesContent from '../components/piratesContent'

export default {
  data() {
    return {
      img: {
        src: 'static/images/heros/pirates.jpg',
        alt: 'Straw Hat Pirate'
      }
    }
  },
  components: {
    piratesContent
  },
  mounted() {
    // Setup
    var c = document.querySelector('canvas'),
      ctx = c.getContext('2d'),
      unit = 40,
      cols = 40, //列数
      rows = 20, //行数
      w = unit * cols,
      h = unit * rows,
      particles = [],
      particleCount = 400,
      offInc = 0.04,
      tickMult = 0.003,
      tick = 0,
      simplex = new SimplexNoise();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    // Utility
    function hsla(h, s, l, a) {
      return 'hsla( ' + h + ', ' + s + '%, ' + l + '%, ' + a + ')';
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Particle
    var Particle = function() {
      function Particle() {
        _classCallCheck(this, Particle);

        this.path = [];
        this.noiseDirection = 0;
        this.noiseMagnitude = 0;
        this.pathLength = 6;
        this.speed = 10;
        this.reset();
      }

      Particle.prototype.reset = function reset() {
        this.path.length = 0;
        this.x = rand(0, w);
        this.y = rand(0, h);
        this.cx = 0;
        this.cy = 0;
        this.vx = 0;
        this.vy = 0;
        this.alpha = 0;
      };

      Particle.prototype.step = function step() {
        if (this.alpha < 1) {
          this.alpha += 0.025;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.cx = Math.max(0, Math.min(cols - 1, Math.floor(this.x / unit)));
        this.cy = Math.max(0, Math.min(rows - 1, Math.floor(this.y / unit)));

        this.path.unshift(this.x, this.y);
        if (this.path.length > this.pathLength * 2) {
          this.path.pop();
          this.path.pop();
        }

        var _len = this.path.length;
        if (_len > 0) {
          var _lastPointX = this.path[_len - 2];
          var _lastPointY = this.path[_len - 1];
          if (_lastPointX > w || _lastPointX < 0 || _lastPointY > h || _lastPointY < 0) {
            this.reset();
          }
        }

        var _noise1 = simplex.noise3D(offInc * this.cx, offInc * this.cy, tick * tickMult);
        _noise1 = Math.min(1, _noise1);
        _noise1 = Math.max(-1, _noise1);
        this.noiseDirection = (_noise1 + 1) * Math.PI;

        var _noise2 = simplex.noise3D(offInc * this.cx, offInc * this.cy, tick * tickMult + 100);
        _noise2 = Math.min(1, _noise2);
        _noise2 = Math.max(-1, _noise2);
        this.noiseMagnitude = (_noise2 + 1) / 2;

        this.vxTarget = Math.cos(this.noiseDirection) * this.noiseMagnitude * this.speed;
        this.vyTarget = Math.sin(this.noiseDirection) * this.noiseMagnitude * this.speed;

        this.vx += (this.vxTarget - this.vx) * 0.1;
        this.vy += (this.vyTarget - this.vy) * 0.1;
      };

      Particle.prototype.draw = function draw() {
        var _len = this.path.length;
        if (_len > 0) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.path[_len - 2], this.path[_len - 1]);
          ctx.strokeStyle = hsla(tick + (this.x + this.y) / (w + h) * 180, 80, 50, this.alpha);
          ctx.stroke();
        }
      };

      return Particle;
    }();

    // Init
    function init() {
      c.width = w;
      c.height = h;
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = 2;
      loop();
    }

    // Step
    function step() {
      if (particles.length < particleCount) {
        particles.push(new Particle());
      }
      var i = particles.length;
      while (i--) {
        particles[i].step();
      }
      tick++;
    }

    // Draw
    function draw() {
      ctx.clearRect(0, 0, w, h);
      var i = particles.length;
      while (i--) {
        particles[i].draw();
      }
    }

    // Loop
    function loop() {
      requestAnimationFrame(loop);
      step();
      draw();
    }

    // Kick Off
    init();
  }
}
</script>
