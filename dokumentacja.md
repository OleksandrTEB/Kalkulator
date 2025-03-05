# Kalkulator w Webowy

## Opis
To jest prosty kalkulator napisany w HTML, CSS, JavaScript, który obsługuje podstawowe operacje matematyczne: dodawanie, odejmowanie, mnożenie, dzielenie, a także umożliwia wprowadzanie liczb dziesiętnych i wyczyszczenie ekranu. Kalkulator wyświetla wynik obliczeń bezpośrednio na ekranie i umożliwia dalsze operacje.

## Struktura kodu

### Zmienne(`let`,`cnst`):

- `display`: Element HTML wyświetlający bieżący wynik obliczeń.
- `buttons`: Lista wszystkich przycisków kalkulatora.
- `buttonNum`: Tablica przechowująca przyciski numeryczne.
- `buttonOperator`: Tablica przechowująca przyciski operatorów matematycznych.
- `buttonFunction`: Tablica przechowująca przyciski funkcji (np. `=` i "Wyczyść wszystko").
- `cache`: Tablica przechowująca liczby i operatory w celu obliczeń.
- `sum`: Tablica (nieużywana) pomocnicza dla wyników.
- `cacheValue`: Bieżąca wartość wprowadzona na ekranie.

### Event Listeners:

#### 1. **Przyciski operatorów**:
   - Obsługują operacje matematyczne: dodawanie, odejmowanie, mnożenie, dzielenie.
   - Po kliknięciu operatora, wprowadzona liczba jest zapisywana do pamięci, a ekran jest czyszczony.

#### 2. **Przyciski numeryczne**:
   - Wprowadzają cyfry na ekranie kalkulatora.
   - Po kliknięciu cyfry, wartość jest wyświetlana na ekranie, a także przechowywana w pamięci (`cacheValue`).

#### 3. **Przycisk kropki (dziesiętne)**:
   - Pozwala na wprowadzenie liczby dziesiętnej.
   - Zapobiega dodawaniu podwójnych kropek w jednej liczbie.

#### 4. **Przycisk "Wyczyść wszystko" (AC)**:
   - Czyści ekran oraz resetuje pamięć kalkulatora.

#### 5. **Przycisk "="**:
   - Oblicza wynik na podstawie wprowadzonych liczb i operatorów, a następnie wyświetla go na ekranie.

### Funkcje:

#### `setDisplayValue(value)`
   - **Opis**: Funkcja ustawia wartość na ekranie kalkulatora.
   - **Parametr**: `value` — wartość do wyświetlenia.
   - **Działanie**: Dodaje cyfrę do wyświetlacza i przechowuje ją w pamięci.

#### `clearDisplay()`
   - **Opis**: Funkcja czyszcząca ekran kalkulatora.
   - **Działanie**: Ustawia pusty tekst na ekranie kalkulatora i resetuje `cacheValue`.

#### Funkcje matematyczne: `add(a)`, `subtract(a)`, `multi(a)`, `divide(a)`
   - **Opis**: Funkcje obsługujące odpowiednie operacje matematyczne.
   - **Działanie**: Dodają, odejmują, mnożą lub dzielą dwie liczby przechowywane w pamięci kalkulatora.
   
#### `equal()`
   - **Opis**: Funkcja obliczająca wynik na podstawie operatora.
   - **Działanie**: Sprawdza, czy wszystkie dane są dostępne (liczby i operator), a następnie oblicza wynik operacji. Po obliczeniach wynik jest wyświetlany, a pamięć jest resetowana.

## Podstawowe operacje kalkulatora:

- **Dodawanie**: Kliknięcie przycisku `+` dodaje dwie liczby.
- **Odejmowanie**: Kliknięcie przycisku `-` odejmuje drugą liczbę od pierwszej.
- **Mnożenie**: Kliknięcie przycisku `*` mnoży dwie liczby.
- **Dzielenie**: Kliknięcie przycisku `/` dzieli pierwszą liczbę przez drugą.

## Przykłady użycia:

1. **Dodawanie**:
   - Wpisz `5`, kliknij `+`, wpisz `3`, kliknij `=`.
   - Wynik: `8`.

2. **Dzielenie**:
   - Wpisz `9`, kliknij `/`, wpisz `3`, kliknij `=`.
   - Wynik: `3`.

3. **Wyczyszczenie kalkulatora**:
   - Kliknij przycisk "Wyczyść wszystko" (AC), aby usunąć wszystkie wprowadzone wartości i zresetować kalkulator.

## Wnioski:
Kalkulator jest w miarę prostym narzędziem umożliwiającym wykonywanie podstawowych obliczeń matematycznych w przeglądarce, a jego interfejs jest przyjazny dla użytkownika, z obsługą podstawowych funkcji matematycznych i operacji.