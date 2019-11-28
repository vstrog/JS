const RANDOM_FUNC = {
    lower: getLowerLetter,
    upper: getUpperLetter,
    number: getAnyNumber,
    symbol: getAnySymbol
};

const RESULT_ELEMENT = document.getElementById('result');
const LENGTH_ELEMENT = document.getElementById('length');
const UPPERCASE_ELEMENT = document.getElementById('uppercase');
const LOWERCASE_ELEMENT = document.getElementById('lowercase');
const NUMBERS_ELEMENT = document.getElementById('numbers');
const SYMBOLS_ELEMENT = document.getElementById('symbols');
const GENERATE_ELEMENT = document.getElementById('generate');
const CLIPBOARD_ELEMENT = document.getElementById('clipboard');

GENERATE_ELEMENT.addEventListener('click', () => {
    const LENGTH = +LENGTH_ELEMENT.value;
    const INCLUDE_LOWER = LOWERCASE_ELEMENT.checked;
    const INCLUDE_UPPER = UPPERCASE_ELEMENT.checked;
    const INCLUDE_NUMBER = NUMBERS_ELEMENT.checked;
    const INCLUDE_SYMBOL = SYMBOLS_ELEMENT.checked;

    RESULT_ELEMENT.innerText = generatePassword (
        INCLUDE_LOWER,
        INCLUDE_UPPER,
        INCLUDE_NUMBER,
        INCLUDE_SYMBOL,
        LENGTH
    );
});

CLIPBOARD_ELEMENT.addEventListener('click', () =>{
    const TEXT_AREA = document.createElement('textarea');
    const PASSWORD = RESULT_ELEMENT.innerText;

    if(!PASSWORD) {
        return;
    }

    TEXT_AREA.value = PASSWORD;
    document.body.appendChild(TEXT_AREA);
    TEXT_AREA.select();
    document.execCommand('copy');
    TEXT_AREA.remove();
    alert('סיסמא הועתקה בהצלחה!');
})

function generatePassword(lower, upper, number, symbol, LENGTH) {
    let generatedPassword = '';

    const TYPES_COUNT = lower + upper + number + symbol;

    const TYPES_ARRAY = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if(TYPES_COUNT === 0) {
        return '';
    }

    for (let i = 0; i < LENGTH; i+= TYPES_COUNT) {
        TYPES_ARRAY.forEach(type => {
            const FUNC_NAME = Object.keys(type)[0];
            generatedPassword += RANDOM_FUNC[FUNC_NAME]();
        });
    }

    const FINAL_PASSWORD = generatedPassword.slice(0, LENGTH);

    return FINAL_PASSWORD;
}

function getLowerLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getAnyNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getAnySymbol() {
    const SYMBOLS = '!@#$%^&*()_+{}[]",./\|:~?><;';
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}