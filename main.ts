let prava_led_dole: neopixel.Strip = null
let leva_led_dole: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
basic.pause(1000)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
leva_led_dole.showColor(neopixel.colors(NeoPixelColors.Blue))
prava_led_dole.showColor(neopixel.colors(NeoPixelColors.Blue))
leva_led_dole = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
prava_led_dole = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
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
