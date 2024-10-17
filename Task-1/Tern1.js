let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

// if...else
if (a > 10 && a > 5) {
    console.log((2 * a) + 1);
}
else if (a <= 10 && a * 2 > 5) {
    console.log((2 * a) + 1);
}
else {
    if (a < 3 && 1 > 4) {
        console.log(5);
    }
    else if (a >= 3 && 2 * (a - 2) > 4) {
        console.log(5);
    }
    else {
        if (a % 2 == 0) {
            console.log(6);
        }
        else {
            console.log(7);
        }
    }
}

// switch()
switch (true) {
    case (a > 10 && a > 5):
        console.log((2 * a) + 1);
        break;
    case (a <= 10 && a * 2 > 5):
        console.log((2 * a) + 1);
        break;
    default:
        switch (true){
            case (a < 3 && 1 > 4):
                console.log(5);
                break;
            case (a >= 3 && 2 * (a - 2) > 4):
                console.log(5);
                break;
            default:
                switch (a % 2) {
                    case 0:
                        console.log(6);
                        break;
                    default:
                        console.log(7);
                        break;
                }
        }
}
