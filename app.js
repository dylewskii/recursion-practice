const powerConfirm = document.getElementById("power-confirm");
const baseField = document.getElementById("base-field");
const expoField = document.getElementById("expo-field");
const answer = document.getElementById("answer");


const power = function (base, expo) {
    if (expo === 0) return 1;
    if (expo < 0) return 1 / power(base, -expo);

    return base * power(base, expo - 1);
}

powerConfirm.addEventListener(("click"), (e) => {
    const base = baseField.value;
    const expo = expoField.value;

    const result = power(base, expo);
    answer.textContent = result;

})