<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\WebInterfaceController;

//Route::get('/', function () {
//    return view('welcome');
//});
Route::get('/', [WebInterfaceController::class, 'MainFace']);
