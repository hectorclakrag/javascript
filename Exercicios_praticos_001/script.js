function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img') 
    var data = new Date()
    var hora = data.getHours()
    // var hora = 19
    var min = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'dia.png'
        document.body.style.background = '#85b4e4'
    } else if (hora <= 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'noite.png'
    }
}
