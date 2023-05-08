<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TrainingProgramController;
use App\Http\Controllers\NotificationController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('resend-email', [UserController::class, 'resendEmail'])->name('resend-email');
Route::post('login', [UserController::class, 'login'])->name('login');
Route::post('forgot-password', [UserController::class, 'forgotPassword'])->name('forgot-password');
Route::post('change-password-auth', [UserController::class, 'changePasswordAuth'])->name('forgot-password-auth');
Route::post('change-password', [UserController::class, 'changePassword'])->name('change-password');
Route::post('get-user', [UserController::class, 'getUser'])->name('get-user');


Route::post('employee-create', [EmployeeController::class, 'create'])->name('employee-create');
Route::get('employee-get', [EmployeeController::class, 'get'])->name('employee-get');
Route::get('employee-destroy', [EmployeeController::class, 'destroy'])->name('employee-destroy');


Route::get('setting-get', [SettingController::class, 'get'])->name('setting-get');
Route::post('setting-update-whatsapp-group', [SettingController::class, 'updateWhatsAppGroup'])->name('setting-update-whatsapp-group');
Route::post('setting-update-video-presentation', [SettingController::class, 'updateVideoPresentation'])->name('setting-update-video-presentation');
Route::post('setting-update-coupons', [SettingController::class, 'updateCoupons'])->name('setting-update-coupons');


Route::get('training-get', [TrainingProgramController::class, 'get'])->name('training-get');
Route::post('training-create-section', [TrainingProgramController::class, 'createSection'])->name('training-create-section');
Route::get('training-destroy-section', [TrainingProgramController::class, 'destroySection'])->name('training-destroy-section');
Route::get('training-get-section', [TrainingProgramController::class, 'getSection'])->name('training-get-section');
Route::post('training-update-section', [TrainingProgramController::class, 'updateSection'])->name('training-update-section');
Route::post('training-upload-video', [TrainingProgramController::class, 'uploadVideo'])->name('training-upload-video');
Route::post('training-create-chapter', [TrainingProgramController::class, 'createChapter'])->name('training-create-chapter');
Route::get('training-get-chapter', [TrainingProgramController::class, 'getChapter'])->name('training-get-chapter');
Route::post('training-update-chapter', [TrainingProgramController::class, 'updateChapter'])->name('training-update-chapter');
Route::get('training-destroy-chapter', [TrainingProgramController::class, 'destroyChapter'])->name('training-destroy-chapter');


Route::post('notification-register', [NotificationController::class, 'notifyRegister'])->name('notification-register');