radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)
radio.setTransmitSerialNumber(true)
console.log(control.deviceSerialNumber())

let run: string = "run";
let turn: string = "turn";
let mid: string = "mid";

function sendApply(state:string) {
    radio.sendString(state)
    basic.showString(state, 0)
}

input.onButtonPressed(Button.A, function () {
    sendApply(run) //levo
})

input.onButtonPressed(Button.B, function () {
    sendApply(turn) //pravo
    console.log(control.deviceSerialNumber())
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    sendApply(mid) //mid
})
