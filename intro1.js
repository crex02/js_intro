console.log('this is a string', 'hello world');
console.log('this is a number', 133.66);
console.log('this is a boolean', false);
console.log('i\'m so tired!');

//----------------------------------------------------------------------------------------------------------------------
//OPERATORI MATEMATICI

console.log('somma',10 + 5);                        //somma
console.log('sottrazione',10 - 5);                  //sottrazione
console.log('moltiplicazione',10 * 5);              //moltiplicazione    
console.log('divisione',10 / 5);                    //divisione
console.log('modulo',10 % 3);                       //modulo (resto divisione)
console.log('potenza',10 ** 2);                     //potenza
console.log('radice quadrata', Math.sqrt(16));      //radice quadrata (MATH)

console.log('il numero 11 è pari?', 11%2 === 0);

console.log('senza parentesi', 10+5*2);
console.log('con parentesi', (10+5)*2);

//--------------------------------------------------------------------------------
//OPERATORI DI STRINGHE

console.log('la casa di mia nonna' + 'è molto bella');   //concatenazione

console.log(`la somma di 5 e 10 è ${10+5}`);             //stringa interpolata (back-tic usando ALT + tastierino numerico)

//-----------------------------------------------------------------------------------
//OPERATORI DI CONFRONTO

console.log('10' == 10);               //sbagliato
console.log('10' === 10);              //giusto

console.log(10 === 10);                 //uguaglianza tra numeri
console.log('ciao'=== 'ciao');          //uguaglianza tra stringhe
console.log(false === true);           //uguaglianza tra booleani

console.log(10 !== 10);                 //disuguaglianza tra numeri
console.log('pippo' !== 'PIPPO');       //disuguaglianza tra stringhe    
console.log(true !== false);            //disuguaglianza tra booleani

console.log(10 > 5);                     //maggiore
console.log(10 >= 10);                   //maggiore uguale
console.log(10 < 5);                     //minore
console.log(10 <= 5);                    //minore uguale

//-------------------------------------------------------------------------
//OPERATORI LOGICI

console.log('operatore NOT (true)', !true);      //NOT
console.log('operatore NOT (false)', !false);      //NOT

console.log('operatore AND (true true)',true && true);           //AND
console.log('operatore AND (true false)',true && false);        //AND
console.log('operatore AND (false true)',false && true);         //AND
console.log('operatore AND (false false)',false && false);      //AND

console.log('operatore OR (true true)',true || true);           //OR
console.log('operatore OR (true false)',true || false);         //OR
console.log('operatore OR (false true)',false || true);         //OR
console.log('operatore OR (false false)',false || false);      //OR

//-------------------------------------------------------------------------------------
//OPERATORE TYPEOF

console.log('typeof 12', typeof 12);
console.log('typeof "hello world"', typeof 'hello world');
console.log('typeof true', typeof true);

//----------------------------------------------------------------------------------------------------
//OPERATORI PARTICOLARI

console.log('infinito positivo', Infinity);              //Infinity
console.log('infinito negativo', -Infinity);             //Infinity

console.log('Not a Number', NaN);                        //NaN
console.log('0 diviso 0', 0/0)                           //Nan

console.log('undefined', undefined)                      //undefined
console.log('null',null)                                 //null




















