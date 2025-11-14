# XML/XSLT Compiler for Electron

## Описание
- Простое Electron-приложение для трансформаций XML и XSLT. Поддерживает редактирование XML и XSLT, визуализацию результата трансформации.

## Установка
- Требуется Node.js версии 14+.
- Установить зависимости и запустить приложение:
  - npm install
  - npm run start (или npm run electron:dev, в зависимости от скриптов)

## Структура проекта
- index.html: основная разметка рендера (UI для XML/XSLT, кнопки, поле вывода)
- styles.css: стили интерфейса (glass morphism, адаптация под десктоп)
- main.js: основной процесс Electron
- convert.js: Для запуска XML преобразований

## Как запустить
```shell
npm run
```
