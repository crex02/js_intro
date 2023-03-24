// SCOPE

// const pippo = 'ciao';

// if (true) {

//     console.log(pippo);
//     const pluto = 'javascript';

//     if (true) {
//         console.log(pluto);
//         const paperino = 'pizza';
//     }
//     // console.log (paperino)               non funziona
// }

// // const pippo = 'pippo'            non si possono chiamare due variabili con lo stesso nome

// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 15; i++) {
//         console.log(i); // shadowed variable            ERRORE 
//     }   
// }


//---------------------------------------------------------------------------------
//FUNZIONI

function elevaAlQuadrato(numero) {                        // Funzione Normale = Migliore
    // const risultato = numero * numero;
    // return risultato;
    return numero * numero;
}

const dueAlQuadrato = elevaAlQuadrato(2);
console.log(dueAlQuadrato);

const cinqueAlQuadrato = elevaAlQuadrato(5);
console.log(cinqueAlQuadrato)

console.log(elevaAlQuadrato(50));


const elevaAlQuadrato3 = (numero) => numero * numero;           // Funzione Lambda

console.log(elevaAlQuadrato3(12));




function elevazioneAPotenza(base, esponente) {
    return base ** esponente;
}

console.log(elevazioneAPotenza(3, 4));

//--------------------------------------------------------------------------------------------------------
//FUNZIONI PURE E IMPURE

function scriviNellaConsole(messaggio) {            // Funzione Impura
    console.log(messaggio);
}
scriviNellaConsole('scemo chi legge! xD');


function sommaUno(numero) {                         // Funzione Pura = Migliore da usare
    return numero + 1;
}
console.log(sommaUno(3));


function sommaDue(numero) {                  // Funzione Mista
    const risultato = numero + 2;
    return risultato;
}
console.log(sommaDue(5));

function minimum(a, b) {
    if (b - a >= 0) {
        return a;
    } else {
        return b;
    }
}
console.log(minimum(-6, 4));

//-----------------------------------------------------------------------------------------------------------
//ESERCIZI
// 1) scrivere una funzione che dato un numero se è positivo lo moltiplichi per due
// 2) scrivere una funzione che data una stringa restituisca la sua versione maiuscola
// 3) scrivere una funzione che data una stringa mi restituisca vero se è piu lunga di 10 caratteri altrimenti falso
// 4) scrivere una funzione che restituisca la scacchiera 
// 5) scrivere una funzione che dato un numero resituisca una stringa con la logica FizzBuzz
// 6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale 
// 7) scrivere una funzione che sommi tutti i numeri in un range prestabilito

function moltiplicaPositivo(positivo) {
    if (positivo >= 0) {
        return positivo * 2;
    } else {
        return positivo
    }
}
console.log(moltiplicaPositivo(4));



function rendiMaiuscolo(maiuscolo) {
    return maiuscolo.toUpperCase();
}
console.log(rendiMaiuscolo('ciao'));



function lunghezza(stringa) {
    if (stringa.length >= 10) {
        return true;
    } else {
        return false
    }
}
console.log(lunghezza('677889900000000000'));



function buildChessboard(size) {
    let chessboard = '';

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    chessboard += '#';
                } else {
                    chessboard += ' ';
                }
            } else {
                if (x % 2 === 0) {
                    chessboard += ' '
                } else {
                    chessboard += '#'
                }

            }
        }
        chessboard += '\n'
    }
}
console.log(buildChessboard(6,4));



function logicFizzBuzz(selectedNumber) {
    if (selectedNumber % 3 === 0 && selectedNumber % 5 === 0) {
        return 'FizzBuzz';
    } else if (selectedNumber % 3 === 0) {
        return 'Fizz';
    } else if (selectedNumber % 5 === 0) {
        return 'Buzz';
    }
    return selectedNumber;
}
console.log(logicFizzBuzz(15));




function selectOddChars(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 !== 0) {
            result += text[i];  
        }
    }
    return result;
}
console.log(selectOddChars('ciao'));




function sumRange(startNumber, endNumber) {
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum = sum + i;        
    }
    return sum;
}
console.log(sumRange(0,3));

//---------------------------------------------------------------------------------------------------
// LE FUNZIONI POSSONO USARE ALTRE FUNZIONI

function doubleAndPow3(selectedNumber) {
    // const double = selectedNumber * 2;
    // const pow3 = double ** 3;
    // return pow3;
    const double = makeDouble (selectedNumber);
    const pow3 = makePow3 (double);
    return pow3;
}

function makeDouble(selectedNumber) {
    return selectedNumber * 2;
}

function makePow3(selectedNumber) {
    return selectedNumber ** 3;
}

console.log(doubleAndPow3(2));

function ifMoreThan10CharUpperCase(text) {

    function isMoreThan10CharInside(textToCheck) {  
        return textToCheck.length > 10;
    }
    if (isMoreThan10CharInside(text)) {
        return text.toUpperCase();  
    } else {
        return text;
    }
}
console.log(ifMoreThan10CharUpperCase('torino capitale'));

//-------------------------------------------------------------------ù
//RICORSIONE

function sumRangeRecursive(startNumber, endNumber, accumulator) {
    if (startNumber > endNumber) {
        return accumulator
    }
    const newStart = startNumber + 1;
    const newAccumulator = accumulator + startNumber;
    return sumRangeRecursive(newStart, endNumber, newAccumulator);
    
}
console.log('recursive', sumRangeRecursive(1,3));  // 6
console.log('recursive', sumRangeRecursive(2,3));



function isEven(selectedNumber) {
    if (selectedNumber === 0) {
        return true;
    }
    if (selectedNumber === 1) {
        return false;
    }
    return isEven(selectedNumber - 2);
}
console.log(isEven(0));      // true
console.log(isEven(1));      // false
console.log(isEven(3));      // false
console.log(isEven(8));      // true



function isMyNumberEven(selectedNumber) {
    if (selectedNumber === 0) {
        return true;    
    }
    if (selectedNumber === 1) {
        return false;
    }
    return isMyNumberEven(!selectedNumber - 2)
}

function isMyNumberOdd(selectedNumber) {
    if (selectedNumber === 0) {
        return false;    
    }
    if (selectedNumber === 1) {
        return true;
    }
    return isMyNumberOdd(!selectedNumber - 2)
}

console.log(isMyNumberEven(1));