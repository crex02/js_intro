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

let size = 8
let board = ' ';

for (let i = 1; i < size; i++); {
    for (let j = 1; j < size; j++) {
        if ((i + j) % 2=== 0){
            board += ' ';}
            else { board += '#'}
            board += '\n'   
        }
    console.log(board)    
}
