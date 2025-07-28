<?php
// Укажите корректный путь к папке fakun_backend относительно public_html
require_once '/var/www/u3208207/data/fakun_backend/vendor/autoload.php';

// Определите путь к вашему API-скрипту
$apiScriptPath = '/var/www/u3208207/data/fakun_backend/api/send_order.php';

// Проверяем, существует ли файл скрипта
if (file_exists($apiScriptPath)) {
    // Устанавливаем заголовки, если это необходимо для вашего API (CORS, JSON и т.д.)
    header('Content-Type: application/json');
    // header('Access-Control-Allow-Origin: *'); // Осторожно с CORS в продакшене!

    // Включаем и выполняем ваш PHP API скрипт
    require_once $apiScriptPath;
} else {
    http_response_code(404);
    echo json_encode(['error' => 'API endpoint not found.']);
}
?> 