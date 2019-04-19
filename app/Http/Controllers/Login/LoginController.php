<?php

namespace App\Http\Controllers\Login;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class LoginController extends Controller
{
    /**
     * 用户登录
     * @param LoginRequest $request
     * @return array
     */
    public function Login(LoginRequest $request)
    {
        $data = [
            'username' => $request->username,
            'password' => $request->password,
            'scope' => "*",
            'client_id' => config('passport.client_id'),
            'client_secret' => config('passport.client_secret')
        ];
        $data['grant_type'] = 'password';

        request()->request->replace($data);

        $proxy = Request::create(
            'api/oauth/token',
            'POST'
        );
        $result = json_decode(Route::dispatch($proxy)->content(), true);
        $res = $this->checkResult($result);
        return $res;
    }

    public function logout(Request $request){
        if(Auth::guard('api')->check()){
            Auth::guard('api')->user()->token()->delete();
        }
        return [
            'success' => true,
            'message' => '退出成功'
        ];
    }

    public function refreshToken(Request $request){
        $data = [
            'client_id' => config('passport.client_id'),
            'client_secret' => config('passport.client_secret'),
            'grant_type'    => "refresh_token",
            "refresh_token" => $request->refresh_token
        ];
        request()->request->add($data);
        $proxy = Request::create(
            'api/oauth/token',
            'POST'
        );
        $result = json_decode(Route::dispatch($proxy)->content(), true);
        $res = $this->checkResult($result);
        return $res;
    }

    public function checkResult(Array $result){
        if (isset($result['error'])){
            switch ($result['message']) {
                case 'The user credentials were incorrect.':
                    $resultData = '用户名或密码错误！';
                    break;
                default:
                    $resultData = '未知错误，请联系管理员！';
                    break;
            }
            return ['status' => false, 'message' => $resultData];
        }
        return [
            'status' => true,
            'message' => '获取成功',
            'data' => [
                'token' => $result['access_token'],
                'refresh_token' => $result['refresh_token']
            ]
        ];
    }

    public function test(Request $request){
        $user = Auth::user();
        dd($user);
    }
}
