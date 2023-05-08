<template>
	<div>
		
		<Presentation />
		<Testimonial />
		<Info />

	</div>
</template>


<script>
	
	import Presentation from './components/Presentation'
	import Testimonial from './components/Testimonial'
	import Info from './components/Info'

	export default
	{

		components: {
			Presentation,
			Testimonial,
			Info
		}

	}

</script>