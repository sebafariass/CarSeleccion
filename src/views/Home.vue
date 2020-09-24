<template>
	<div>
		<header>
			<div class="banner"> </div>
		</header>
		<section class="looking">
			<div class="container">
				<h3>¿Que auto compro?</h3>
				<p>
					¿Te gustaría tener ese modelito de auto que tanto has visto? <br />
					Pon atención a este artículo, puesto que al momento <br />
					de comprar un auto usado, hay varias cosas que debes saber, además de <br />
					realizar algunos trámites. En el blog de <br />
					LegalChile te lo contamos. <br />
					Foto: La Tercera
				</p>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
					Possimus provident iste repudiandae numquam accusamus <br />
					laborum ratione doloribus quibusdam? Asperiores possimus <br />
					aspernatur modi aut voluptatum. Odit illum quidem corrupti <br />
					aliquid ullam?
				</p>
			</div>
				<div class="card" style="width: 18rem;">
				<strong><p>¿ENCUENTRAS EL INDICADO?</p></strong>
				<div class="card-body">
					<h5 class="card-title">¿Quieres comprar un vehículo?</h5>
					<p class="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea culpa fugit ipsam corporis
						suscipit commodi itaque, doloribus necessitatibus...
					</p>
					<a
						href="https://www.primeauxmitsubishi.com/"
						
						>Loockea Ofertas!</a
					>
				</div>
			</div>
		</section>

		<footer>
<div class="Footer">
		<div>
          <h6>Talcahuano</h6>
		  <p class="text-muted copyright">copyrightv.8!</p>
		</div>
			</div>
</footer>
	</div>
</template>

<script>
export default {
	name: 'Home',
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	
}
p, h6 {
	font-size: 20px;
	margin-top: 15px;
}
.banner {
	background-image: url('https://velvet-mag.lat/wp-content/uploads/2019/05/blade-3d-printed-hypercarweb.jpeg');
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 300px;
}

.looking {
	display: flex;
	justify-content: space-between;
	padding: 5%;
	vertical-align: middle;
	align-content: center;
}
footer {
	background-color: rgb(131, 84, 84);
    height: 100px;
}
</style>
