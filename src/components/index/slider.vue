<style lang="less" scoped>
@import '../../assets/less/index/indexSlider.less';
</style>

<template>
<div class="slider">
  <swipe id="slider" :show-indicators="true" :auto="3000" :speed="1000" :no-drag="true">
    <swipe-item v-for="background in backgrounds" class="slide">
      <a :class="background.image"></a>
    </swipe-item>
  </swipe>
</div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
var Vue = require('vue');
import {
  Swipe,
  SwipeItem
} from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
export default {
  data() {
    return {
      backgrounds: [{
          image: 'slide-1'
        },
        {
          image: 'slide-2'
        }
      ]
    }
  },
  methods: {}
}
</script>
ipt>
