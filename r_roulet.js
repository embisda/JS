var n = 0;
do {
  if (prompt('Введите 1, чтобы играть. Введите любой другой символ, чтобы закончить') == 1) {
    alert('Играем дальше')
    if ((Math.random() * 6) < 1) {
      alert('Bang!');
      break;
  	}
	}
  else {
  	alert('Спасибо за игру');
    break;
  }
	n++;
} while (true);
alert('Вы сыграли: ' + n);
