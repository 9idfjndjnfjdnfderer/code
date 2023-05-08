<?php


namespace App\Http\Controllers;

use App\Models\TrainingSection;
use App\Models\TrainingChapter;
use DB;
use Illuminate\Http\Request;

use App\Custom\Validation;


class TrainingProgramController extends Controller
{

	public function get(Request $request)
	{
		$sections = TrainingSection::get();

		$i = 0;
		foreach($sections as $sec)
		{
			$chapters = TrainingChapter::where('training_section_id', $sec->id)->get();
			$sections[$i]['chapters'] = $chapters;
			++$i;
		}
		
	  return json_encode($sections);
	}


	public function createSection(Request $request)
	{
		$valid = Validation::description($request->title);

		if(!$valid)
			return;


		$section = new TrainingSection();
		$section->title = $request->title;
		$section->save();

		$resp = 'OK';
		
	  return json_encode($resp);
	}


	public function destroySection(Request $request)
	{
		$id = $request->id;
		$section = TrainingSection::find($id);


		// delete chapters
		$chapters = TrainingChapter::where('training_section_id', $id)->get();
		foreach($chapters as $chapter)
		{
			if(!empty($chapter->video))
			{
				if(is_file($chapter->video))
					unlink($chapter->video);
			}

			$chapter->delete();
		}


		// delete section
		$section->delete();


		$resp = 'OK';
	  return json_encode($resp);
	}


	public function getSection(Request $request)
	{
		$id = $request->id;
		$section = TrainingSection::find($id);
	  return json_encode($section);
	}


	public function updateSection(Request $request)
	{
		$valid = Validation::description($request->title);

		if(!$valid)
			return;


		$section = TrainingSection::find($request->id);
		$section->title = $request->title;
		$section->update();

		$resp = 'OK';
		
	  return json_encode($resp);
	}


	public function uploadVideo(Request $request)
	{
		$video = $request->file('video');
		$ext = $video->guessExtension();

		if($ext == 'mp4')
		{
			$name = time().'.'.$ext;
			$path = 'video/uploads/';

			$request->file('video')->move($path, $name);
			chmod($path.$name, 775);

			$resp = $path.$name;
		}
		else
			$resp = 'EXT_INVALIDA';


	  return json_encode($resp);
	}


	public function createChapter(Request $request)
	{
		$valid = Validation::description($request->title);

		if(!$valid)
			return;


		$chapter = new TrainingChapter();
		$chapter->title = $request->title;
		$chapter->video = $request->video;
		$chapter->content = $request->content;
		$chapter->training_section_id = $request->training_section_id;
		$chapter->show_link_whatsapp = $request->show_link_whatsapp;
		$chapter->save();


		$resp = 'OK';		
	  return json_encode($resp);
	}


	public function getChapter(Request $request)
	{
		$chapter = TrainingChapter::find($request->id);
	  return json_encode($chapter);
	}


	public function updateChapter(Request $request)
	{
		$valid = Validation::description($request->title);

		if(!$valid)
			return;


		$chapter = TrainingChapter::find($request->id);
		$chapter->title = $request->title;
		$chapter->video = $request->video;
		$chapter->content = $request->content;
		$chapter->show_link_whatsapp = $request->show_link_whatsapp;
		$chapter->update();


		$resp = 'OK';		
	  return json_encode($resp);
	}


	public function destroyChapter(Request $request)
	{
		$id = $request->id;
		$chapter = TrainingChapter::find($id);


		if(!empty($chapter->video))
		{
			if(is_file($chapter->video))
				unlink($chapter->video);
		}

		$chapter->delete();


		$resp = 'OK';
	  return json_encode($resp);
	}

}
