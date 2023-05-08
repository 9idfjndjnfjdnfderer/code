<?php


namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Employee;
use App\Models\Setting;
use DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

use App\Mail\Account;

use App\Custom\Validation;


class EmployeeController extends Controller
{

	public function create(Request $request)
	{
		$valid = !empty($request->city);
		$valid = Validation::onlyLetters($request->full_name);
		$valid = Validation::email($request->email);
		$valid = $request->email == $request->confirm_email;
		$valid = Validation::phone($request->phone);

		if(!$valid)
			return;


		// verify if email exists
		$verifyEmail = User::where('email', $request->email)->first();

		if(!$verifyEmail) // email no exists
		{
			// create user
			$user = new User();
			$token = str_replace('/', '.', password_hash($request->email, PASSWORD_DEFAULT, [2]));
			$password = bin2hex(random_bytes(6));
			$user->email = $request->email;
			$user->password = password_hash($password, PASSWORD_DEFAULT, [2]);
			$user->token = $token;
			$user->save();


			// get users_id
			$user = User::select('id')->orderBy('id', 'desc')->limit(1)->first();
			$user_id = $user->id;


			// create employee
			$employee = new Employee();
			$employee->city = $request->city;
			$employee->full_name = $request->full_name;
			$employee->phone = $request->phone;
			$employee->user_id = $user_id;
			$employee->save();


			// decrease coupons
			$setting = Setting::find(1);
			$setting->drivers_coupons = $setting->drivers_coupons - 1;
			$setting->update();


			// send user and password
			Mail::to($request->email)->send(new Account($request->email, $password));


			$resp = 'OK';
		}
		else // email exists
		{	
			$resp = 'EMAIL_EXISTS';
		}

		
	  return json_encode($resp);
	}


	public function get()
	{
		$data = Employee::with('user')->get();
		return json_encode($data);
	}


	public function destroy(Request $request)
	{
		$id = $request->id;

		$employee = Employee::find($id);
		$user = User::find($employee->user_id);

		$employee->delete();
		$user->delete();

		$resp = 'OK';
	  return json_encode($resp);
	}


}
