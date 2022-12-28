let leva_led_dole: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
basic.pause(1000)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
leva_led_dole.showColor(neopixel.colors(NeoPixelColors.Blue))
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
