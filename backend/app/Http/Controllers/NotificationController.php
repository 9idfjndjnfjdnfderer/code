<?php


namespace App\Http\Controllers;

use DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

use App\Mail\Notification;


class NotificationController extends Controller
{

	public function notifyRegister(Request $request)
	{
		Mail::to('easymotoyatrainingprogram@gmail.com')->send(new Notification($request->full_name));

		$resp = 'OK';
	  return json_encode($resp);
	}


}
