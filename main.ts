scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 1 f 9 f 1 9 . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . 9 7 8 9 9 9 8 7 9 . . . . . 
    . . . . 8 8 7 8 8 . . . . . . . 
    . . . . 8 8 7 8 8 . . . . . . . 
    . . . . 8 8 7 8 8 . . . . . . . 
    . . . . . 6 . 6 . . . . . . . . 
    . . . . 9 9 . 9 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
