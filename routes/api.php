<?php

use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use Carbon\Carbon;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/login","Login\LoginController@login");
Route::post('/test',"Login\LoginController@test")->middleware('auth:api');
