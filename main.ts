radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(50)
radio.setTransmitSerialNumber(true)


type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let drivingPackage: drivingSignal = {x: 0, y: 0, z: 0 }
let ready = false
let serialNumber = control.deviceSerialNumber()
let encodedSerialNumber = serialNumber ^ 1234

radio.sendValue("data", encodedSerialNumber)

function calibrate() {
    drivingPackage = { x: 0, y: 0, z: 0 }
    basic.showString("X")
}


input.onButtonPressed(Button.A, function () {
    ready = true
})

input.onButtonPressed(Button.B, function () {
    ready = false
    calibrate()
})


basic.forever(function() {
    if(ready) {
        basic.showString("R")
        drivingPackage = { x: 1, y: 1, z: 1 }
        radio.sendString(JSON.stringify(drivingPackage))
    }
    basic.pause(200)
})

