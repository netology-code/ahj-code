# Примеры кода для курса AHJ

## Содержание

* [x] [Рабочее окружение](/env)
* [x] [DOM](/dom)
* [x] [Events](/events)
* [x] [Testing](/testing)
* [x] [Forms](/forms)
* [x] [DnD](/dnd)
* [x] [HTTP](/http)
* [x] [SSE, WS](/sse-ws)
* [x] [Animations](/anim)
* [x] [Geolocation, Notification, Media](/geo)
* [x] [RxJS](/rxjs)
* [x] [Web Workers, Service Workers](/workers)

## Как использовать

1. Склонируйте репозиторий
1. Перейдите в каталог интересующей вас лекции
1. Запустите `npm install` (или соответствующие команды `yarn`) для установки зависимостей
1. Запустите `npm start` для старта frontend'а в режиме разработки, `npm run watch` для старта backend'а в режиме разработки
1. Запустите `npm build` для сборки (только для frontend'а)
1. Запустите `npm test` для прогона тестов (только для frontend'а)

*Важно*: в некоторых лекциях (HTTP, SSE + WS), предполагается наличие серверной части. Для таких лекций внутри каталога идёт деление на frontend/backend. Это значит, что `npm install` нужно делать и для frontend'а и для backend'а.

