/*Функция рандомного значения между 2 значениями*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Функция рандомного выбора из списка значений*/
function getCard() {
	var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  return cards[getRandomInt(0, cards.length - 1)];
}

/*Функция подсчета суммы карт*/
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

/*Функция вывода текущих карт и их суммы*/
function getStatus() {
	return 'Дилер: ' + dealer.join('-') + ' : ' + getSum(dealer) + '.\n Игрок:' + player.join('-') + ' : ' + getSum(player) + '.';
}

var dealer = [getCard()];
var player = [getCard(), getCard()];

if (getSum(player) == 21) {
	alert('Black Jack! \n' + getStatus());
} else {
	/* Ход игрока */
	var answer = '';
  	do {
    	answer = prompt(getStatus() + '\nХотите еще карту?\n1 - да\nдругой символ - нет');
      if (answer == '1') {
      	player.push(getCard());
        if (getSum(player) == 21) {
        	alert('Black Jack! \n' + getStatus());
          break;
        } else if (getSum(player) > 21) {
        		alert('Вы проиграли... \n' + getStatus());
            break;
          }
    	} else {
      		/* Ход диллера */
        	while (getSum(dealer) < 17) {
          	dealer.push(getCard());
          };
          if (getSum(dealer) == 21) {
          	alert('У диллера Black Jack... \n' + getStatus());
          } else if (getSum(dealer) > 21) {
          		alert('Дилер проиграл! \n' + getStatus());
          } else if (getSum(player) == getSum(dealer)) {
          		alert('Ничья \n' + getStatus());
          } else if (getSum(player) > getSum(dealer)) {
          		alert('Дилер проиграл! \n' + getStatus());
          } else {
          		alert('Вы проиграли...\n' + getStatus());
          }
        }
      } while(answer == '1');
}
