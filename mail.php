<?php
    use PHPMailer\PHPMailer\PHPMailer;
//     use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;

//     $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    $mail->setFrom('sezko.yana@gmail.com', 'Yana');
    $mail->addAddress('sezko.dev@gmail.com', 'Яна');
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//     $mail->Port       = 465;
    $mail->Subject = 'Привет! Это твоё первое сообщение';
    $body = '<h1>First Message</h1>';
    $body.='<p>Имя:'.$_POST['name'].'</p>';
    $body.='<p>E-mail:'.$_POST['email'].'</p>';
    $body.='<p>Message:'.$_POST['text'].'</p>';

    $mail->Body = $body;

    if (!$mail->Send()) {
        $message = 'Error';
    } else {
        $message = 'Данные отправлены!';
    }
    $response = ['Message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>