var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var names = {
  player1: 'Вы',
  player2: 'Иван',
  player3: 'Юлия',

}

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;


var renderCloud = function(ctx, x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = (ctx, names, names){


  renderCloud(ctx,110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'white')

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', 110, 75);
  ctx.fillRect(100, 10, 40, 150);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Иван', 110, 75);
  ctx.fillRect(190, 10, 40, 150);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Юлия', 110, 75);
  ctx.fillRect(280, 10, 40, 150);

/*  ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', 0, 10);
  ctx.fillText('Список результатов: ', 0, 10);*/
};
