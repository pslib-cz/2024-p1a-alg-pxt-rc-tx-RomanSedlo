radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)
radio.setTransmitSerialNumber(true)
control.deviceSerialNumber()

type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let drivingPackage: drivingSignal = {x: 0, y: 0, z: 0 }
let ready = false
let serialNumber = control.deviceSerialNumber()


function calibrate() {
    drivingPackage = { x: 0, y: 0, z: 0 }
    music.play(music.stringPlayable("A3 C4 E4 A4", 200), music.PlaybackMode.UntilDone)
    basic.showString("X")
}


input.onButtonPressed(Button.A, function () {
    ready = true
    music.play(music.stringPlayable("C4 E4 G4 C5", 200), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.B, function () {
    ready = false
    calibrate()
})


basic.forever(function() {
    if(ready) {
        basic.showString("R")
        drivingPackage.x = input.acceleration(Dimension.X)
        drivingPackage.y = input.acceleration(Dimension.Y)
        drivingPackage.z = input.acceleration(Dimension.Z)
        drivingPackage = { x: 1, y: 1, z: 1 }
        radio.sendString(JSON.stringify(drivingPackage))
    }
    basic.pause(200)
})

