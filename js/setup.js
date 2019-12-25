'use strict';

/*
 выбирает каточку волшебника и удаляет класс который её
 скрывает
*/
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


// выбирает список похожих персонажей, в него вставятся и открисуются персонажи
var similarListElement = userDialog.querySelector('.setup-similar-list');


/*
 выбирает шаблон с волшебником и получает его содержимое(фрагмент)
 полностью
*/
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


// открывает блок со списоком похожих персонажей
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');


var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var surname = [
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];


/**
 * Получаем случайный элемент массива
 *
 * @param {arr} arr - массив с данными
 * @return {string} - случайный элемент массива
 */
function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}


var wizards = (function (names, surname, coatColor, eyesColor) {
  var result = [];

  for (var i = 0; i < 4; i++) {
    result.push({
      name: arrayRandElement(names) + ' ' + arrayRandElement(surname),
      coatColor: arrayRandElement(coatColor),
      eyesColor: arrayRandElement(eyesColor),
    });
  }
  return result;
})(names, surname, coatColor, eyesColor);


/*
 * Функци будет отрисовывать волшебника с индивидуальными парамиетрам
 * @return {Node}
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


/*
 Добавляет в фрагмент волшебников через цикл каждый из которого был отриосван
 выше, кол-во волшебников берётся из массива объектов который был выше
 сгенерирован случайными образовм
*/

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}


/*
 Добавляет в лист(получен на 12 стр) с волшебниками фрагмет
 где раннее в цикле заполенны волшебники
*/
similarListElement.appendChild(fragment);
