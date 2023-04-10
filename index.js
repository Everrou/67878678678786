
function myFunction() {

    const rate = Number(prompt('Введите текущий курс доллара по отношению к евро: '));
var dollar = Number(prompt('Введите количество долларов для обмена: '));
alert("По текущему курсу при обмене вы получите " + dollar * rate + " евро");
}

function Function() {

    var distance = Number(prompt("Введите расстояние между городами в км: "));
var time = Number(prompt('За какое время вы хотите преодолеть это расстояние в часах? '));
alert('Вам необходимо двигаться со средней скоростью ' + distance / time + ' км/ч');
}

function Func() {

    var sum = prompt("Cколько у вас в бумажнике денег? ");
var price = prompt("И почем одна шоколадка? ");
sum = Number(sum);
price = Number(price);
var sell = Math.trunc(sum / price);
var change = sum - price * sell;
if (sell < 1) {
  alert('Сегодня вы на нуле. приходите в другой раз');
}
else {
  alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (sum - price * sell) + ' рублей ');
}
}

















