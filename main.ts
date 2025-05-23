radio.setGroup(12)
radio.setTransmitPower(7)
radio.setFrequencyBand(39)
radio.setTransmitSerialNumber(true)
console.log(control.deviceSerialNumber())

type drivingSignal = {
    x: number;
    y: number;
    z: number
}

let drivingPackage: drivingSignal = { x: 0, y: 0, z: 0 }
let stringPackage: string
let stopPackage: string
let ready: boolean


input.onButtonPressed(Button.A, function () {
    ready = true
    music.play(music.stringPlayable("C4 E4 G4 C5", 800), music.PlaybackMode.UntilDone)
})


basic.forever(function () {
    if (ready) {
        basic.showString("R")
        drivingPackage.x = input.acceleration(Dimension.X)
        drivingPackage.y = input.acceleration(Dimension.Y)
        drivingPackage.z = input.acceleration(Dimension.Z)
        stringPackage = `${drivingPackage.x},${drivingPackage.y},${drivingPackage.z}`
        radio.sendString(stringPackage)
    }
    basic.pause(5)
})

input.onButtonPressed(Button.B, function () {
    ready = false
    basic.pause(10)
    stopPackage = "stop"
    radio.sendString(stopPackage)
    basic.showString("X")
    music.play(music.stringPlayable("A3 C4 E4 A4", 800), music.PlaybackMode.UntilDone)
})