<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUserInfo()
    {
        $user = Auth::user();
        $data['userInfo'] = $user;
        return $this->successReturn($data);
    }


    public function getMessageList()
    {
        $user = Auth::user();
        $data = [];
        return $this->successReturn($data);
    }
}
