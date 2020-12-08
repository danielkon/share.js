# Скрипт для шаринга в соц. сетях

## 1. Установка

<a target="_blank" href="https://danielkon.github.io/share/share.js" class="btn btn-lg btn-primary mb-5" download>Скачать share.js</a><p> </p>
<p>или взять с GitHub CDN: </p>

`<script src="https://danielkon.github.io/share/share.js"></script>`

## 2. Простое использование:

`<button onclick="share('fb');">Фейсбук</button>`<br>
`<button onclick="share('tw');">Твиттер</button>`<br>
`<button onclick="share('vk');">ВКонтакте</button>`<br>
`<button onclick="share('tg');">Телеграм</button>`<br>

## 3. Сложное использование: 

```javascript
share("fb", {
    url: "https://danielkon.com?a=Австралия&b=Бразилия",
    text: "Тут будет ваш текст!",
    hashtags: "#первый #второй #третий"
});
```
