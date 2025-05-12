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

//control.deviceSerialNumber()
//radio.setTransmitSerialNumber(true)

basic.forever(function () {
    drivingPackage.x += 1
    basic.showNumber(drivingPackage.x)
    basic.pause(20)
})
