'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GISTORGAM_Y = 60;
var CLOUD_X = 100; // облако координаты X
var CLOUD_Y = 10; // облако координаты Y
var GAP = 10; // отступ для облака
var COLUMN_GAP = 50; // отступ между колнками
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40; // ширина колнки
var FONT_GAP = 15;
var CLOUND_PADDING_X = 50;
var INDENT = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxValue = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUND_PADDING_X, INDENT); // 30 в констаны текст позишн
  ctx.fillText('Список результатов: ', CLOUD_X + CLOUND_PADDING_X, INDENT + FONT_GAP);
  var pointsPerPixel = getMaxElement(times) / COLUMN_HEIGHT; // получаем кол-во времени в одном пиксели.
  for (var i = 0; i < names.length; i++) {
    var GistaHeight = times[i] / pointsPerPixel;
    var posX = CLOUD_X + CLOUND_PADDING_X + (COLUMN_GAP + COLUMN_WIDTH) * i;
    var posY = GISTORGAM_Y + FONT_GAP + GAP + COLUMN_HEIGHT - GistaHeight;
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, ' + Math.floor(Math.random() * 255) + ', 1)';
    ctx.fillRect(posX, posY, COLUMN_WIDTH, GistaHeight);
    ctx.fillText(names[i], posX, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), posX, GISTORGAM_Y + FONT_GAP);
  }
};
