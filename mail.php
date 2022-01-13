<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $haircut = $_POST['haircut'];
    $data = $_POST['data'];
    $number = $_POST['number'];
    $barber = $_POST['barber'];
    $time = $_POST['time'];

    $content = $name . ' оставил заявку ' . $haircut . ' на ' . $data . '. Его телефон: ' . $number . 'К мастеру' . $barber . 'в' . $time;


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