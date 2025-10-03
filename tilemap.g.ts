// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004030303030303030303030303030303040303030404030303030303030403030103010404040404030304040604040204030303060303040404040505050405010404030401040404040406040404050103030306030304050505050505040504030303040303040505050505050405030601010a0101010101030101010406060605050505060105050505050106060104010104010104040101010301010401050101010106060606030303040303010601010106060406060303030403010a0601010109010101040303030401050c0c0101010d060606010101010406050707010101070c0c0c0c0c09040605050e070b0b0b0b0b0b0b0b0b0801050605`, img`
2 . . . . . . . . . . . . . . . 
2 . . . 2 2 . . . . . . . 2 . . 
2 . 2 2 2 2 2 2 . . 2 2 . 2 2 . 
2 . . . . . . 2 2 2 2 . . . 2 . 
2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 . 
2 . . . . . . 2 . . . . . . 2 . 
2 . . . 2 . . 2 . . . . . . 2 . 
. . 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
. . . . . . . 2 . . . . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 . 2 2 2 2 . . . . . . . 2 . . 
2 . 2 2 2 . . 2 . . . . . 2 . 2 
2 . 2 2 2 . 2 2 2 2 . . . 2 2 . 
. . 2 2 2 . . . . 2 2 2 2 2 . . 
. . 2 2 2 . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.dungeon.stairLadder,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tileDarkGrass2,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
