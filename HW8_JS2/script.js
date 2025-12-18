function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error (Div by 0)";
    }
    return a / b;
}

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var resultDisplay = document.getElementById("result");
    var finalResult = 0;

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "Please enter valid numbers";
        return;
    }

    switch (operator) {
        case "+":
            finalResult = add(num1, num2);
            break;
        case "-":
            finalResult = subtract(num1, num2);
            break;
        case "*":
            finalResult = multiply(num1, num2);
            break;
        case "/":
            finalResult = divide(num1, num2);
            break;
    }

    if (typeof finalResult === "number") {
        resultDisplay.innerText = "Result = " + finalResult.toFixed(2);
    } else {
        resultDisplay.innerText = finalResult;
    }
}
