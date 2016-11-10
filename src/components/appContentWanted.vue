<template>
	<div class="wanted_box">
		<h2>WANTED</h2>
		<div class="wanted_captain">
			<p class="pic">
				<img v-bind:src="captainUrl">
			</p>
			<p class="price">
				<span class="captain">{{captainName}}</span>
				<span class="bd">
					<strong>${{captainPrice}}</strong>
				</span>
				<span class="sale">
					<b>{{captainMethod}}</b>
				</span>
			</p>
		</div>
		<div class="wanted_main">
			<ul class="wanted_list cle" id="wanted_list">
				<li class="show" v-for="character in characters">
					<a href="" target="_blank">
						<p class="pic">
							<img v-bind:src="character.url">
						</p>
						<h3>{{character.name}}</h3>
						<p class="price">
							<span class="bd">
								<strong>${{character.price}}</strong>
							</span>
							<span class="sale">
								<b>{{character.method}}</b>
							</span>
						</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default{
    data () {
      return {
        captainName: 'Monkey D Luffy',
        captainUrl: 'static/img/luffy.png',
        captainPrice: '500,000,000',
        captainMethod: 'DEAD OR ALIVE',
        characters: [
          {
            name: 'Zero',
            url: 'static/img/zero.png',
            price: '3亿',
            method: 'DEAD OR ALIVE'
          },
          {
            name: 'Sanji',
            url: 'static/img/sanji.png',
            price: '1.2亿',
            method: 'ALIVE'
          },
          {
            name: 'Nami',
            url: 'static/img/nami.png',
            price: '0.6亿',
            method: 'DEAD OR ALIVE'
          },
          {
            name: 'Usopp',
            url: 'static/img/usopp.png',
            price: '0.8亿',
            method: 'DEAD OR ALIVE'
          },
          {
            name: 'Chopper',
            url: 'static/img/chopper.png',
            price: '5',
            method: 'DEAD OR ALIVE'
          },
          {
            name: 'Robin',
            url: 'static/img/robin.png',
            price: '1.0亿',
            method: 'DEAD OR ALIVE'
          },
          {
            name: 'Frank',
            url: 'static/img/frank.png',
            price: '1.6亿',
            method: 'DEAD OR ALIVE'
          },
          {
            name: 'Brook',
            url: 'static/img/brook.png',
            price: '0.8亿',
            method: 'DEAD OR ALIVE'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
	@import '../assets/css/appContentWanted.scss';
</style>
