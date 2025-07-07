<?php
// {{ edit_1 }} Импортируем классы PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Автозагрузка классов Composer
require '../vendor/autoload.php';

header("Access-Control-Allow-Origin: *"); // В реальном приложении замените * на домен вашего фронтенда
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Обработка OPTIONS запроса для CORS Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input.']);
    exit();
}

// Извлекаем данные из запроса
$userName = $data['userName'] ?? 'N/A';
$userPhone = $data['userPhone'] ?? 'N/A';
$userEmail = $data['userEmail'] ?? 'N/A';
$racketName = $data['racket']['name'] ?? 'N/A';
$itemQuantity = $data['racket']['quantity'] ?? 0;
$totalPrice = $data['racket']['totalPrice'] ?? '0';

// {{ edit_2 }} Расширенная валидация данных
$errors = [];

// Валидация имени: не пустое, только буквы, пробелы и дефисы
if (empty($userName)) {
    $errors[] = 'Имя не может быть пустым.';
} elseif (!preg_match('/^[a-zA-Zа-яА-ЯёЁ\s-]+$/u', $userName)) {
    $errors[] = 'Имя может содержать только буквы, пробелы и дефисы.';
}

// Валидация телефона: не пустое, только цифры
if (empty($userPhone)) {
    $errors[] = 'Телефон не может быть пустым.';
} else {
    // Regex для формата XXXXXXXXXXX (11 цифр)
    $pattern11Digits = '^\d{11}$';
    // Regex для формата +7 (XXX) XXX-XX-XX с учетом опциональных пробелов, скобок и дефисов
    // Этот regex ожидает 10 цифр после "7" (всего 11 цифр в числовой части)
    $patternPlus7Flexible = '^\+7\s*(\(\d{3}\)|\d{3})\s*\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$';

    // Объединяем оба паттерна
    // (?:\d{11}|...) позволяет использовать обе маски без создания захватывающей группы для всего выражения.
    $combinedPhoneRegex = '/(?:' . $pattern11Digits . '|' . $patternPlus7Flexible . ')/';

    if (!preg_match($combinedPhoneRegex, $userPhone)) {
        $errors[] = 'Некорректный формат телефона. Ожидается: 11 цифр (например, 89XXXXXXXXX) или формат +7 (XXX) XXX-XX-XX.';
    }
}

// Валидация email: не пустой и корректный формат
if (empty($userEmail)) {
    $errors[] = 'Email не может быть пустым.';
} elseif (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Некорректный формат email.';
}

// Если есть ошибки валидации, возвращаем их
if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => 'Validation failed.', 'errors' => $errors]);
    exit();
}

$mail = new PHPMailer(true); // {{ edit_3 }} Создаем новый экземпляр PHPMailer

try {
    // {{ edit_4 }} Настройки SMTP-сервера
    $mail->isSMTP(); // Указываем, что будем использовать SMTP
    $mail->Host = 'smtp.ethereal.email'; // {{ edit_5 }} SMTP-хост вашего почтового провайдера (например, smtp.yandex.ru для Яндекса)
    $mail->SMTPAuth = true; // Включаем SMTP-аутентификацию
    $mail->Username = 'nella.treutel91@ethereal.email'; // {{ edit_6 }} Ваш email, с которого будут отправляться письма
    $mail->Password = 'vEQuZ8pvgH23RXyg2Q'; // {{ edit_7 }} Ваш пароль или пароль приложения для SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Включаем SSL/TLS шифрование (PHPMailer::ENCRYPTION_STARTTLS или PHPMailer::ENCRYPTION_SMTPS)
    $mail->Port = 587; // {{ edit_8 }} Порт SMTP (например, 587 для STARTTLS, 465 для SMTPS)
    $mail->CharSet = 'UTF-8'; // Устанавливаем кодировку

    // Получатели
    $mail->setFrom('padelfakun@yandex.ru', 'Fakun Website'); // {{ edit_9 }} От кого будут письма
    $mail->addAddress('nella.treutel91@ethereal.email', 'Администратор Fakun'); // {{ edit_10 }} Куда будут приходить письма

    // Формирование темы и тела письма
    $subject = "Новый заказ с сайта Fakun";
    $message = "
        <h2>Новый заказ</h2>
        <p><strong>Имя:</strong> {$userName}</p>
        <p><strong>Телефон:</strong> {$userPhone}</p>
        <p><strong>Email:</strong> {$userEmail}</p>
        <p><strong>Название ракетки:</strong> {$racketName}</p>
        <p><strong>Количество:</strong> {$itemQuantity}</p>
        <p><strong>Общая стоимость:</strong> {$totalPrice} ₽</p>
";

    // Содержимое письма
    $mail->isHTML(true); // Устанавливаем формат письма как HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->AltBody = strip_tags($message); // Альтернативный текст для клиентов, не поддерживающих HTML

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Order successfully sent!']);
} catch (Exception $e) {
    error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    echo json_encode(['success' => false, 'message' => "Failed to send order. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
