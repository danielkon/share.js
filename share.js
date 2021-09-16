// Начало супер крутого кода
function share(social, options){

	// Блокируем поведение по-умолчанию (допустим если это ссылка)
	if (event) event.preventDefault();
	
	// Проверяем на наличие параметра options
	if (!options) {
		options = {};
		options.url = document.location.href;
		options.files = [];
	}

	// Заполняем пустоты (почти как котики)
	let url = options.url || document.location.href;
	let files = options.files || [];
	let text = options.text || "";
	let hashtags = options.hashtags || "";
	let result = "";

	// Готовим ссылку для:
	// Фейсбука
	if (social == "fb") {
		result = "https://www.facebook.com/sharer.php";
		result += "?u="+encodeURIComponent(url);
		if (text) {result += "&quote="+encodeURIComponent(text);}
		if (hashtags) {result += "&hashtag="+encodeURIComponent(hashtags);}
	}

	// или для Твиттера
	if (social == "tw") {
		result = "https://twitter.com/intent/tweet";
		result += "?url="+encodeURIComponent(url);
		if (text && hashtags) {result += "&text="+encodeURIComponent(text+" "+hashtags);}
		else {
			if (text) {result += "&text="+encodeURIComponent(text);}
			if (hashtags) {result += "&text="+encodeURIComponent(hashtags);}
		}
	}

	// или для ВКонтакте
	if (social == "vk") {
		result = "https://vk.com/share.php";
		result += "?url="+encodeURIComponent(url);
		if (text && hashtags) {result += "&comment="+encodeURIComponent(text+" "+hashtags);}
		else {
			if (text) {result += "&comment="+encodeURIComponent(text);}
			if (hashtags) {result += "&comment="+encodeURIComponent(hashtags);}
		}
	}

	// или для Телеграма
	if (social == "tg") {
		result = "https://t.me/share/url";
		result += "?url="+encodeURIComponent(url);
		if (text && hashtags) {result += "&text="+encodeURIComponent(text+" "+hashtags);}
		else {
			if (text) {result += "&text="+encodeURIComponent(text);}
			if (hashtags) {result += "&text="+encodeURIComponent(hashtags);}
		}
	}
	
	// Если условие соц. сети сработало, то херачим всплывающее окно с шарингом
	if (result) {window.open(result,"_blank",'toolbar=0,status=0,width=626,height=436');}
	// Иначе открываем нативный для ОС диалог шаринга
	else {
		data = {
		    	text: text+" "+hashtags,
		    	url: url,
			files: files
		}
		try {
			navigator.share(data)
		}
		catch(error) {
			console.log(error);
		}
	}
}
// Конец супер крутого кода
