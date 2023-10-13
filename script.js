function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celsius');
    const loadingSpinner = document.getElementById('loading-spinner');

    loadingSpinner.style.display = 'block';

    setTimeout(function () {
        if (fahrenheitInput.value !== '') {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            const celsius = (fahrenheit - 32) * (5/9);
            celsiusInput.value = celsius.toFixed(2);
        } else {
            alert('Please enter a value in Fahrenheit');
        }

        loadingSpinner.style.display = 'none';
    }, 1500);
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const loadingSpinner = document.getElementById('loading-spinner');

    loadingSpinner.style.display = 'block';

    setTimeout(function () {
        if (celsiusInput.value !== '') {
            const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            alert('Please enter a value in Celsius');
        }

        loadingSpinner.style.display = 'none';
    }, 1500);
}
