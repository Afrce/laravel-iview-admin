<?php

use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
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
Passport::routes();
// 定义令牌作用域
Passport::tokensCan(config('passport.scopes'));
// 访问令牌有效期（天）
Passport::tokensExpireIn(Carbon::now()->addDays(config('passport.tokensExpireIn')));
// 刷新后的访问令牌有效期（天）
Passport::refreshTokensExpireIn(Carbon::now()->addDays(config('passport.refreshTokensExpireIn')));

Route::namespace("Login")->group(function (){
    Route::post("/login","LoginController@login");
    Route::post("/logout","LoginController@logout")->middleware("auth:api");
    Route::post("/refresh_token","LoginController@refreshToken")->middleware("auth:api");
    Route::post('/test',"LoginController@test")->middleware('auth:api');
});
