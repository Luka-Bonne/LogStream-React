const plusBtn = document.getElementsByClassName("plus")[0];
const minusBtn = document.getElementsByClassName("minus")[0];
const multiplyBtn = document.getElementsByClassName("multiply")[0];
const divideBtn = document.getElementsByClassName("divide")[0];

const resBnt = document.getElementsByClassName("res")[0];

const numberBtns = document.getElementsByClassName("number");


function counting(str){
    let nums = [];
    let s = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            s = s + str[i];
        }
        else {
            nums.push(Number(s));
            s = "";
            nums.push(str[i]);
        }
        if (i === str.length - 1){
            nums.push(Number(s));
            s = "";
        }
    }

    while (nums.length != 1) {
        let num, i;
        const multInd = nums.indexOf('*');
        const divIndex = nums.indexOf('/');
        if (multInd !== -1 && divIndex !== - 1){
            i = min(multInd, divIndex);
        }
        else if (multInd !== -1 && divIndex === - 1){
            i = multInd;
        }
        else if (multInd == -1 && divIndex !== - 1){
            i = divIndex;
        }
        else{
            i = -1;
        }
        
        if (i !== -1){
            if (nums[i] === "*") {
                num = nums[i - 1] * nums[i + 1];
            }
            else {
                num = nums[i - 1] / nums[i + 1];
            }
        }
        else {
            const plusInd = nums.indexOf('+');
            const minusInd = nums.indexOf('-');
            if (plusInd !== -1 && minusInd !== - 1){
                i = min(plusInd, minusInd);
            }
            else if (plusInd !== -1 && minusInd === - 1) {
                i = plusInd;
            }
            else if (plusInd === -1 && minusInd !== - 1){
                i = minusInd;
            }
            
            if (nums[i] === "+") {
                num = nums[i - 1] + nums[i + 1];
            }
            else {
                num = nums[i - 1] - nums[i + 1];
            }
        }
        
        nums.splice(i - 1, 1, num);
        nums.splice(i, 2);
    }
    return nums[0];
};


let list_of_actions = [];
let str = "";


plusBtn.addEventListener('click', () => {
    let str = document.getElementsByClassName("input-txt")[0].value + '+';
    document.getElementsByClassName("input-txt")[0].setAttribute('value', str);
});

minusBtn.addEventListener('click', () => {
    let str = document.getElementsByClassName("input-txt")[0].value + '-';
    document.getElementsByClassName("input-txt")[0].setAttribute('value', str);
});

multiplyBtn.addEventListener('click', () => {
    let str = document.getElementsByClassName("input-txt")[0].value + '*';
    document.getElementsByClassName("input-txt")[0].setAttribute('value', str);
});

divideBtn.addEventListener('click', () => {
    let str = document.getElementsByClassName("input-txt")[0].value + '/';
    document.getElementsByClassName("input-txt")[0].setAttribute('value', str);
});


Array.from(numberBtns).forEach((btn) => {
    btn.addEventListener('click', () => {
        let str = document.getElementsByClassName("input-txt")[0].value + btn.innerHTML;
        document.getElementsByClassName("input-txt")[0].setAttribute('value', str);
    })
});


resBnt.addEventListener('click', () => {
    let str = document.getElementsByClassName("input-txt")[0].value
    let result = counting(str) + '';
    str = str + '=' + result;
    document.getElementsByClassName("input-txt")[0].setAttribute('value', str);
    let newStr = document.getElementsByClassName("history")[0].innerHTML + '\n' + str;
    document.getElementsByClassName("history")[0].innerHTML = newStr;
});