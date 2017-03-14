function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCard() {
	var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  return cards[getRandomInt(0, cards.length - 1)];
}

function getSum(hand) {
	var sum = 0;
  
  for (var i=0; i<hand.length; i++) {
  	var card = hand[i];
    if (card != 'A') {
    	if (card == 'J' || card == 'Q' || card == 'K') {
      	sum = sum + 10;
      } else {
      	sum = sum + parseInt(card);
      }
    }
  }
  
  for (var i=0; i<hand.length; i++) {
  	var card = hand[i];
    if (card == 'A') {
    	if (sum > 10) {
      	sum = sum + 1;
      } else {
      	sum = sum + 11;
      }
    }
  }
  return sum;
}

function getStatus() {
	return 'Дилер: ' + dealer.join('-') + '. Игрок:' + player.join('-') + '.';
}

var dealer = [getCard()];
var player = [getCard(), getCard()];
var answer = '';

do {
	answer = prompt(getStatus() + 'Хотите еще карту? 1 - да; другой символ - нет');
  if (answer == '1') {
  	player.push(getCard());
  }
  alert(getStatus());
} while(answer == '1');

alert('Текущая сумма карт у игрока: ' + getSum(player));
