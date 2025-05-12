radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(50)

type drivingSignal = {
    x: number;
    y: number;
    z: number
}


let safeKey = "123ABC"
let drivingPackage: drivingSignal = { x: 0, y: 0, z: 0 }
let ready = false

let stringPackage: string

//control.deviceSerialNumber()
//radio.setTransmitSerialNumber(true)

input.onButtonPressed(Button.A, function () {
    ready = true
})

while (ready) {
    radio.sendString(JSON.stringify(drivingPackage))
    basic.pause(20)
}


