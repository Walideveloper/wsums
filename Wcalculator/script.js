function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || ''; // Using eval for simplicity, but beware of security risks
    } catch (error) {
        display.value = 'Error';
    }
}
