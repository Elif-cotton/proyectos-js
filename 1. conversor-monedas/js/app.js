var valorEnDolar = parseFloat(prompt("Ingrese el valor en dólares a convertir a pesos mexicanos:"));

// Verificar si el valor ingresado es un número válido
if (isNaN(valorEnDolar)) {
    alert("Por favor, ingrese un número válido.");
} else {
    
    var cotizacionEnPesos = 16.893;  

    // Calcular el valor en pesos mexicanos
    var valorEnPesos = valorEnDolar * cotizacionEnPesos;
    
    // Redondear el resultado a 2 decimales
    valorEnPesos = valorEnPesos.toFixed(2);

    // Mostrar el resultado al usuario
    alert("$" + valorEnPesos);
}