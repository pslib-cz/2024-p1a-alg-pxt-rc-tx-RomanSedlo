radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)
radio.setTransmitSerialNumber(true)

type drivingSignal = {
    k: number;
    x: number;
    y: number;
    z: number
}

let keySqequence: Array<number> = [4, 8, 6, 1, 5, 3, 4, 7, 2, 6, 0, 3, 9, 4, 8, 2, 6, 3, 7, 5, 2, 1, 0, 6, 8, 3, 5, 9];

let drivingPackage: drivingSignal = { k: keySqequence[0], x: 0, y: 0, z: 0 }
let ready = false

function calibrate() {
    drivingPackage = { k: keySqequence[0], x: 0, y: 0, z: 0 }
    basic.showString("X")
    music.play(music.stringPlayable("A3 C4 E4 A4", 400), music.PlaybackMode.UntilDone)
}


input.onButtonPressed(Button.A, function () {
    ready = true
    music.play(music.stringPlayable("C4 E4 G4 C5", 400), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.B, function () {
    calibrate()
    ready = false
})


basic.forever(function () {
    if (ready) {
        basic.showString("R")
        drivingPackage.x = input.acceleration(Dimension.X)
        drivingPackage.y = input.acceleration(Dimension.Y)
        drivingPackage.z = input.acceleration(Dimension.Z)
        drivingPackage.k = keySqequence[1]
        radio.sendString(JSON.stringify(drivingPackage))
    }
    basic.pause(200)
})
