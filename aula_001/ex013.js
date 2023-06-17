var agoraH = new Date()
var agoraM = new Date()
var hora = agoraH.getHours()
var min = agoraM.getMinutes()

console.log(`Agora sao exatamente ${hora} horas e ${min} minutos. `)

if (hora <= 4) {
    console.log('Tente dormir, pois ainda e madrugada')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}