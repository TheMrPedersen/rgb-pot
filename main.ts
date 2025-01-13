input.onButtonPressed(Button.A, function () {
    potReading += 1
})
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
let potReading = pins.analogReadPin(AnalogReadWritePin.P1)
basic.forever(function () {
    strip.showColor(neopixel.rgb(potReading, potReading + 20, potReading + 40))
})
