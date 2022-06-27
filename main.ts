radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # #
            . # # # #
            . # . # .
            `)
        music.playMelody("C5 C5 C5 A B - C C ", 120)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # #
        . # # # #
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
radio.setGroup(1)
