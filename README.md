# Мини-приложение Fullstack

Приложение с React-фронтендом, Express-бэкендом на TypeScript и MongoDB. Состоит из приветственной страницы (`/`) и формы (`/form`) с валидацией и сохранением данных в MongoDB.

## Технологии

- Фронтенд: React, TypeScript, Vite, Ant Design, React Hook Form, Axios
- Бэкенд: Express, TypeScript, Mongoose
- База данных: MongoDB
- Контейнеризация: Docker, Docker Compose
- Node.js: v20.19.0

## Запуск в Docker

1. Установите Docker и Docker Compose.
2. Выполните:
   ```bash
   docker-compose up --build
   ```

Откройте http://localhost:3000:

/ — приветственная страница

/form — форма с валидацией

## Локальный запуск

Установите MongoDB.

Установите зависимости: cd client && npm install
cd ../server && npm install

Настройте переменные окружения client/.env И server/.env

Запустите MongoDB (mongod), затем: cd server && npm run dev
cd ../client && npm run dev

Откройте http://localhost:5173.
