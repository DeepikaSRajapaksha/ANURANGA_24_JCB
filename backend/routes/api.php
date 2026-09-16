<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/test', function () {
    return response()->json(['message' => 'API Working!']);
});

Route::get('/users', [UserController::class, 'index']);
