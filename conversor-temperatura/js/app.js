/*var nombreUsuario = "Marianna";
var temperaturaCelsius = 25; 
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
var temperaturaKelvin = temperaturaCelsius + 273;

alert('Hola ' + nombreUsuario + '! ' + temperaturaCelsius + ' grados Celsius corresponden a ' 
+ temperaturaFahrenheit + ' grados Fahrenheit y ' + temperaturaKelvin + ' Kelvin.');*/


var nombreUsuario = prompt("Por favor, ingrese su nombre:");

if (nombreUsuario !== null && nombreUsuario !== "") {

    var temperaturaCelsius = parseFloat(prompt("Hola " + nombreUsuario + "! Ingrese la temperatura en grados Celsius:"));

    // Verificar si la temperatura ingresada es un número válido
    if (!isNaN(temperaturaCelsius)) {
        
        var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

        var temperaturaKelvin = temperaturaCelsius + 273;

        alert('Hola ' + nombreUsuario + '! ' + temperaturaCelsius + ' grados Celsius corresponden a '
         + temperaturaFahrenheit.toFixed(2) + ' grados Fahrenheit y ' + temperaturaKelvin.toFixed(2) +
          ' Kelvin.');
    } else {
        
        alert("Por favor, ingrese una temperatura válida.");
    }
} else {
    
    alert("Por favor, ingrese su nombre.");
}