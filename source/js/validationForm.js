'use strict';
(function () {
  var form = document.querySelector('#form');

  // Разноцветные кнопки над формой
  var formStepsBtn = document.querySelector('.form__steps-btn');
  var formStepBtn1 = formStepsBtn.querySelector('.form__step-btn-1');
  var formStepBtn2 = formStepsBtn.querySelector('.form__step-btn-2');
  var formStepBtn3 = formStepsBtn.querySelector('.form__step-btn-3');

  // Кнопки внутри формы
  var formButton1 = form.querySelector('.form__step-1-button');
  var formButton2 = form.querySelector('.form__step-2-button');

  // Все поля формы
  var formFields = form.querySelectorAll('.form__field');

  // Поле со странами
  var formFieldCountry = form.querySelector('#countries');

  // Поле с датами
  var formFieldCalendar = form.querySelector('#calendar');

  // Подсказака ошибки
  var formFieldError = form.querySelector('.form__field-error');


  // Hастроить валидацию при клике на разноцветную кнопку 2
  // проверить заполнено ли поле 1 если не заполнено, показать form__field-error

  // Hастроить валидацию при клике на разноцветную кнопку 3
  // проверить заполнено ли поле 2

  // Hастроить валидацию при клике на кнопку 1 в форме
  // проверить заполнено ли поле 1

  // Hастроить валидацию при клике на кнопку 2 в форме
  // проверить заполнено ли поле 2

  // Hастроить валидацию при клике на кнопку submit в форме
  // проверить заполнены ли все поля




    // Проверяем значение поля value "Выберите страну" при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
      var formFieldCountryValue = formFieldCountry.value;

      if (formFieldCountry.value === "Выберите страну" || formFieldCountry.value === "") {

        formStepBtn2.setAttribute('disabled', 'disabled');
        formButton1.setAttribute('disabled', 'disabled');
      } else {
        formStepBtn2.removeAttribute("disabled");
        formButton1.removeAttribute("disabled");
        formFieldError.style.display = "none";
      }
    });


    // Проверяем значение поля value "Выберите страну" при изменении select
    var fieldCountryChangeHandler = function() {
      if (formFieldCountry.value === "Выберите страну" || formFieldCountry.value === "") {

        formFieldError.style.display = "block";
        formButton1.setAttribute('disabled', 'disabled');
        formStepBtn2.setAttribute('disabled', 'disabled');
      } else {
        formStepBtn2.removeAttribute("disabled");
        formButton1.removeAttribute("disabled");
        formFieldError.style.display = "none";
      }
    };

    formFieldCountry.addEventListener('change', fieldCountryChangeHandler);
    formStepBtn2.addEventListener('change', fieldCountryChangeHandler);



  // значение поля value "Выберите дату"  при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
      var formFieldCalendarValue = formFieldCalendar.value;

      if (formFieldCalendarValue === "" || formFieldCalendarValue === "дд.мм.гггг") {

        formStepBtn3.setAttribute('disabled', 'disabled');
        formButton2.setAttribute('disabled', 'disabled');
      } else {
        formStepBtn3.removeAttribute("disabled");
        formButton2.removeAttribute("disabled");
        formFieldError.style.display = "none";
      }
    });


  // Проверяем значение поля value "Выберите дату" при изменении в #calendar
    var fieldDateChangeHandler = function() {
      var formFieldCalendarValue = formFieldCalendar.value;

      if (formFieldCalendarValue === "" || formFieldCalendarValue === "дд.мм.гггг") {

        formFieldError.style.display = "block";
        formButton2.setAttribute('disabled', 'disabled');
        formStepBtn3.setAttribute('disabled', 'disabled');
      } else {
        formStepBtn3.removeAttribute("disabled");
        formButton2.removeAttribute("disabled");
        formFieldError.style.display = "none";
      }
    };

    formFieldCalendar.addEventListener('change', fieldDateChangeHandler);
    formStepBtn3.addEventListener('click', fieldDateChangeHandler);
    formButton2.addEventListener('click', fieldDateChangeHandler);

})();
