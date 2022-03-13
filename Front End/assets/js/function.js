// Random Number Generator Which will never repeat

function randomNum(addAlpha) {
    let alphaAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let randomNum;

    if (addAlpha == "addAlpha") {
        return randomNum = alphaAZ[Math.floor(Math.random() * alphaAZ.length)] + Math.floor((new Date().getTime() * Math.random() / 92339393)) + alphaAZ[Math.floor(Math.random() * alphaAZ.length)];
    } else {
        return randomNum = Math.floor(new Date().getTime() * Math.random() / 92339393);
    }

}

// Random Number Between Range
function randomNumRange(min, max) {
    let value = NaN;
    if (min && max) {
        value = Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    return value;
};

// For Developers

function incomeSort(income, currency) {

    if (income >= 999) {

        income = (income.toString().split(""));
        income.splice(1, 0, ".");
        income = Number(income.join("")).toFixed(1);

        return `${income}${currency}`;

    } else if (income <= 999) {

        return income + currency;
    }
}

/**
 * Set & Get Item from/in LS
 */

function setItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}