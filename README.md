# Домашнее задание к блоку «Компоненты высшего порядка (HOC)» — Задача «HOC для управления темой»

Веб-приложение на React 19 и TypeScript 5, демонстрирующее паттерн Higher-Order Component через реализацию компонента высшего порядка `withTheme` для проброса темы оформления через пропсы.

[![Build Status](https://github.com/ivantr033/ra16-homeworks-theme_provider/actions/workflows/deploy.yml/badge.svg)](https://github.com/ivantr033/ra16-homeworks-theme_provider/actions/workflows/deploy.yml)

## 🌐 Ссылка на развертывание (GitHub Pages)

* **Theme Provider App:** [Открыть приложение](https://ivantr033.github.io/ra16-homeworks-theme_provider/)

## ⚙️ Реализованные требования и технические характеристики

* **HOC `withTheme`:** Типизирован с использованием дженериков TypeScript (`<P extends WithThemeProps>`), что гарантирует проверку наличия пропа `theme` у оборачиваемого компонента и сохраняет строгую типизацию остальных пропсов.
* **Отладка (`displayName`):** Обёрнутый компонент сохраняет имя исходного компонента в формате `withTheme(ComponentName)` для удобной инспекции в React DevTools.
* **Управление состоянием:** Состояние темы (`'light' | 'dark'`) хранится в родительском компоненте `App` и передаётся вниз по дереву без использования Context API.
* **Чистая стилизация:** Все стили вынесены в CSS-классы, обеспечивая плавное переключение оформления всего экрана и оборачиваемой кнопки.

## 🛠️ Технологический стек

* **Фронтенд:** React 19
* **Язык:** TypeScript 5 (без использования типа `any`)
* **Сборщик:** Vite 8
* **CI/CD:** GitHub Actions (автоматический деплой на ветку `gh-pages`)

## 🔧 Инструкция по установке и запуску

1. Клонируйте репозиторий и перейдите в папку проекта:

   ```bash
   git clone https://github.com/ivantr033/ra16-homeworks-theme_provider
   cd ra16-homeworks-theme_provider
   ```

2. Установите зависимости:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Запустите проект в режиме разработки:

   ```bash
   npm run dev
   ```

   Приложение откроется локально по адресу `http://localhost:5173`.

4. Для создания production-сборки выполните:

   ```bash
   npm run build
   ```
