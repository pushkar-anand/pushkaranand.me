<?php
require_once __DIR__.'/../vendor/autoload.php';

$home_view = __DIR__.'/../views/home.html';
$contact_mail = __DIR__.'/../php_scripts/contact-mail.php';

$route = new \EasyRoute\Route();

try{

    $route->addMatch('GET', '/', $home_view);
    $route->addMatch('POST', "/contact", $contact_mail);

    $route->execute();

}catch (Exception $exception)
{
    error_log("Exception: $exception");
}