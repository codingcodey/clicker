controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    music.baDing.play()
    scene.setBackgroundColor(randint(0, 15))
})
info.setScore(0)
info.startCountdown(10)
