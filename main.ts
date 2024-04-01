input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    _1 = randint(1, 4)
    if (_1 == 1) {
        basic.showArrow(ArrowNames.North)
    } else {
        if (_1 == 2) {
            basic.showArrow(ArrowNames.East)
        } else {
            if (_1 == 3) {
                basic.showArrow(ArrowNames.South)
            } else {
                if (_1 == 4) {
                    basic.showArrow(ArrowNames.West)
                }
            }
        }
    }
})
let _1 = 0
basic.showIcon(IconNames.TShirt)
