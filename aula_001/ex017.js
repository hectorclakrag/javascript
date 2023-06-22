let num = [5, 8, 2, 9, 3];
num.push(1)
num.sort()
// for(var c = 0; c < num.length; c++) {
//     console.log(`A posicao ${c} tem os numeros: ${num[c]}`);
// }


// ideal para arrays e objetos!!! 
for(let pos in num) {
    console.log(`A posicao ${pos} tem os numeros: ${num[pos]}`);
}



let pos = num.indexOf(4)


if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor esta na posicao ${pos}`)
}
