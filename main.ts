input.onButtonPressed(Button.A, function () {
    Bcount += 1
})
input.onButtonPressed(Button.AB, function () {
    ABPressed = 1
    basic.pause(2000)
    if (Bcount > Tcount) {
        basic.showString("BIDEN WON!!")
        soundExpression.happy.play()
    } else if (Tcount > Bcount) {
        basic.showString("TRUMP WON!!")
        soundExpression.mysterious.playUntilDone()
    } else {
        basic.showString("DRAW!!!")
        soundExpression.yawn.play()
    }
})
input.onButtonPressed(Button.B, function () {
    Tcount += 1
})
let ABPressed = 0
let Tcount = 0
let Bcount = 0
Bcount = 0
Tcount = 0
ABPressed = 0
basic.showString("BIDEN")
basic.showArrow(ArrowNames.West)
basic.pause(200)
basic.showString("TRUMP")
basic.showArrow(ArrowNames.East)
basic.pause(200)
basic.forever(function () {
	
})
