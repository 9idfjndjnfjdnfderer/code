<?php


namespace App\Http\Controllers;

use App\Models\User;

use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\Account;
use App\Mail\RecoverPassword;

use App\Custom\Validation;


class UserController extends Controller
{

	public function login(Request $request)
	{
		$valid = Validation::email($request->email);
		$valid = Validation::password($request->password);

		if(!$valid)
			return;


		$user = User::where('email', $request->email)->first();
		$mesg = null;
		$token = null;
		$rol = null;

		$penalty_time = 0;
		$failed_attempts = 0; 


		if($user) // email ok
		{
			if($user->penalty_time <= time()) // no time penalty
			{
				if(password_verify($request->password, $user->password)) // valid key
				{
					// reset failed attempts
					$user->failed_attempts = $failed_attempts;
					$user->penalty_time = $penalty_time;
					$user->save();


					if($user->status == 'a') // if the account is active
					{
						$rol = $user->rol;
						$token = $this->generateToken($user);
						$mesg = 'OK';
					}
					else 
					{
						$mesg = 'ACCOUNT_INACTIVE';
					}
				}

				else // penalize failed attempt
				{
					$failed_attempts = $user->failed_attempts + 1;

					if($failed_attempts == 5)
					{
						$mesg = 'PENALIZE';
						$failed_attempts = 0;
						$penalty_time = time()+30;
					}

					$user->penalty_time = $penalty_time;
					$user->failed_attempts = $failed_attempts;
					$user->save();
				}
			}
			else // notify penalty
			{
				$mesg = 'PENALIZE';
				$penalty_time = $user->penalty_time;
			}
		}

	  
	  $resp = ['mesg' => $mesg, 
	  				'token' => $token, 
	  				'rol' => $rol, 
	  				'penalty_time' => $penalty_time-time()];

	  return json_encode($resp);
	}


	public function resendEmail(Request $request)
	{
		$password = bin2hex(random_bytes(6));

		$user = User::where('email', $request->email)->first();
		$user->password = password_hash($password, PASSWORD_DEFAULT, [2]);
		$user->update();

		
		// send user and password
		Mail::to($request->email)->send(new Account($request->email, $password));


		$resp = 'OK';

	  return json_encode($resp);
	}


	public function forgotPassword(Request $request)
	{
		$valid = Validation::email($request->email);

		if(!$valid)
			return;


		$user = User::where('email', $request->email)->first();

		if($user)
		{
			$token = str_replace('/', '.', password_hash($request->email, PASSWORD_DEFAULT, [2]));
			$user->token = $token;
			$user->update();


			// send link forgot 
			$link_forgot = env('APP_URL').'auth/change-password/'.$request->email.'/'.$token;
			Mail::to($request->email)->send(new RecoverPassword($link_forgot));


			$resp = 'OK';
		}
		else
			$resp = 'EMAIL_NOEXIST';

	  return json_encode($resp);
	}


	public function changePasswordAuth(Request $request)
	{
		$valid = Validation::email($request->email);
		$valid = Validation::password($request->password);
		$valid = $request->password == $request->password_confirm;

		if(!$valid)
			return;


		$user = User::where('email', $request->email)->where('token', $request->token)->first();

		if($user)
		{
			$user->password = password_hash($request->password, PASSWORD_DEFAULT, [2]);
			$user->update();

			$resp = 'OK';
		}
		else
			$resp = 'ERROR';

	  return json_encode($resp);
	}


	public function changePassword(Request $request)
	{
		$valid = Validation::password($request->new_password);
		$valid = ($request->new_password == $request->confirm_password);

		if(!$valid)
			return;


		$payload = $this->decryptToken($request->token);

		$user = User::find($payload->id);
		$password = password_hash($request->new_password, PASSWORD_DEFAULT, [2]);
		$user->password = $password;
		$user->update();

		$resp = 'OK';
	  return json_encode($resp);
	}


	private function generateToken($user)
	{
		$key = 'sys$%653f';
		
		$header = array('typ' => 'JWT', 'alg' => 'HS256');
		$header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($header)));


		$payload = array(
	    'iat' => time(),
	    'exp' => time() + (60*60*24), // One day
	    'data' => [ 
	      'id' => $user->id
	    ]
		);
		$payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));


		$signature = hash_hmac('sha256', $header.'.'.$payload, $key, true); 
		$signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
		

		$token = $header.'.'.$payload.'.'.$signature;

		return $token;
	}


	private function decryptToken($token)
	{
		$key = 'sys$%653f';

		$token = explode('.', $token);


		$sigReceived = base64_decode(str_replace(['-', '_', ''], ['+', '/', '='], $token[2]));
		$sigVerify = hash_hmac('sha256', $token[0].'.'.$token[1], $key, true);

		$user = null;
		if($sigReceived == $sigVerify)
		{
			$payload = json_decode(base64_decode(str_replace(['-', '_', ''], ['+', '/', '='], $token[1])));

			// check token expiration
			// if($payload->exp > time())
			// 	$user = $payload->data; 

			$user = $payload->data; 
		}

		return $user;
	}


	public function getUser(Request $request)
	{
		$data = $this->decryptToken($request->token);
		
		$user = null;
		if($data != null)
			$user = User::find($data->id);

		return json_encode($user);
	}

}
