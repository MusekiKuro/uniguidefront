// 🔧 Конфигурация API
// Измените этот URL после деплоя backend на Render

const API_CONFIG = {
    // Для локальной разработки:
    // BASE_URL: 'http://127.0.0.1:8000/api',
    
    // Для продакшена (замените на ваш Render URL):
    BASE_URL: 'https://uniguide-backend.onrender.com/api',
    
    // Таймаут запросов (мс)
    TIMEOUT: 30000,
    
    // Показывать ли логи в консоли
    DEBUG: true
};

// Вспомогательная функция для логирования
function logAPI(message, data) {
    if (API_CONFIG.DEBUG) {
        console.log(`[UniGuide API] ${message}`, data || '');
    }
}

// Экспортируем в глобальную область видимости
window.API_CONFIG = API_CONFIG;
window.logAPI = logAPI;
