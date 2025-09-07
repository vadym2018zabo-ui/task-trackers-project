# Task Tracker

Це простий веб-застосунок для створення та перегляду задач. Користувач може додавати задачі, які зберігаються у базі даних PostgreSQL. Проєкт реалізовано на HTML, CSS, JavaScript (клієнт) та Node.js + Express (бекенд).

## Запуск

1. Імпортуй SQL у PostgreSQL: psql -U postgres -d task_tracker -f db/schema.sql
2. Встанови залежності: npm install express cors body-parser pg
3. Запусти сервер:node server/server.js 
4. Відкрий `client/index.html` у браузері 
   
