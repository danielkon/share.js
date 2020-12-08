# Скрипт для шаринга в соц. сетях

## 1. Установка

<a target="_blank" href="https://danielkon.github.io/share/share.js" class="btn btn-lg btn-primary mb-5" download>Скачать share.js</a><p> </p>
<p>или взять с GitHub CDN: </p>

```html
<script src="https://danielkon.github.io/share/share.js"></script>
```

## 2. Простое использование:

```html
<button onclick="share('fb');">Фейсбук</button>
<button onclick="share('tw');">Твиттер</button>
<button onclick="share('vk');">ВКонтакте</button>
<button onclick="share('tg');">Телеграм</button>
```

## 3. Сложное использование: 

```javascript
share ( 

    "fb", 
    
    {
        url: "https://google.com?search?q=URL адрес с параметрами",
        text: "Текст",
        hashtags: "#первыйхештег #второйхештег #третийхештег"
    }
    
);
```

ДЕМО тут: https://danielkon.github.io/share/
