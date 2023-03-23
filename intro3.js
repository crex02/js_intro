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


const elevaAlQuadrato3 = (numero) => numero*numero;           // Funzione Lambda

console.log (elevaAlQuadrato3(12));




function elevazioneAPotenza(base, esponente) {
    return base ** esponente;
}

console.log(elevazioneAPotenza(3,4));

//--------------------------------------------------------------------------------------------------------
//FUNZIONI PURE E IMPURE

function scriviNellaConsole(messaggio) {            // Funzione Impura
    console.log(messaggio);
}
scriviNellaConsole('scemo chi legge! xD');


function sommaUno(numero) {                         // Funzione Pura = Migliore da usare
    return numero +1;
}
console.log(sommaUno(3));


function sommaDue(numero) {                  // Funzione Mista
    const risultato = numero + 2;
    return risultato;
}
console.log(sommaDue(5));

//-----------------------------------------------------------------------------------------------------------
//ESERCIZI
// 1) scrivere una funzione che dato un numero se è positivo lo moltiplichi per due
// 2) scrivere una funzione che data una stringa restituisca la sua versione maiuscola
// 3) scrivere una funzione che data una stringa mi restituisca vero se è piu lunga di 10 caratteri altrimenti falso
// 4) scrivere una funzione che restituisca la scacchiera 
// 5) scrivere una funzione che dato un numero resituisca una stringa con la logica FizzBuzz
// 6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale 






