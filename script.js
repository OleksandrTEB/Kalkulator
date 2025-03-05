// Pobieramy ekran kalkulatora i przyciski
const display = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll(".calculator-keys>button");

let buttonNum = []; // Przechowuje przyciski numeryczne
let buttonOperator = []; // Przechowuje przyciski operatorów
let buttonFunction = []; // Przechowuje przyciski funkcji
let cache = []; // Pamięć na liczby i operatory
let sum = []; // Wynik obliczeń
let cacheValue = ""; // Bieżąca wartość wprowadzona na ekranie

// Iterujemy po wszystkich przyciskach
buttons.forEach((button) => {
    if(button.classList.contains('operator')) { // Obsługuje przyciski operatorów
        buttonOperator.push(button);
        const operator = button.value;
        button.addEventListener('click', (e) => {
            // Dodawanie operatorów do pamięci
            if (cacheValue !== "") {
                cache.push(parseFloat(cacheValue.replace(',', '.'))); // Zamiana przecinka na kropkę
                cache.push(operator); // Dodanie operatora
                cacheValue = "";
                display.innerText = ""; // Czyszczenie ekranu
            }
        });
    } else if(button.classList.contains('decimal')) { // Obsługuje przycisk kropki
        button.addEventListener('click', (e) => {
            if (!cacheValue.includes(',')) { // Zapobiega podwójnym kropkom
                setDisplayValue(e.target.value);
            }
        });
    } else if(button.classList.contains('all-clear')) { // Obsługuje przycisk "Wyczyść wszystko"
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            clearDisplay(); // Czyszczenie ekranu i pamięci
            cache = [];
        });
    } else if(button.classList.contains('equal-sign')) { // Obsługuje przycisk "="
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            equal(); // Obliczanie wyniku
            sum = [];
        });
    } else { // Obsługuje przyciski numeryczne
        buttonNum.push(button);
        button.addEventListener('click', (e) => {
            setDisplayValue(e.target.value); // Wyświetlanie wartości na ekranie
        });
    }
});

// Funkcja ustawiająca wartość na ekranie kalkulatora
function setDisplayValue(value) {
    display.innerText += value; // Dodaje cyfrę do wyświetlacza
    cacheValue += value; // Przechowuje wartość w pamięci
}

// Funkcja czyszcząca ekran kalkulatora
function clearDisplay() {
    display.innerText = "";
    cacheValue = "";
}

// Funkcje obliczeniowe (dodawanie, odejmowanie, mnożenie, dzielenie)
function add(a) {
    cache.push(a);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] + cache[1];
        cache = [sum];
        setDisplayValue(sum);
    }
}

function subtract(a) {
    cache.push(a);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] - cache[1];
        cache = [sum];
        setDisplayValue(sum);
    }
}

function multi(a) {
    cache.push(a);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] * cache[1];
        cache = [sum];
        setDisplayValue(sum);
    }
}

function divide(a) {
    cache.push(a);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] / cache[1];
        cache = [sum];
        setDisplayValue(sum);
    }
}

// Funkcja obliczająca wynik na podstawie operatora
function equal() {
    if (cache.length >= 2 && cacheValue !== "") {
        cache.push(parseFloat(cacheValue.replace(',', '.'))); // Zamiana przecinka na kropkę
        let cacheNum1 = cache[0];
        let operator = cache[1];
        let cacheNum2 = cache[2];
        let result;

        // Wyliczanie wyniku na podstawie operatora
        switch (operator) {
            case '+':
                result = cacheNum1 + cacheNum2;
                break;
            case '-':
                result = cacheNum1 - cacheNum2;
                break;
            case '*':
                result = cacheNum1 * cacheNum2;
                break;
            case '/':
                result = cacheNum1 / cacheNum2;
                break;
        }

        // Wyświetlanie wyniku i zapis do pamięci
        display.innerText = result.toString().replace('.', ',');
        cache = [result];
        cacheValue = result.toString().replace('.', ',');
    }
}
