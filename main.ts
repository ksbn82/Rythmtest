let 판정 = 0
function downdown (Leftright: boolean) {
    if (Leftright == false) {
        led.toggle(0, 0)
        led.toggle(1, 0)
        basic.pause(100)
        for (let index = 0; index <= 2; index++) {
            NextLed(index + 1)
            basic.pause(100)
        }
        NextLed(4)
        판정 = 1
        basic.pause(100)
        판정 = 0
    }
}
input.onButtonPressed(Button.A, function () {
    if (판정 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
function NextLed2 (num: number) {
    led.toggle(4, num - 1)
    led.toggle(5, num - 1)
    led.toggle(4, num)
    led.toggle(5, num)
}
input.onButtonPressed(Button.B, function () {
	
})
function NextLed (num: number) {
    led.toggle(0, num - 1)
    led.toggle(1, num - 1)
    led.toggle(0, num)
    led.toggle(1, num)
}
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    downdown(false)
})
