let 속도 = 0
let 판정 = 0
function downdown (Leftright: boolean) {
    속도 = 100
    if (Leftright == false) {
        led.toggle(0, 0)
        led.toggle(1, 0)
        basic.pause(속도)
        NextLed(1)
        basic.pause(속도)
        NextLed(2)
        basic.pause(속도)
        판정 = 1
        NextLed(3)
        basic.pause(속도)
        NextLed(4)
        basic.pause(속도)
        판정 = 0
    }
}
input.onButtonPressed(Button.A, function () {
    if (판정 == 1) {
        for (let index = 0; index <= 4; index++) {
            for (let inbdex2 = 0; inbdex2 <= 4; inbdex2++) {
                led.plot(inbdex2, index)
            }
        }
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
