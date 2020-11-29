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

  // Кнопка отпарвки формы
  var formButtonSubmit = form.querySelector('.form__button-submit');

  // Группы полей в форме
  var formStep1 = form.querySelector('.form__step-1');
  var formStep2 = form.querySelector('.form__step-2');
  var formStep3 = form.querySelector('.form__step-3');

  // Скрываем группы полей в форме
  formStep2.classList.add("visually-hidden");
  formStep3.classList.add("visually-hidden");

  // Показываем разноцветные кнопки над формой если скрипт загрузился
  formStepsBtn.classList.remove("visually-hidden");

  // Скрываем кнопку submit до 3 шага в форме
  formButtonSubmit.classList.add("visually-hidden");

  // Клик на кнопки в форме
  var formButton1ClickHendler = function () {
      formStepBtn1.classList.remove("form__step-success");
      formStepBtn1.classList.add("form__step-current");
      formStepBtn2.classList.add("form__step-success");
      formStep1.classList.add("visually-hidden");
      formStep2.classList.remove("visually-hidden");
  };

  var formButton2ClickHendler = function () {
      formStepBtn2.classList.remove("form__step-success");
      formStepBtn2.classList.add("form__step-current");
      formStepBtn3.classList.add("form__step-success");
      formStep2.classList.add("visually-hidden");
      formStep3.classList.remove("visually-hidden");
      formButtonSubmit.classList.remove("visually-hidden");
  };

  formButton1.addEventListener('click', formButton1ClickHendler);
  formButton2.addEventListener('click', formButton2ClickHendler);


  // Клик на разноцветные кнопки над формой
  var formStep1ClickHendler = function () {
      formStepBtn1.classList.add("form__step-success");
      formStepBtn1.classList.remove("form__step-current");
      formStepBtn2.classList.remove("form__step-success");
      formStepBtn2.classList.remove("form__step-current");
      formStepBtn3.classList.remove("form__step-success");
      formStep1.classList.remove("visually-hidden");
      formStep2.classList.add("visually-hidden");
      formStep3.classList.add("visually-hidden");
      formButtonSubmit.classList.add("visually-hidden");
  };

  var formStep2ClickHendler = function () {
      formStepBtn1.classList.remove("form__step-success");
      formStepBtn1.classList.add("form__step-current");
      formStepBtn2.classList.remove("form__step-current");
      formStepBtn2.classList.add("form__step-success");
      formStepBtn3.classList.remove("form__step-success");
      formStep1.classList.add("visually-hidden");
      formStep2.classList.remove("visually-hidden");
      formStep3.classList.add("visually-hidden");
      formButtonSubmit.classList.add("visually-hidden");
  };

  var formStep3ClickHendler = function () {
      formStepBtn1.classList.remove("form__step-success");
      formStepBtn1.classList.add("form__step-current");
      formStepBtn2.classList.add("form__step-current");
      formStepBtn2.classList.remove("form__step-success");
      formStepBtn3.classList.add("form__step-success");
      formStep1.classList.add("visually-hidden");
      formStep2.classList.add("visually-hidden");
      formStep3.classList.remove("visually-hidden");
      formButtonSubmit.classList.remove("visually-hidden");
  };

  formStepBtn1.addEventListener('click', formStep1ClickHendler);
  formStepBtn2.addEventListener('click', formStep2ClickHendler);
  formStepBtn3.addEventListener('click', formStep3ClickHendler);

})();
