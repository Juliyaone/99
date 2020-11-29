'use strict';
(function () {

var data = [
  {
    "country": "Австралия"
  },
  {
    "country": "Австрия"
  },
  {
    "country": "Азербайджан"
  },
  {
    "country": "Албания"
  },
  {
    "country": "Алжир"
  },
  {
    "country": "Америк. Виргинские О.а"
  },
  {
    "country": "Америк. Виргинские о.а"
  },
  {
    "country": "Американские Виргинские о.а"
  },
  {
    "country": "Ангилья"
  },
  {
    "country": "Ангола"
  },
  {
    "country": "Андорра"
  },
  {
    "country": "Антарктида"
  },
  {
    "country": "Антигуа и Барбуда"
  },
  {
    "country": "Антильские О.а"
  },
  {
    "country": "Антильские о.а"
  },
  {
    "country": " Аргентина"
  },
  {
    "country": "Арктика"
  },
  {
    "country": "Армения"
  },
  {
    "country": "Аруба"
  },
  {
    "country": "Багамы"
  },
  {
    "country": "Бангладеш"
  },
  {
    "country": "Барбадос"
  },
  {
    "country": "Бахрейн"
  },
  {
    "country": "Беларусь"
  },
  {
    "country": "Белиз"
  },
  {
    "country": "Бельгия"
  },
  {
    "country": "Бенин"
  },
  {
    "country": "Бермудские О.а"
  },
  {
    "country": "Бермудские о.а"
  },
  {
    "country": "Болгария"
  },
  {
    "country": "Боливия"
  },
  {
    "country": "Бонэйр"
  },
  {
    "country": "Босния и Герцеговина"
  },
  {
    "country": "Ботсвана"
  },
  {
    "country": "Бразилия"
  },
  {
    "country": "Брит. Виргинские О.а"
  },
  {
    "country": "Брит. Виргинские о.а"
  },
  {
    "country": "Бруней"
  },
  {
    "country": "Буркина-Фасо"
  },
  {
    "country": "Бурунди"
  },
  {
    "country": "Бутан"
  },
  {
    "country": "Вануату"
  },
  {
    "country": "Великобритания"
  },
  {
    "country": "Венгрия"
  },
  {
    "country": "Венесуэла"
  },
  {
    "country": "Виргинские о.а Сша"
  },
  {
    "country": "Вьетнам"
  },
  {
    "country": "Гаити"
  },
  {
    "country": "Гайана"
  },
  {
    "country": "Гамбия"
  },
  {
    "country": "Гана"
  },
  {
    "country": "Гваделупа"
  },
  {
    "country": "Гватемала"
  },
  {
    "country": "Гвиана"
  },
  {
    "country": "Германия"
  },
  {
    "country": "Голландия"
  },
  {
    "country": "Гондурас"
  },
  {
    "country": "Гонконг"
  },
  {
    "country": "Гренада"
  },
  {
    "country": "Гренландия"
  },
  {
    "country": "Греция"
  },
  {
    "country": "Грузия"
  },
  {
    "country": "Дания"
  },
  {
    "country": "Джибути"
  },
  {
    "country": "Доминика"
  },
  {
    "country": "Доминикана"
  },
  {
    "country": "Доминиканская Республика"
  },
  {
    "country": "Египет"
  },
  {
    "country": "Замбия"
  },
  {
    "country": "Зимбабве"
  },
  {
    "country": "Израиль"
  },
  {
    "country": "Индия"
  },
  {
    "country": "Индонезия"
  },
  {
    "country": "Иордания"
  },
  {
    "country": "Ирак"
  },
  {
    "country": "Иран"
  },
  {
    "country": "Ирландия"
  },
  {
    "country": "Исландия"
  },
  {
    "country": "Испания"
  },
  {
    "country": "Италия"
  },
  {
    "country": "Йемен"
  },
  {
    "country": "Кабо-Верде"
  },
  {
    "country": "Казахстан"
  },
  {
    "country": "Каймановы О-Ва"
  },
  {
    "country": "Калининград"
  },
  {
    "country": "Камбоджа"
  },
  {
    "country": "Камерун"
  },
  {
    "country": "Канада"
  },
  {
    "country": "Карибские о.а"
  },
  {
    "country": "Катар"
  },
  {
    "country": "Кения"
  },
  {
    "country": "Кипр"
  },
  {
    "country": "Киргизия"
  },
  {
    "country": "Китай"
  },
  {
    "country": "Колумбия"
  },
  {
    "country": "Коморские о.а"
  },
  {
    "country": "Конго"
  },
  {
    "country": "Коста-Рика"
  },
  {
    "country": "Кот-Д’ивуар"
  },
  {
    "country": "Куба"
  },
  {
    "country": "Кувейт"
  },
  {
    "country": "Кыргызстан"
  },
  {
    "country": "Кюрасао"
  },
  {
    "country": "Кюрасао, Нидерландские Антилы"
  },
  {
    "country": "Лаос"
  },
  {
    "country": "Латвия"
  },
  {
    "country": "Ливан"
  },
  {
    "country": "Ливия"
  },
  {
    "country": "Литва"
  },
  {
    "country": "Лихтенштейн"
  },
  {
    "country": "Лутраки"
  },
  {
    "country": "Люксембург"
  },
  {
    "country": "Маврикий"
  },
  {
    "country": "Мадагаскар"
  },
  {
    "country": "Македония"
  },
  {
    "country": "Малайзия"
  },
  {
    "country": "Мали"
  },
  {
    "country": "Мальдивы"
  },
  {
    "country": "Мальта"
  },
  {
    "country": "Марианские О-Ва"
  },
  {
    "country": "Марокко"
  },
  {
    "country": "Мартиника"
  },
  {
    "country": "Мексика"
  },
  {
    "country": "Мозамбик"
  },
  {
    "country": "Молдавия"
  },
  {
    "country": "Молдова"
  },
  {
    "country": "Монако"
  },
  {
    "country": "Монголия"
  },
  {
    "country": "Мьянма"
  },
  {
    "country": "Мьянма (бирма)"
  },
  {
    "country": "Намибия"
  },
  {
    "country": "Непал"
  },
  {
    "country": "Нигерия"
  },
  {
    "country": "Нидерланды"
  },
  {
    "country": "Никарагуа"
  },
  {
    "country": "Новая Гвинея"
  },
  {
    "country": "Новая Зеландия"
  },
  {
    "country": "Новая Каледония"
  },
  {
    "country": "Норвегия"
  },
  {
    "country": "о. Кука"
  },
  {
    "country": "ОАЭ"
  },
  {
    "country": "Оман"
  },
  {
    "country": "о. Крит"
  },
  {
    "country": "Пакистан"
  },
  {
    "country": "Палау"
  },
  {
    "country": "Панама"
  },
  {
    "country": "Папуа Новая Гвинея"
  },
  {
    "country": "Парагвай"
  },
  {
    "country": "Перу"
  },
  {
    "country": "Полинезия"
  },
  {
    "country": "Польша"
  },
  {
    "country": "Португалия"
  },
  {
    "country": "Прибалтика"
  },
  {
    "country": "Пуэрто Рико, Виргинские о.а Сша"
  },
  {
    "country": "Пуэрто-Рико"
  },
  {
    "country": "Республика Тринидад и Тобаго"
  },
  {
    "country": "Реюньон"
  },
  {
    "country": "Россия"
  },
  {
    "country": "Руанда"
  },
  {
    "country": "Румыния"
  },
  {
    "country": "Сан Сальвадор"
  },
  {
    "country": "Сан-Марино"
  },
  {
    "country": "Сан-Томе и Принсипи Демократическая Республика"
  },
  {
    "country": "Саудовская Аравия"
  },
  {
    "country": "Свазиленд"
  },
  {
    "country": "Сейшелы"
  },
  {
    "country": "Сен-Бартелеми"
  },
  {
    "country": "Сен-Мартен"
  },
  {
    "country": "Сенегал"
  },
  {
    "country": "Сент Бартелеми"
  },
  {
    "country": "Сент Бартс (сент Бартелеми)"
  },
  {
    "country": "Сент-Винсент и Гренадины"
  },
  {
    "country": "Сент-Китс и Невис"
  },
  {
    "country": "Сент-Люсия"
  },
  {
    "country": "Сент-Мартен (о. Святого Мартина)"
  },
  {
    "country": "Сербия"
  },
  {
    "country": "Сингапур"
  },
  {
    "country": "Сирия"
  },
  {
    "country": "Скандинавия"
  },
  {
    "country": "Словакия"
  },
  {
    "country": "Словения"
  },
  {
    "country": "Судан"
  },
  {
    "country": "Суринам"
  },
  {
    "country": "США"
  },
  {
    "country": "Сьерра Леоне"
  },
  {
    "country": "Таджикистан"
  },
  {
    "country": "Таиланд"
  },
  {
    "country": "Таити"
  },
  {
    "country": "Тайвань"
  },
  {
    "country": "Танзания"
  },
  {
    "country": "Теркс и Кайкос"
  },
  {
    "country": "Тибет"
  },
  {
    "country": "Того"
  },
  {
    "country": "Тринидад и Тобаго"
  },
  {
    "country": "Тунис"
  },
  {
    "country": "Туркменистан"
  },
  {
    "country": "Турция"
  },
  {
    "country": "Уганда"
  },
  {
    "country": "Узбекистан"
  },
  {
    "country": "Украина"
  },
  {
    "country": "Уругвай"
  },
  {
    "country": "Фиджи"
  },
  {
    "country": "Филиппины"
  },
  {
    "country": "Финляндия"
  },
  {
    "country": "Франция"
  },
  {
    "country": "Французская Гвиана"
  },
  {
    "country": "Французская Полинезия"
  },
  {
    "country": "Хорватия"
  },
  {
    "country": "Цар"
  },
  {
    "country": "Центральная Африканская Республика"
  },
  {
    "country": "Чад"
  },
  {
    "country": "Черногория"
  },
  {
    "country": "Чехия"
  },
  {
    "country": "Чили"
  },
  {
    "country": "Швейцария"
  },
  {
    "country": "Швеция"
  },
  {
    "country": "Шри-Ланка"
  },
  {
    "country": "Эквадор"
  },
  {
    "country": "Экваториальная Гвинея"
  },
  {
    "country": "Эль-Сальвадор"
  },
  {
    "country": "Эритрея"
  },
  {
    "country": "Эстония"
  },
  {
    "country": "Эфиопия"
  },
  {
    "country": "Юар"
  },
  {
    "country": "Южная Корея"
  },
  {
    "country": "Ямайка"
  },
  {
    "country": "Япония"
  }
]

var country = document.querySelector('#countries');
console.log(country);


var countryFunction = function(data) {
  for (var i = 0; i <= data.length; i++) {
    var countryName = document.createElement('option');
    countryName.setAttribute("value", " ")
    countryName.value = data[i].country;
    countryName.innerHTML = data[i].country;
    console.log(countryName);
    country.appendChild(countryName);

    // countryName = document.createElement('option').value = country.value;
    // // countryName.value = this.value;
    // }
  }

};

  countryFunction(data);

  // country.addEventListener('change', function() {

  // });


})();
