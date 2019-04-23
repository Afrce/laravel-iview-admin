<?php

namespace App\Http\Controllers\User;

use App\Model\Notification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUserInfo()
    {
        $user = Auth::user();
        $data['userInfo'] = $user;
        $data['userInfo']['unreadMsg'] = count($user->notifications);
        return $this->successReturn($data);
    }
    public function getMessageList()
    {
        $user = Auth::user();
        $msg = [
            'unread' => [],
            'readed' => [],
            'deleted' => [],
        ];
        Notification::query()
            ->where('notifiable_id',$user->id)
            ->withTrashed()
            ->orderBy("created_at","DESC")
            ->get()
            ->map(function ($item)use(&$msg){
                $data = [];
                if($item->read_at == null){
                    $data['id'] = $item->id;
                    $data['created_at'] = $item->created_at;
                    $data['msg'] = json_decode($item->data,true);
                    $msg['unread'][] = $data;
                } else if ($item->deleted_at == null){
                    $data['id'] = $item->id;
                    $data['created_at'] = $item->created_at;
                    $data['msg'] = json_decode($item->data,true);
                    $msg['readed'][] = $data;
                } else {
                    $data['id'] = $item->id;
                    $data['created_at'] = $item->created_at;
                    $data['msg'] = json_decode($item->data,true);
                    $msg['deleted'][] = $data;
                }
                unset($data);
            });
        return $this->successReturn($msg);
    }

    public function readMsg(Request $request){
        $id = $request->id;
        $user = Auth::user();
        $user->unreadNotifications->where('id', $id)->markAsRead();
        $data = [];
        return $this->successReturn($data);
    }

    public function deleteMsg(Request $request){
        $id = $request->id;
        $user = Auth::user();
        Notification::query()
            ->where('id',$id)
            ->where('notifiable_id',$user->id)
            ->delete();
        $data = [];
        return $this->successReturn($data);
    }
}
