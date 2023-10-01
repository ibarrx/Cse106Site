let output = document.getElementById('output');
let decimalUsed = false;
let operator = '';
let firstNumber = '';
let secondNumber = '';
let previousResult = '';
let currentClass = '';
let currentButton = ''

function appendToOutput(value) {
    if (output.value === '0' || output.value === '-0') {
        output.value = value;
    } else {
        output.value += value;
    }
}

function addDecimal() {
    if (!decimalUsed) {
        output.value += '.';
        decimalUsed = true;
    }
}

function operate(op) {
    operator = op;
    if (previousResult !== '') {
        firstNumber = previousResult;
        previousResult = '';
    } else {
        firstNumber = output.value;
    }
    output.value = '0';
    decimalUsed = false;
}

function calculate() {
    if (previousResult === '') {
        secondNumber = output.value;
    } else {
        firstNumber = output.value;
    }
    switch (operator) {
        case '+':
            output.value = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
            break;
        case '-':
            output.value = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
            break;
        case '*':
            output.value = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
            break;
        case '/':
            if (parseFloat(secondNumber) !== 0) {
                output.value = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
            } else {
                output.value = 'Error';
            }
            break;
    }
    decimalUsed = output.value.includes('.');
    previousResult = output.value;
}

function clearOutput() {
    output.value = '0';
}

function clearAll() {
    output.value = '0';
    decimalUsed = false;
    operator = '';
    firstNumber = '';
    secondNumber = '';
    previousResult = '';
}

function addHover(buttonId){
    if(currentClass != '')
        {
            document.getElementById(currentButton).className = currentClass;
            
        }

        currentClass = document.getElementById(buttonId).className.toString();
        currentButton = buttonId;

        document.getElementById(buttonId).className = 'button:hover';

}


document.addEventListener('keydown', function (event) {
    const key = event.key;
    const buttons = document.querySelectorAll('.number, .clear, .operator, .equals');


    const keyToButtonId = {
        '1': 'btn1',
        '2': 'btn2',
        '3': 'btn3',
        '4': 'btn4',
        '5': 'btn5',
        '6': 'btn6',
        '7': 'btn7',
        '8': 'btn8',
        '9': 'btn9',
        '0': 'btn0',
        '.': 'btnDecimal',
        '=': 'btnEquals',
        'x': 'btnTimes',
        '*': 'btnTimes',
        '+': 'btnPlus',
        'Delete': 'btnClear',
        'Backspace': 'btnAC'
    };


    if (key in keyToButtonId) {
        const buttonId = keyToButtonId[key];

        addHover(buttonId);
        document.getElementById(buttonId).click();

    }
});