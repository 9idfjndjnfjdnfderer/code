<?php  

namespace App\Custom;

class Validation
{

	public static function alphanumeric($field)
	{
		$pattern = '/^[a-záéíóúÁÉÍÓÚñ\s0-9]+$/i';

		if(preg_match($pattern, $field))
			return true;
		else
			return false;
	}

	public static function description($field)
	{
		$pattern = '/[<>]/'; 

		if(!preg_match($pattern, $field))
			return true;
		else
			return false;
	}

	public static function integer($field)
	{
		if(intval($field) || (int)$field == 0)
			return true;
		else
			return false;
	}

	public static function decimal($field)
	{
		if(floatval($field) || (int)$field == 0)
			return true;
		else
			return false;
	}

	public static function onlyLetters($field)
	{
		$pattern = '/^[a-záéíóúñ\s]+$/i';

		if(preg_match($pattern, $field))
			return true;
		else
			return false;
	}

	public static function email($field)
	{
		$pattern = '/^[A-z0-9\\._-]+@[A-z0-9][A-z0-9-]*(\\.[A-z0-9_-]+)*\\.([A-z]{2,6})$/';

		if(preg_match($pattern, $field))
			return true;
		else
			return false;
	}

	public static function phone($field)
	{
		$pattern = '/^[0-9]{10}$/';

		if(preg_match($pattern, $field))
			return true;
		else
			return false;
	}

	public static function password($field)
	{
		$amountChar = (strlen($field) >= 8 && strlen($field) <= 20);

		if($amountChar)
			return true;
		else
			return false;
	}

	public static function hour($field)
	{
		$pattern = '/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/';

		if(preg_match($pattern, $field))
			return true;
		else
			return false;
	}

	public static function date($field)
	{
		$pattern = '/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/';

		if(preg_match($pattern, $field))
			return true;
		else
			return false;
	}

}


?>	