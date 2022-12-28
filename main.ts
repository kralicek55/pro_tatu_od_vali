basic.showIcon(IconNames.Heart)
basic.pause(1000)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
cuteBot.forward()
basic.pause(1000)
cuteBot.forward()
basic.pause(1000)
cuteBot.stopcar()
basic.forever(function () {
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        # . . # .
        # . . # .
        . # # . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        # . . # .
        # . . # .
        . # # . #
        `)
    basic.pause(1000)
})
