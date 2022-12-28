basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showString("Hello!")
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
basic.pause(1000)
cuteBot.forward()
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
