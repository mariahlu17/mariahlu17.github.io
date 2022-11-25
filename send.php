<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5406466400:AAH4w_x_H6KpW6BJMO68H8EwtmyH-9tGvr8";

//Сюда вставляем chat_id
$chat_id = "-430356749";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
     $name = ($_POST['name']);
    $surname = ($_POST['surname']);
    $email = ($_POST['email']);
    $address = ($_POST['address'])
    $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Name:' => $name,
        'Surname:' =>$surname,
        'E-mail:' =>$email,
        'Address:' =>$address,
        'Phone number:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>