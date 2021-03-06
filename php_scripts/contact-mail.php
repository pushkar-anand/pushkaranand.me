<?php
require_once __DIR__ . '/../vendor/autoload.php';

use EasyMail\Mail;
use PhpUseful\EasyHeaders;
use PhpUseful\Functions;

$resp = null;
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
    $name = Functions::escapeInput($_POST['name']);
    $email = Functions::escapeInput($_POST['email']);
    $subject = Functions::escapeInput($_POST['subject']);
    $msg = Functions::escapeInput($_POST['message']);

    try {

        $mail = new Mail('anandpushkar088@gmail.com');
        $mail->addReplyTo($email, $name);
        $mail->setFrom('no-reply@pushkaranand.me', "My Website");
        $mail->isHtml(false);
        $mail->setPriority(1);
        $mail->setSubject($subject);
        $mail->setMsg($msg);

        if ($mail->sendMail()) {
            $resp = array("code" => 200, "title" => "Mail sent", "msg" => "Mail was sent. Expect a response in 3hrs.");
        } else {
            $resp = array("code" => 500, "title" => "Mail not sent", "msg" => "Their was a error sending the mail.");
        }

    } catch (Exception $exception) {
        error_log($exception);
        $resp = array("code" => 200, "title" => "Error", "msg" => $exception);
    }

} else {
    $resp = array("code" => 500, "title" => "Mail not sent", "msg" => "Fill in all fields.");
}

EasyHeaders::json_header();
$resp = json_encode($resp);
error_log('Response: ', $resp);
echo $resp;