<template>
	<div id="home">
		
		<Header />

		<main>
			<router-view/>
		</main>

		<Footer />

	</div>
</template>


<style>
	
	#home {
		background: url('~@/assets/img/fondo.webp') repeat;
	}

</style>


<script>
	
	import Header from './components/Header'
	import Footer from './components/Footer'

	export default
	{

		components: {
			Header,
			Footer
		}

	}

</script>