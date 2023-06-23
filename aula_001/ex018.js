function parimp(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
let n = 10
let res = parimp(n)
console.log(`O numero ${n} e um numero ${res}`)


// parametro semidefinido para evitar o NaN(Not  a number)
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))


// podemos jogar a funcao dentro de uma variavel
let v = function(x) {
    return x*2
}
console.log(v(5))


function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))




// RECURSIVIDADE
function factorial2(n) {
    if(n == 1) {
        return 1
    } else {
        return n * factorial2(n-1)
    }
}

console.log(factorial2(5))