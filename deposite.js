var a = parseFloat(prompt('Сумма вклада'));
var b = parseInt(prompt('Процентная ставка'));
var c = parseInt(prompt('Срок вклада (лет)'));

for (var i=1; i<=c; i++) {
	a = a * 10 / 100 + a;
	alert('Прошло ' + i + 'лет. Сумма на счете ' + Math.floor(a));
}
