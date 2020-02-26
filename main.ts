namespace SpriteKind {
    export const BG = SpriteKind.create()
    export const PowerUp = SpriteKind.create()
    export const PowerDown = SpriteKind.create()
}
function powerdown () {
    projectile3 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -73, 0)
    projectile3.setKind(SpriteKind.PowerDown)
    projectile3.setPosition(170, Math.randomRange(0, 100))
    animation.runImageAnimation(
    projectile3,
    [img`
. . . . . . . c c . . . . . . . 
. . . . . . c f f c . . . . . . 
. . . . . . c f f c . . . . . . 
. . . . . c f f f f c . . . . . 
. . . . . c f f f f c . . . . . 
. c c c c f f f f f f c c c c . 
c f f f f f f f f f f f f f f c 
. c f f f f f f f f f f f f c . 
. . c f f f f f f f f f f c . . 
. . . c f f f f f f f f c . . . 
. . . c f f f f f f f f c . . . 
. . . c f f f f f f f f c . . . 
. . c f f f f c c f f f f c . . 
. . c f f f c . . c f f f c . . 
. . c f f c . . . . c f f c . . 
. . . c c . . . . . . c c . . . 
`,img`
. . . . . . . . . f f . . . . . 
. . . . . . . . f f a f . . . . 
. . . . . . . . f a a f . . . . 
. . f f f . . f a a a f . . . . 
. f a a a f f a a a a f . . . . 
. f a a a a a a a a a a f . . . 
. . f a a a a a a a a a a f f . 
. . . f a a a a a a a a a a a f 
. . . . f a a a a a a a a a f f 
. . . f a a a a a a a a a f f . 
. . f a a a a a a a a f f . . . 
. . f a a a a a a a a f . . . . 
. f a a a a f f a a a f . . . . 
. f a a f f . . f a a f . . . . 
. f f f . . . . f f a f . . . . 
. . . . . . . . . f f . . . . . 
`,img`
. . . c c . . . . . . c c . . . 
. . c f f c . . . . c f f c . . 
. . c f f f c . . c f f f c . . 
. . c f f f f c c f f f f c . . 
. . . c f f f f f f f f c . . . 
. . . c f f f f f f f f c . . . 
. . . c f f f f f f f f c . . . 
. . c f f f f f f f f f f c . . 
. c f f f f f f f f f f f f c . 
c f f f f f f f f f f f f f f c 
. c c c c f f f f f f c c c c . 
. . . . . c f f f f c . . . . . 
. . . . . c f f f f c . . . . . 
. . . . . . c f f c . . . . . . 
. . . . . . c f f c . . . . . . 
. . . . . . . c c . . . . . . . 
`,img`
. . . . . f f . . . . . . . . . 
. . . . f a f f . . . . . . . . 
. . . . f a a f . . . . . . . . 
. . . . f a a a f . . f f f . . 
. . . . f a a a a f f a a a f . 
. . . f a a a a a a a a a a f . 
. f f a a a a a a a a a a f . . 
f a a a a a a a a a a a f . . . 
f f a a a a a a a a a f . . . . 
. f f a a a a a a a a a f . . . 
. . . f f a a a a a a a a f . . 
. . . . f a a a a a a a a f . . 
. . . . f a a a f f a a a a f . 
. . . . f a a f . . f f a a f . 
. . . . f a f f . . . . f f f . 
. . . . . f f . . . . . . . . . 
`],
    100,
    true
    )
}
function hover () {
    if (info.score() >= 3) {
        info.changeScoreBy(-3)
        animation.runImageAnimation(
        star,
        [img`
. . . . . . . 1 . . . . . . . . 
. . . . . . . 4 1 . . . . . . . 
. . . . . . 1 4 4 1 . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . 1 4 5 5 4 1 . . . . . 
. . . . . 4 5 5 5 5 4 1 . . . . 
. . . . 1 4 5 5 5 5 5 4 4 1 . . 
. . . 1 4 5 5 4 5 5 4 1 1 4 1 . 
. . 1 4 5 5 1 1 4 1 1 1 4 1 . . 
. . 4 4 5 5 5 5 5 5 5 4 1 . . . 
. . . 1 4 4 5 5 4 5 5 5 4 . . . 
. . . . 1 4 5 5 4 4 5 5 4 1 . . 
. . . . 1 4 5 4 1 1 4 5 5 1 . . 
. . . . . 4 4 1 . . . 1 5 4 . . 
. . . . . 4 1 . . . . . . 1 . . 
. . . . . 1 . . . . . . . . . . 
`,img`
. . . . . . . 5 . . . . . . . . 
. . . . . . . 1 5 . . . . . . . 
. . . . . . 5 1 1 5 . . . . . . 
. . . . . . 1 4 4 1 . . . . . . 
. . . . . 5 1 4 4 1 5 . . . . . 
. . . . . 1 4 4 4 4 1 5 . . . . 
. . . . 5 1 4 4 4 4 4 1 1 5 . . 
. . . 5 1 4 4 1 4 4 1 4 4 1 5 . 
. . 5 1 4 4 5 5 1 5 5 4 1 5 . . 
. . 1 1 4 4 4 4 4 4 4 1 5 . . . 
. . . 5 1 1 4 4 1 4 4 4 1 . . . 
. . . . 5 1 4 4 1 1 4 4 1 5 . . 
. . . . 5 1 4 1 5 5 1 4 4 5 . . 
. . . . . 1 1 5 . . . 5 4 1 . . 
. . . . . 1 5 . . . . . . 5 . . 
. . . . . 5 . . . . . . . . . . 
`,img`
. . . . . . . 4 . . . . . . . . 
. . . . . . . 5 4 . . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . 5 1 1 5 . . . . . . 
. . . . . 4 5 1 1 5 4 . . . . . 
. . . . . 5 1 1 1 1 5 4 . . . . 
. . . . 4 5 1 1 1 1 1 5 5 4 . . 
. . . 4 5 1 1 5 1 1 5 1 1 5 4 . 
. . 4 5 1 1 4 4 5 4 4 1 5 4 . . 
. . 5 5 1 1 1 1 1 1 1 5 4 . . . 
. . . 4 5 5 1 1 5 1 1 1 5 . . . 
. . . . 4 5 1 1 5 5 1 1 5 4 . . 
. . . . 4 5 1 5 4 4 5 1 1 4 . . 
. . . . . 5 5 4 . . . 4 1 5 . . 
. . . . . 5 4 . . . . . . 4 . . 
. . . . . 4 . . . . . . . . . . 
`,img`
. . . . . . . 4 . . . . . . . . 
. . . . . . . 5 4 . . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . 5 1 1 5 . . . . . . 
. . . . . 4 5 1 1 5 4 . . . . . 
. . . . . 5 1 1 1 1 5 4 . . . . 
. . . . 4 5 4 1 1 4 1 5 5 4 . . 
. . . 4 5 1 4 5 1 4 5 1 1 5 4 . 
. . 4 5 1 1 5 4 1 5 4 1 5 4 . . 
. . 5 5 1 1 1 1 1 1 1 5 4 . . . 
. . . 4 5 5 1 1 5 1 1 1 5 . . . 
. . . . 4 5 1 1 5 5 1 1 5 4 . . 
. . . . 4 5 1 5 4 4 5 1 1 4 . . 
. . . . . 5 5 4 . . . 4 1 5 . . 
. . . . . 5 4 . . . . . . 4 . . 
. . . . . 4 . . . . . . . . . . 
`],
        150,
        false
        )
        star.vy = 0
        star.ay = 0
        pause(250)
        star.ay = 300
    } else {
        star.say("Need more points.", 300)
    }
}
function hero () {
    star = sprites.create(img`
. . . . . . . 4 . . . . . . . . 
. . . . . . . 5 4 . . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . 5 1 1 5 . . . . . . 
. . . . . 4 5 1 1 5 4 . . . . . 
. . . . . 5 1 1 1 1 5 4 . . . . 
. . . . 4 5 4 1 1 4 1 5 5 4 . . 
. . . 4 5 1 4 5 1 4 5 1 1 5 4 . 
. . 4 5 1 1 5 4 1 5 4 1 5 4 . . 
. . 5 5 1 1 1 1 1 1 1 5 4 . . . 
. . . 4 5 5 1 1 5 1 1 1 5 . . . 
. . . . 4 5 1 1 5 5 1 1 5 4 . . 
. . . . 4 5 1 5 4 4 5 1 1 4 . . 
. . . . . 5 5 4 . . . 4 1 5 . . 
. . . . . 5 4 . . . . . . 4 . . 
. . . . . 4 . . . . . . . . . . 
`, SpriteKind.Player)
    star.ay = 300
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    hover()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    projectile2.destroy()
    star.say("+3 points", 500)
})
function powerup () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -73, 0)
    projectile2.setKind(SpriteKind.PowerUp)
    projectile2.setPosition(170, Math.randomRange(0, 100))
    animation.runImageAnimation(
    projectile2,
    [img`
. . . . . . . 4 4 . . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . 4 5 5 5 5 4 . . . . . 
. . . . . 4 5 5 5 5 4 . . . . . 
. 4 4 4 4 5 5 5 5 5 5 4 4 4 4 . 
4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
. . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
. . . 4 5 5 5 5 5 5 5 5 4 . . . 
. . . 4 5 5 5 5 5 5 5 5 4 . . . 
. . . 4 5 5 5 5 5 5 5 5 4 . . . 
. . 4 5 5 5 5 4 4 5 5 5 5 4 . . 
. . 4 5 5 5 4 . . 4 5 5 5 4 . . 
. . 4 5 5 4 . . . . 4 5 5 4 . . 
. . . 4 4 . . . . . . 4 4 . . . 
`,img`
. . . . . . . . . 5 5 . . . . . 
. . . . . . . . 5 5 1 5 . . . . 
. . . . . . . . 5 1 1 5 . . . . 
. . 5 5 5 . . 5 1 1 1 5 . . . . 
. 5 1 1 1 5 5 1 1 1 1 5 . . . . 
. 5 1 1 1 1 1 1 1 1 1 1 5 . . . 
. . 5 1 1 1 1 1 1 1 1 1 1 5 5 . 
. . . 5 1 1 1 1 1 1 1 1 1 1 1 5 
. . . . 5 1 1 1 1 1 1 1 1 1 5 5 
. . . 5 1 1 1 1 1 1 1 1 1 5 5 . 
. . 5 1 1 1 1 1 1 1 1 5 5 . . . 
. . 5 1 1 1 1 1 1 1 1 5 . . . . 
. 5 1 1 1 1 5 5 1 1 1 5 . . . . 
. 5 1 1 5 5 . . 5 1 1 5 . . . . 
. 5 5 5 . . . . 5 5 1 5 . . . . 
. . . . . . . . . 5 5 . . . . . 
`,img`
. . . 4 4 . . . . . . 4 4 . . . 
. . 4 5 5 4 . . . . 4 5 5 4 . . 
. . 4 5 5 5 4 . . 4 5 5 5 4 . . 
. . 4 5 5 5 5 4 4 5 5 5 5 4 . . 
. . . 4 5 5 5 5 5 5 5 5 4 . . . 
. . . 4 5 5 5 5 5 5 5 5 4 . . . 
. . . 4 5 5 5 5 5 5 5 5 4 . . . 
. . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
. 4 4 4 4 5 5 5 5 5 5 4 4 4 4 . 
. . . . . 4 5 5 5 5 4 . . . . . 
. . . . . 4 5 5 5 5 4 . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . . 4 4 . . . . . . . 
`,img`
. . . . . 5 5 . . . . . . . . . 
. . . . 5 1 5 5 . . . . . . . . 
. . . . 5 1 1 5 . . . . . . . . 
. . . . 5 1 1 1 5 . . 5 5 5 . . 
. . . . 5 1 1 1 1 5 5 1 1 1 5 . 
. . . 5 1 1 1 1 1 1 1 1 1 1 5 . 
. 5 5 1 1 1 1 1 1 1 1 1 1 5 . . 
5 1 1 1 1 1 1 1 1 1 1 1 5 . . . 
5 5 1 1 1 1 1 1 1 1 1 5 . . . . 
. 5 5 1 1 1 1 1 1 1 1 1 5 . . . 
. . . 5 5 1 1 1 1 1 1 1 1 5 . . 
. . . . 5 1 1 1 1 1 1 1 1 5 . . 
. . . . 5 1 1 1 5 5 1 1 1 1 5 . 
. . . . 5 1 1 5 . . 5 5 1 1 5 . 
. . . . 5 1 5 5 . . . . 5 5 5 . 
. . . . . 5 5 . . . . . . . . . 
`],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    star.vy = -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerDown, function (sprite, otherSprite) {
    info.changeScoreBy(-3)
    projectile3.destroy()
    star.say("-3 points", 500)
})
function beams () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topimage = img`
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . c 2 d 1 1 d 2 c . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . . 2 b d d b 2 . . . . . . . . . 
. . . . . . . . . c 2 b b 2 c . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . c c . . . . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . c 2 2 c . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . c 2 d d 2 c . . . . . . . . . 
. . . . . . . . . c 2 d d 2 c . . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . c 2 d 1 1 d 2 c . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
`
    } else if (gap == 1) {
        topimage = img`
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . c 2 d 1 1 d 2 c . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . . c 2 d d 2 c . . . . . . . . . 
. . . . . . . . . c 2 d d 2 c . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . c 2 2 c . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . c 2 2 c . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . 2 d d 2 . . . . . . . . . . 
. . . . . . . . . c 2 d d 2 c . . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . c 2 b 1 1 b 2 c . . . . . . . . 
. . . . . . . . c 2 d 1 1 d 2 c . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
`
    } else {
        topimage = img`
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 d 1 1 1 1 1 1 1 1 d 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . c 2 b 1 1 1 1 1 1 1 1 b 2 c . . . . . 
. . . . . . 2 b 1 1 1 1 1 1 1 1 b 2 . . . . . . 
. . . . . . 2 b 1 1 1 1 1 1 1 1 b 2 . . . . . . 
. . . . . . 2 b 1 1 1 1 1 1 1 1 b 2 . . . . . . 
. . . . . . 2 b 1 1 1 1 1 1 1 1 b 2 . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . . c 2 1 1 1 1 2 c . . . . . . . . 
. . . . . . . . c 2 d 1 1 d 2 c . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . . c 2 d d 2 c . . . . . . . . . 
. . . . . . . . . . 2 d d 2 . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . 2 b b 2 . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . c c . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . c 2 b b 2 c . . . . . . . . . 
. . . . . . . . . 2 b d d b 2 . . . . . . . . . 
. . . . . . . . . 2 b 1 1 b 2 . . . . . . . . . 
. . . . . . . . c 2 d 1 1 d 2 c . . . . . . . . 
. . . . . . . . 2 b 1 1 1 1 b 2 . . . . . . . . 
. . . . . . . c 2 b 1 1 1 1 b 2 c . . . . . . . 
. . . . . . . c 2 d 1 1 1 1 d 2 c . . . . . . . 
. . . . . . . 2 b 1 1 1 1 1 1 b 2 . . . . . . . 
. . . . . . c 2 b 1 1 1 1 1 1 b 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
. . . . . . c 2 d 1 1 1 1 1 1 d 2 c . . . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topimage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomimage, -45, 0)
    projectile.bottom = scene.screenHeight()
}
let projectile: Sprite = null
let bottomimage: Image = null
let topimage: Image = null
let gap = 0
let projectile2: Sprite = null
let star: Sprite = null
let projectile3: Sprite = null
let question = game.askForString("Name your character:")
game.splash("You named your character:", question)
game.splash("Ok, good for you....", "It doesn't really matter.")
game.splash("Also press B to hover.", "It costs 3 points though.")
scene.setBackgroundColor(8)
effects.starField.startScreenEffect()
hero()
game.onUpdateInterval(1500, function () {
    beams()
})
game.onUpdate(function () {
    if (star.bottom > 120 || star.top < 0) {
        // this make you
        //
        // die
        game.over(false)
    }
})
game.onUpdateInterval(6500, function () {
    if (info.score() >= 20) {
        // this make you
        //
        // hurt
        powerdown()
    }
})
game.onUpdateInterval(5000, function () {
    // this make you
    //
    // unhurt
    powerup()
})
