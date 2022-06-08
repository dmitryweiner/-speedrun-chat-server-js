# speedrun-chat-server-js
### Simple chat on vanilla JS
Сделанный на коленке сервер для чат с использованием фреймворка Express.js.

[Клиент](https://github.com/dmitryweiner/speedrun-chat-js).

Рабочий прототип выложен на Github Pages: https://dmitryweiner.github.io/speedrun-chat-js/

[Видео](https://www.youtube.com/watch?v=oQIPUa6ySRE) создания чата.

### TODO:
* Сделать лимит на сохранение сообщений. При превышении лимита стирать старые.
* При запросе без параметров отдавать не все, а последние N (100?).
* При запросе `GET /?last=12312312312` отдавать все, у кого `timestamp` больше указанного.
* Сделать валидацию `POST /`:
  * Наличие полей username, text.
  * Там передана не пустая строка.