<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $choice = $_POST['choice'];
    $data = $_POST['data'];
    $number = $_POST['number'];
    $choice1 = $_POST['choice1'];
    $choice2 = $_POST['choice2'];

    $content = $name . ' оставил заявку ' . $choice . ' на ' . $data . '. Его телефон: ' . $number . 'К мастеру' . $choice1 . 'в' . $choice2;


    $success = mail("admin@barbershop.com", 'Запись на стрижку', $content);
                        //сюда вставляется почта//

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}