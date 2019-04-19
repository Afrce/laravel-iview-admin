<?php

namespace App\Http\Controllers\Login;

use App\Http\Requests\LoginRequest;
use http\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class LoginController extends Controller
{
    public function Login(LoginRequest $request)
    {
        $data = [
            'username' => $request->username,
            'password' => $request->password,
            'scope' => "*",
            'client_id' => config('passport.client_id'),
            'client_secret' => config('passport.client_secret')
        ];
        $http = new \GuzzleHttp\Client();
        $result = null;
        $data['grant_type'] = 'password';

        request()->request->replace($data);

        $proxy = Request::create(
            'api/oauth/token',
            'POST'
        );
        $result = json_decode(Route::dispatch($proxy)->content(), true);
        if (isset($result['error'])){
            switch ($result['message']) {
                case 'The user credentials were incorrect.':
                    $resultData = '用户名或密码错误！';
                    break;
                default:
                    $resultData = '未知错误，请联系管理员！';
                    break;
            }
            return ['success' => false, 'message' => $resultData];
        }
        return [
            'success' => true,
            'message' => '获取成功',
            'data' => [
                'token' => $result['access_token']
            ]
        ];
    }

    public function test(Request $request){
        $user = Auth::user();
        dd($user);
    }
}
