<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['telefon'])) {$telefon = $_POST['telefon'];}
    if (isset($_POST['message'])) {$message = $_POST['message'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    

    $to = "ramzez1@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "feedback@yandex.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData,$province";
    $message = "<h1>$formData</h1><br><b>Имя:</b> $name <br><b>Телефон:</b> $telefon<br><b>Сообщение:</b> $message<br>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success">Ваше сообщение отправлено!</p></center>';
    }
    else 
    {
    echo '<center><p class="fail"><b>Error</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>

