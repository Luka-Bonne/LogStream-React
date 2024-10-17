function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

// if...else
function manyChecks1() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  let str;
  if (a > 10) {
    str = 'a is bigger than 10';
  }
  else {
    str = 'a is less than or equal to 10 ';
  }

  if (a === 5) {
    str += 'an example of a special case';
  }
  else if (a === 15) {
    str += 'but a is not 15';
  }
  else {
    str += '';
  }

  if (a > 5) {
    str += 'and a is greater than 5';
  }
  else {
    str += 'and a is less than or equal to 5 ';
  }

  if (a % 2) {
    str += ' and a is odd';
  }
  else {
    str += ' and a is even ';
  }

  return str;
}
console.log(manyChecks1());

// switch()
function manyChecks2() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  let str;
  switch (true) {
    case (a > 10):
      str = 'a is bigger than 10';
      break;
    default:
      str = 'a is less than or equal to 10 ';
      break;
  }

  switch (a) {
    case 5:
      str += 'an example of a special case';
      break;
    case 15:
      str += 'but a is not 15';
      break;
    default:
      str += '';
  }

  switch (true) {
    case a > 5:
      str += 'and a is greater than 5';
      break;
    default:
      str += 'and a is less than or equal to 5 ';
      break;
  }

  switch (a % 2) {
    case 0:
      str += ' and a is even ';
      break;
    default:
      str += ' and a is odd';
      break;
  }
  return str
}
console.log(manyChecks2());