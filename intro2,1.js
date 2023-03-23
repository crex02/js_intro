// //incrementi
// let index = 5;
// index = index + 5;
// index+=5;

// let counter = 0;
// counter = counter + 1;
// counter+= 1;
// counter++;

// //-------------------------------------------------------------------
 
// let pluto = 5;
// console.log (pluto++);

// let paperino = 5;
// console.log(++paperino);    //varia in base a paperino 
// console.log(++paperino);

// //----------------------------------------------------------
// // IF ELSE ELSE IF

// let jack = true;
// if (jack) {                            //printa il IF se domanda è vera ed ELSE se è falsa
//     console.log('var merda')
// }
// else{
//     console.log('evviva il var')
// }

// let fava = 1;

// if(fava!==3) {
//     console.log('viva javascript')
// }

// let fede=5;

// if (fede=3) {
//     console.log('qui!')
// }
// else if ( fede===5){
//     console.log('quo!')
// }
// else if ( fede===2){
//     console.log('qui!')
// } 
// else{
//     console.log('sticazzi')
// }

//----------------------------------------------------------------------------------------

// let babbo = 0;
// while (babbo < 10) {
//     index++;
//     console.log(babbo)
// }
// while (babbo > -1) {
//     console.log(babbo)   
// }
// //---------------------------------------------------------------

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// for (let index = 5; index < 100; index+=5) {
//     console.log(index);
// }

// //-----------------------------------------------------------------
//ESERCIZI

//NUMERI DISPARI
// let ciao = 0;
// while (ciao<300) {
//     console.log(ciao);
//     ciao+=2;
// }

// //NUMERI da 10 a 0 e viceversa
// for (let patata = 10; patata >= 0; patata--) {
//     console.log(patata);
// }
// for (let patata = 1; patata <= 10; patata++) {
//     console.log(patata);   
// }

// let index = 10
// let step = -1
// while (index <=10) {
//     console.log(index)
//     if (index === 0) {
//         step=1 
//     }
//     index+=step;
// } 

//CICLI NESTATI

let size = 8;
let board = " ";

for (let i = 1; i < size; i++) {
  for (let j = 1; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board += " ";}
      else { board += "#"; }   }
      board += "\n"; 
    console.log(board);
}


//---------------------------------------------------------------------
// ESERCIZI FILE 
//TRIANGOLO ASTERISCHI
//SOLUZIONE 1
// let string =  ''
// let index = 0   
// while (index<=7) {
//     string=string+'#'
//     index++;
//     console.log(string)
// }

//SOLUZIONE 2
// let string = ''
// while (string.length<7) {
//     string+='#'
//     console.log(string)   
// }

//FIXBUX
// SOLUZIONE 1
// let counter = 1;

// while (counter<=100 ) {
//     console.log(counter);
//     counter++;
    
//     {if((counter%3===0) && (counter%5===0))
//     console.log('FizzBuzz');
//     counter++  }

//     {if(counter%3===0);
//     console.log('Fizz');
//     counter++}

//     {if(counter%5===0);
//     console.log('Buzz');
//     counter++}
// }

//SOLUZIONE 2
// for (let i = 1; i < 101; i++) {
//     if (i%3===0 && i%5===0) {
//         console.log('FizzBuzz')  
//     }
//     else if (i%3===0) {
//         console.log('Fizz')  
//     }
//     else if (i%5===0) {
//         console.log('Buzz')  
//     } 
//     else {console.log(i)}
// }

//SOLUZIONE 3
// for (let i = 1; i < 101; i++) {
//     let result = '';
//     if (i % 3 === 0) {
//         result += 'Fizz'}
//     if (i % 5 === 0) {
//         result += 'Buzz'}
//     if (result) {
//         console.log(result);
//         continue;
//     }
//     console.log(i);   
// }

//SCACCHIERA

// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);    
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i/2);
//     } else if (i % 3 === 0) {
//         console.log(i**3);
//     } else {
//         console.log(i);
//     }
// }

// let misteryNumber = 1
// let notFound = true;
// while (notFound) {
//     const multipleOf2 = misteryNumber % 2 === 0
//     const multipleOf3 = misteryNumber % 3 === 0
//     const multipleOf5 = misteryNumber % 5 === 0
//     if (misteryNumber && multipleOf3 && multipleOf5) {
//         console.log(misteryNumber);
//         notFound = false        
//     } else {
//         misteryNumber++
//     }    
// }

// let riga = '#'

// for (let i = 0; i < 7; i++) {
//     console-log (riga);
//     riga = riga + '#'
// }

// let rigaPari = '# # # # ';
// let rigaDispari = ' # # # #';
// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log(rigaPari)
//     } else { 
//         console.log(rigaDispari)
//     }   
// }


// let scacchiera= '';

// for (let y = 0; y < 4; y++) {
//     for (let x = 0; x < 4; x++) {
//         if (y % 2 === 0) {
//             if (x % 2 === 0) {
//                 scacchiera+='#';               
//             } else {
//                 scacchiera+=' ';
//             }
//         } else {
//             if(x % 2 === 0) {
//                 scacchiera+=' '
//             } else {
//                 scacchiera+='#'
//             }
            
//         }
//     }     
//     scacchiera+='\n'
// }
// console.log (scacchiera);
