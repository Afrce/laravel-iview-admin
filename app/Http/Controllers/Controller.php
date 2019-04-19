<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function successReturn($data){
        return [
            'status' => true,
            'data'   => $data
        ];
    }

    public function failReturn($message, $data = []){
        return [
            'status' => false,
            'message' => $message,
            'data'    => $data
        ];
    }
}
