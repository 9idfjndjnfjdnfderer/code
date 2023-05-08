function SwalAlert(title, text, icon)
{
	Swal.fire(
	  title,
	  text,
	  icon
	)
}


function SwalQuestion(title, text, func)
{
	Swal.fire({
		title: title,
		text: text,
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: "Yes",
		cancelButtonText: "Cancel",
	}).then(func)
}


function SwalMixin(title, icon)
{
	const Toast = Swal.mixin({
	  toast: true,
	  position: 'top-end',
	  showConfirmButton: false,
	  timer: 1500,
	  timerProgressBar: true,
	  didOpen: (toast) => {
	    toast.addEventListener('mouseenter', Swal.stopTimer)
	    toast.addEventListener('mouseleave', Swal.resumeTimer)
	  }
	})

	Toast.fire({
	  icon: icon,
	  title: title
	})
}