<style lang="less" scoped>
@import '../assets/less/hero/hero.less';
</style>

<template>
<div class="main">
  <top></top>
  <div class="hero">
    <div class="hero-img">
      <img :src="'../static/images/heros/'+$route.params.id+'.png'" :alt="$route.params.id">
    </div>
    <div class="hero-tro">
      <h1>{{hero[$route.params.id].fullName}}</h1>
      <h2>{{hero[$route.params.id].price}}</h2>
      <p class="hero-intro">
        {{hero[$route.params.id].troduction}}
      </p>
    </div>
  </div>
  <bottom></bottom>
</div>
</template>

<script>
import top from '../components/common/header'
import bottom from '../components/common/footer'
import hero from '../model/hero'

export default {
  name: 'hero',
  data() {
    return {
      hero
    }
  },
  components: {
    top,
    bottom
  }
}
</script>
