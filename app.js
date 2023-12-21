// 1) POWER
const baseField = document.getElementById("base-field");
const expoField = document.getElementById("expo-field");
const powerConfirm = document.getElementById("power-confirm");
const powerAnswer = document.getElementById("power-answer");


const power = function (base, expo) {
    if (expo === 0) return 1;
    if (expo < 0) return 1 / power(base, -expo);

    return base * power(base, expo - 1);
}

powerConfirm.addEventListener(("click"), () => {
    const base = baseField.value;
    const expo = expoField.value;

    const result = power(base, expo);
    powerAnswer.textContent = result;

})

// 2) FACTORIAL
const factorialField = document.getElementById("factorial-field");
const factorialConfirm = document.getElementById("factorial-confirm");
const factorialAnswer = document.getElementById("factorial-answer");

const factorial = function (num){
    if (num <= 0) return 1;
    return num * factorial(num - 1);
}

factorialConfirm.addEventListener(("click"), () => {
    const num = factorialField.value;

    const result = factorial(num);
    factorialAnswer.textContent = result;
})

