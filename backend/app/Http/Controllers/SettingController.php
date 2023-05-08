<?php


namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Setting;
use DB;
use Illuminate\Http\Request;

use App\Custom\Validation;


class SettingController extends Controller
{

	public function get(Request $request)
	{
		$setting = Setting::find(1);
		
	  return json_encode($setting);
	}


	public function updateWhatsAppGroup(Request $request)
	{
		$valid = Validation::description($request->link_whatsapp_group);

		if(!$valid)
			return;


		$setting = Setting::find(1);
		$setting->link_whatsapp_group = $request->link_whatsapp_group;
		$setting->update();

		
		$resp = 'OK';
	  return json_encode($resp);
	}


	public function updateVideoPresentation(Request $request)
	{
		$video = $request->file('video');
		$ext = $video->guessExtension();

		if($ext == 'mp4')
		{
			$name = time().'.'.$ext;
			$path = 'video/uploads/';

			$request->file('video')->move($path, $name);
			chmod($path.$name, 775);

			$setting = Setting::find(1);
			$setting->video_presentation = $path.$name;
			$setting->update();

			$resp = $path.$name;
		}
		else
			$resp = 'EXT_INVALIDA';


	  return json_encode($resp);
	}


	public function updateCoupons(Request $request)
	{
		$valid = Validation::integer($request->drivers_coupons);

		if(!$valid)
			return;


		$setting = Setting::find(1);
		$setting->drivers_coupons = $request->drivers_coupons;
		$setting->update();

		
		$resp = 'OK';
	  return json_encode($resp);
	}

}
