basic.showIcon(IconNames.Heart)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
basic.pause(500)
cuteBot.forward()
basic.pause(1500)
cuteBot.stopcar()
basic.pause(1000)
cuteBot.backforward()
basic.pause(1500)
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
        . # # # .
        . . # . .
        . . # . .
        . . # # .
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
