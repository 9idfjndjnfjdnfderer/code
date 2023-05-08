<!DOCTYPE html>
<html lang="es">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Notification</title>

    <!-- bootstrap 5.1.3 css --> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>

    	#message {
    		width: 60%;
    		margin: auto;
    		margin-top: 50px;
    		margin-bottom: 50px;
    		background: #f9f9f9;
    		border-radius: 10px;
    		padding-top: 20px;
    		padding-bottom: 20px;
    		padding-left: 10px;
    		padding-right: 10px;
    	}

    	#logo {
    		width: 150px;
    	}

    	@media(max-width: 1024px) {
    		#message {
    			width: 95%;
    			padding: 10px;
    		}
    	}

    </style>

  </head>

  <body>
    
  	<div id="message-content">
  		
	    <div class="card mt-5" id="message">
	    	<div class="card-body">
	    		
			  	<div style="text-align:center;">
			  		<img src="{{ env('SERVER_URL') }}img/logo.png" id="logo">
			  	</div>

			  	<h3 style="margin-top: 10px;text-align: center;">Notification!</h3>
			  	
			  	<p><b>{{$full_name}} has registered.</b></p>

					<p>
						MOTO-YA.
					</p>

	    	</div>
	    </div>

  	</div>

  </body>

</html>