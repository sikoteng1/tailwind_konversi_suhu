function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    
    let celsius;

    switch (inputUnit) {
        case 'C':
            celsius = inputTemp;
            break;
        case 'F':
            celsius = (inputTemp - 32) * 5 / 9;
            break;
        case 'R':
            celsius = inputTemp * 5 / 4;
            break;
        case 'K':
            celsius = inputTemp - 273.15;
            break;
        default:
            celsius = 0;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const reamur = celsius * 4 / 5;
    const kelvin = celsius + 273.15;

    document.getElementById('result').innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)}°C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
        <p>Reamur: ${reamur.toFixed(2)}°R</p>
        <p>Kelvin: ${kelvin.toFixed(2)}°K</p>
    `;
}
