'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarListElement = userDialog.querySelector('.setup-similar-list');

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

var createWizards = function (names, surname, coatColor, eyesColor) {
  var result = [];

  for (var i = 0; i < 4; i++) {
    result.push({
      name:
        (names[Math.floor(Math.random() * names.length)])
        + ' ' + (surname[Math.floor(Math.random() * surname.length)]),
      coatColor: coatColor[Math.floor(Math.random() * coatColor.length)],
      eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)],
    });
  }
  return result;
};

var wizards = createWizards(names, surname, coatColor, eyesColor);


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
