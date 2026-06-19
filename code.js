let total = 0;
let current = "";
let operator = null;
let input = document.getElementById("display");
let bac = document.getElementById("btnAC");
let bdel = document.getElementById("btnDel");
let bpercent = document.getElementById("btnPercent");
let bdivide = document.getElementById("btnDivide");
let b7 = document.getElementById("btn7");
let b8 = document.getElementById("btn8");
let b9 = document.getElementById("btn9");
let bmultiply = document.getElementById("btnMultiply");
let b4 = document.getElementById("btn4");
let b5 = document.getElementById("btn5");
let b6 = document.getElementById("btn6");
let bminus = document.getElementById("btnMinus");
let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let bplus = document.getElementById("btnPlus");
let b0 = document.getElementById("btn0");
let b00 = document.getElementById("btn00");
let bdot = document.getElementById("btnDot");
let equals = document.getElementById("btnEquals");
function addNumber(btn) {
    btn.addEventListener("click", () => {
        current += btn.value;
        input.value += btn.value ;
    });
}
addNumber(b0);
addNumber(b00);
addNumber(b1);
addNumber(b2);
addNumber(b3);
addNumber(b4);
addNumber(b5);
addNumber(b6);
addNumber(b7);
addNumber(b8);
addNumber(b9);
addNumber(bdot);0
function setOperator(btn) {
    btn.addEventListener("click", () => {
        if (current === "") {
            input.value = total + btn.value;
            return;
        }
        let num = Number(current);
        if (operator === null) {
            total = num;
        } else if (operator === "+") {
            total += num;
        } else if (operator === "-") {
            total -= num;
        } else if (operator === "*") {
            total *= num;
        } else if (operator === "/") {
            total /= num;
        }
        operator = btn.value;
        current = "";
        input.value += operator;
    });
}
setOperator(bplus);
setOperator(bminus);
setOperator(bmultiply);
setOperator(bdivide);
setOperator(bpercent);
bac.addEventListener("click", () => {
    total = 0;
    current = "";
    operator = null;
    input.value = "";
});
bdel.addEventListener("click", () => {
    // current = current.slice(0, -1);
    input.value = input.value.slice(0, -1);
});
equals.addEventListener("click", () => {
    let second = Number(current);
    if (operator === "+") {
        total = total + second;
    }
    else if (operator === "-") {
        total = total - second;
    }
    else if (operator === "*") {
        total = total * second;
    }
    else if (operator === "/") {
        total = total / second;
    }
    else if (operator === "%") {
        total = total % second;
    }
    total = eval(input.value);
    input.value = total;
    current = total.toString();
    operator = null;
});


