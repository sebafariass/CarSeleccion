<template>
	<div id="app">
		<div id="Nav-bar">
			<router-link to="/">Inicio</router-link> |
			<router-link :to="{ name: 'History' }">Historia</router-link> |
			<router-link :to="{ name: 'Contacto' }">Contactanos</router-link> |
			<router-link :to="{ name: 'Probando' }">Datos de vehiculos</router-link> |
			<router-link to="/post/1">Última Pagina</router-link> |
		</div>
		<router-view />
	</div>
</template>


<style lang="scss">
#app {
   font-family: 'Epilogue', sans-serif;
	text-align: center;
	color: #2c3e50;
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

#Nav-bar {
  background-color: black;
	padding: 30px;
	text-align: right;

	a {
		font-weight: bold;
		color:white;

		
	}
}
</style>
