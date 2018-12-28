'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100; // облако координаты X
var CLOUD_Y = 10; // облако координаты Y
var GAP = 10; // отступ для облака
var COLUMN_GAP = 50; // отступ между колнками
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40; // ширина колнки
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 110, 10);
  ctx.fillText('Список результатов: ', 110, 20);

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(150, COLUMN_HEIGHT + COLUMN_WIDTH, COLUMN_WIDTH, COLUMN_HEIGHT);
  // ctx.fillText('Вы', 150, CLOUD_HEIGHT - GAP);
  //
  // ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  // ctx.fillText('Иван', 240, 170);
  // ctx.fillRect(240, 170, COLUMN_WIDTH, 150);
  //
  // ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  // ctx.fillText('Юлия', 330, 170);
  // ctx.fillRect(330, 170, COLUMN_WIDTH, 150);



};
