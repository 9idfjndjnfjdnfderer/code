<template>
	<div id="auth">

		<div class="container">
			
			<router-view></router-view>

		</div>
		
	</div>
</template>


<style>

	body {
		background: #f1f1f1;
	}

	#auth label, #auth p {
		font-size: 13px;
		font-weight: bold;
	}

	#auth-logo {
		width: 150px;
	}

	@media(max-width: 375px) {

		#auth-logo {
			width: 100px;
		}

	}

</style>


<script>

	export default
	{

		mounted() {
			document.body.style = `background: #f1f1f1`;
		},

		destroyed() {
			document.body.style = 'background: inherit'
		}

	}

</script>