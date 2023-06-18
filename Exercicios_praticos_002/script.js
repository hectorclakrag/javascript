function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) == 0) {
        window.alert('[ERRO} Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'homen_bebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'homen_joven.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homen_adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'homen_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'mulher_bebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'mulher_joven.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher_adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}
