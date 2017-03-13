var rounds = parseInt(prompt('Число раундов: '));
var zero = 0;
var red = 0;
var black = 0;
var arr = [];
var i = 0;
var length = 0;
var max_length = 0;
for (i=0; i<=rounds; i++) {
	var j = (Math.round(Math.random() * 36));
  if (j == 0) {
  	arr.push(0);
  }
  else if (j % 2 == 0) {
  	arr.push(1);
  }
  else {
  	arr.push(-1);
  }
}
alert(arr);
for (i=0; i<arr.length; i++) {
	if (arr[i] == 0) {
  	zero++;
  }
  else if (arr[i] == 1) {
  	black++;
  }
  else {
  	red++;
  }
}
alert('Частота выпадения красного: ' + Math.round(red)/arr.length*100 + '%. Частота выпадения черного: ' + Math.round(black)/arr.length*100 + '%. Частота выпадени zero: ' + Math.round(zero)/arr.length*100 + '%.');
for (i=0; i<arr.length; i++) {
	if(arr[i] == 1) {
  	length = 0;
    while(i<arr.length && arr[i] == 1) {
    	i++;
      length++;
    }
    if (length > max_length) {
    	max_length = length
    }
  }
}
alert('Максимальная длинна чёрной последовательности: ' + max_length);
