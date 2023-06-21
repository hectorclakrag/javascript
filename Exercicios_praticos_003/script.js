function verificar() {
    var ini = document.getElementById('ini'); // Contador
    var fim = document.getElementById('fim'); // Condicao
    var pas = document.getElementById('pas'); // Incremento
    var res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        // window.alert('Ha valores indefinidos, por favor verifique e tente novamente')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'

        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(pas.value);
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p ) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // Contagem decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`  
    }
}



// for (ini,) {

// }