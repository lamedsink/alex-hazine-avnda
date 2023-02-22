scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let auto: Sprite = null
let duck: Sprite = null
let up: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let Alex = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Alex.setPosition(80, 10)
controller.moveSprite(Alex, 100, 100)
scene.cameraFollowSprite(Alex)
game.onUpdateInterval(1000, function () {
    up = sprites.create(img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `, SpriteKind.Enemy)
    up.setVelocity(50, 0)
    tiles.placeOnRandomTile(up, sprites.dungeon.stairWest)
    up.x = 3
    up.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(500, function () {
    duck = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    duck.setVelocity(50, 0)
    tiles.placeOnRandomTile(duck, assets.tile`myTile`)
    duck.x = 3
    duck.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(500, function () {
    auto = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    auto.setVelocity(50, 0)
    tiles.placeOnRandomTile(auto, sprites.vehicle.roadHorizontal)
    auto.x = 3
    auto.setFlag(SpriteFlag.DestroyOnWall, true)
})
