// In funzione del valore numerico ricevuto, verrà emessa una melodia diversa. Il valore 1 viene ricevuto dal Box 2 ed il valore 2 viene ricevuto dal box 3
radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.SmallDiamond)
    if (receivedNumber == 1) {
        music.playMelody("C C5 G C G C5 G C ", 800)
        basic.showIcon(IconNames.Diamond)
    }
    if (receivedNumber == 2) {
        music.playMelody("C D E F C D E F ", 800)
        basic.showIcon(IconNames.Diamond)
    }
    basic.showIcon(IconNames.SmallDiamond)
})
radio.setGroup(1)
basic.showIcon(IconNames.SmallDiamond)
