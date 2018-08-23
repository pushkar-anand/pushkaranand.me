<?php
require_once __DIR__.'/../vendor/autoload.php';

$home_view = __DIR__.'/../views/home.html';

$route = new \EasyRoute\Route();

try{
    $route->addMatch('GET', '/', $home_view);

    $route->execute();

}catch (Exception $exception)
{
    error_log("Exception: $exception");
}