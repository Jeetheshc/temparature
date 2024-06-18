document.getElementById('temp').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const t = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    let result;
    
    if (fromUnit === 'c' && toUnit === 'f') {
        result = (t * 9/5) + 32;
    } else if (fromUnit === 'c' && toUnit === 'k') {
        result = t + 273.15;
    } else if (fromUnit === 'f' && toUnit === 'c') {
        result = (t - 32) * 5/9;
    } else if (fromUnit === 'f' && toUnit === 'k') {
        result = (t - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'k' && toUnit === 'c') {
        result = t - 273.15;
    } else if (fromUnit === 'k' && toUnit === 'f') {
        result = (t - 273.15) * 9/5 + 32;
    } else {
        result = t;
    }
    
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
});
