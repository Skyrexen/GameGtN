// Генерация рандомного числа в виде массива
var getNum = function () {
  num = [];
  while (num.length < 4) {
    let NewNum = Math.floor(Math.random () * 10);
    num.push(NewNum);
  }
  return num;
};

var goal = getNum ();
// Считывание пользовательского числа и перевод его в массив
var guess = function() {
  let pnum = document.querySelector('#player').value;
  let arr = [];
  for (let i = 0; i < 4; i++) {
    let NewArrEl = parseInt(pnum.substr(i, 1));
    arr.push(NewArrEl);
  };
  check (arr);
};
//Сравнивание массивов
var check = function (par) {
  let B = 0;
  let K = 0;
  for (let i = 0; i < 4; i++) {
    if (par[i] == goal[i]) {
      B++;
    }
    else if (goal.indexOf(par[i]) >= 0){
      K++;
    }
  }
  if (B == 4) {
    let status = 'Вы победили!';
    endGame (status);
  }
//  endGame();
  WTurn(par, B, K);
};

var WTurn = function (par, B, K) {
  let table = document.querySelector('.turnsList');
  let newLine = document.createElement('p');
  newLine.innerHTML = '<span class="gussed">' + ' K - ' + K + ', B - ' + B;
  table.appendChild(newLine);
};

var endGame = function (status){
  let table = document.querySelector('.turnsList');
  let newLine = document.createElement('p');
  newLine.innerHTML = status;
  table.appendChild(newLine);
};
console.log(getNum());
