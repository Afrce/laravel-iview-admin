<?php
return [
    // token 作用域
    'scopes' => [],
    //tokensExpireIn 过期时间
    "tokensExpireIn" => 1,

    "refreshTokensExpireIn" => 1,

    "client_id" => env("CLIENT_ID"),
    "client_secret" => env("CLIENT_SECRET")
];