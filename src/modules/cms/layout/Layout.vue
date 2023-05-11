<template>
	
	<div id="wrapper">


		<!-- logo and type user mode responsive -->
		<div class="text-center" id="cms-header-resp">
			<div class="row">
				<div class="offset-sm-5 col-sm-2 offset-4 col-4">
					<router-link to="/cms/">
						<img src="@/assets/img/logo.webp" class="w-100" id="cms-logo-resp">
					</router-link>
				</div>
			</div>
			<span class="text-light" v-if="user.rol == 'a'">Administrator</span>
	    <span class="text-light" v-if="user.rol == 'e'">Driver</span>
		</div>


		<!-- nav top -->
		<nav class="navbar navbar-default top-navbar" role="navigation" id="cms-nav-top">
			

			<ul class="nav">
				<li class="nav-item" id="cms-typeuser">
	        <router-link class="nav-link" to="/cms/">
	          <i class="fa-solid fa-circle-user fa-fw me-1"></i>
	          <span class="text-light" v-if="user.rol == 'a'">Administrator</span>
	          <span class="text-light" v-else>Driver</span>
	        </router-link>
	      </li>
			</ul>

			
			<ul class="nav">

				<li class="nav-item me-sm-4 me-2">
	        <button class="btn btn-black text-light" id="cms-btn-expand-menu" @click="expandMenu()"><i class="fas fa-bars"></i></button>
	      </li>

				<li class="nav-item me-sm-4 me-2" v-if="user.rol == 'a'">
	        <router-link class="nav-link" to="/cms/">
	          <i class="fa fa-video fa-fw me-1"></i>
	          <span class="text-light cms-nav-link-text">Training Program</span>
	        </router-link>
	      </li>

				<li class="nav-item me-sm-4 me-2" v-if="user.rol == 'a'">
	        <router-link class="nav-link" to="/cms/drivers/">
	          <i class="fas fa-users fa-fw me-1"></i>
	          <span class="text-light cms-nav-link-text">Drivers</span>
	        </router-link>
	      </li>

	      <li class="nav-item me-sm-4 me-2" v-if="user.rol == 'a'">
	        <router-link class="nav-link" to="/cms/setting/">
	          <i class="fa fa-gears fa-fw me-1"></i>
	          <span class="text-light cms-nav-link-text">Setting</span>
	        </router-link>
	      </li>	

	      <li class="nav-item me-sm-4 me-2" v-if="user.rol == 'e'">
	        <a class="nav-link" target="_blank" href="https://api.whatsapp.com/send?phone=16475102259&text=Necesito%20Informacion">
	          <i class="fa fa-whatsapp fa-fw me-1"></i>
	          <span class="text-light cms-nav-link-text">Contact</span>
	        </a>
	      </li>	

	      <li class="nav-item me-lg-4">
	        <a class="nav-link" :href="domain" @click="logout()">
	          <i class="fa fa-power-off fa-fw me-1"></i>
	          <span class="text-light cms-nav-link-text">Log out</span>
	        </a>
	      </li>	

			</ul>


			<ul class="nav d-none" id="cms-adjust-menuresp"></ul>
			

		</nav>
		<!--/ nav top  -->



		<!-- content -->
		<div id="cms-menu-content">


			<!-- sidebar -->
			<nav class="navbar-default navbar-side" role="navigation" id="cms-sidebar">
				<ul class="nav flex-column" id="cms-sidebar-menu">

					<li class="nav-item text-center pb-4" id="cms-logo-content">
						<router-link to="/cms/">
							<img src="@/assets/img/logo.webp" id="cms-logo">
						</router-link>
					</li>

					<slot name="sidebar"></slot>
				
				</ul>
			</nav>

			
			<!-- main content -->			
			<div id="page-wrapper">
				<div class="pt-4 ps-5 pe-5" id="page-inner">


					<!-- main -->
					<main>
						<h3 class="page-header text-blue" id="cms-content-title">
							<slot name="title"></slot>
						</h3>

						<div class="panel panel-default" id="panel-main">
							<div class="panel-heading" id="cms-content-subtitle">
								<h5 class="text-blue"><slot name="subtitle"></slot></h5>
							</div>
							<div class="panel-body" id="cms-panel-body">
							  
							  <div id="cms-main">
							  	<slot name="main"></slot>
							  </div>
							  
							</div>
						</div>
					</main>
					


					<!-- footer -->
					<footer class="mt-5 mb-4 text-secondary" id="cms-footer"><p>&copy; MOTO-YA 2023</p></footer>

				</div>
			</div>


		</div>
	</div>

</template>


<style src="./style.css"></style>


<script>

	import UserService from '@/shared/services/UserService'

	export default
	{

		data() { 
			return {
				user: {
					email: null,
					rol: null
				}
			}
		},

		created() {
			this.getUser()
		},


		mounted() {
			setTimeout(()=> {
				this.checkedClicItemMenu()
			}, 1000)
		},


		methods: {

			logout()
			{
				localStorage.removeItem('token')
				this.$router.push('/')
			},
			

			expandMenu()
			{
			  if(!$('#cms-sidebar').hasClass('active'))
			  {
			    $('#cms-sidebar').show(100).addClass('active')
			  }
			  else
			  {
			    $('#cms-sidebar').hide(100).removeClass('active')
			  }
			},

			checkedClicItemMenu()
			{
			  $('#cms-sidebar .sid-link').click(()=>
			  {
			    if($('#cms-sidebar').hasClass('active'))
			    	$('#cms-sidebar').hide().removeClass('active')
			  })
			},

			async getUser()
			{
				const resp = await UserService.getUser()
				this.user.email = resp.data.email
				this.user.rol = resp.data.rol
			}

		}

	}

</script>