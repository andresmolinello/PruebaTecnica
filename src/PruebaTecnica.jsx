import React from 'react';

function Software() {

    const max = (a,b) => (a > b ? a : b);

    // Se definen los elementos de la función
    const elementos = (pesoMax, peso, calorias, contador) => {
        // Condición de parada
        if (contador === 0 || pesoMax === 0) {
            return 0;
        }
        // Validamos que el peso no sea mayor que el peso maximo
        // En caso de ser mayor la función descarta y pasa al siguiente elemento
        if (peso[contador - 1] > pesoMax) {
            return elementos(pesoMax, peso, calorias, contador - 1);
        } else {    
            return max(
                calorias[contador - 1] + 
                elementos(pesoMax - peso[contador - 1], peso, calorias, contador - 1),
                elementos(pesoMax, peso, calorias, contador -1)
            );
        }


    };

    //Pasamos datos
    const calorias = [3, 5, 2, 8, 3];
    const peso = [5, 3, 5, 1, 2];
    const pesoMax = 10;
    const contador = calorias.length;

    const resultado = elementos(pesoMax, peso, calorias, contador);

    return (
        <div>
            <p>Valor maximo obtenido (calorías): {resultado}</p>
        </div>
    );
}

export default Software;