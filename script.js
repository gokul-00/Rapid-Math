let quest = document.getElementById('quest');
let ans = document.getElementById('answer');
let inputitem = document.getElementById('inputitem');
let enter = document.getElementById('enter')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

let a=0,b=0;
let num1_digit = 2, num2_digit = 2;
let num1_min, num1_max, num2_min, num2_max;

window.onload = () => {
    minmax(num1_digit,1)
    minmax(num2_digit,2)
    getQuest()
}

enter.addEventListener('click',(e) => {
    e.preventDefault()
    num1_digit = num1.value
    minmax(num1_digit,1)
    num2_digit = num2.value
    minmax(num2_digit,2)
    getQuest()
})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function getQuest(){
    a = getRndInteger(num1_min,num1_max);
    b = getRndInteger(num2_min,num2_max);
    quest.innerHTML = `${a} x ${b} =`;
    ans.innerHTML = "";
}

function answer(){
    ans.innerHTML = a*b;
}

const minmax = (digit,num) => {
    if(num == 1){
        num1_min = 10 ** (digit-1)
        num1_max = (10 ** digit) - 1
    }else{
        num2_min = 10 ** (digit-1)
        num2_max = (10 ** digit) - 1
    }
}

