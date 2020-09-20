import {baseUnitSize, gameGrid, physicsData, playerMovement} from "./gameGlobals";

export const guidGenerator = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// format game score with leading zeros if necessary
export const formatScore = score => {
    const stringedScore = score.toString();
    const leadingZeros = 6 - stringedScore.length;
    let formattedScore;
    // check if lead zeros must be added
    if (leadingZeros > 0) {
        // format string with lead zeros (fill/reduce an array, then concat actual value to back)
        formattedScore = Array(leadingZeros).fill('0')
            .reduce((zeros, currentVal) => zeros + currentVal);
        formattedScore += stringedScore;
    }
    return formattedScore;
};

// retrieve array position of tile by pixel location
export const findTilePositionByPixel = (xPos, yPos) => ({
    x: Math.floor(Math.floor(xPos) / baseUnitSize().WIDTH) - 1,
    y: Math.floor(Math.floor(yPos) / baseUnitSize().HEIGHT) - 1
});

// retrieve x / y pixel positions via a column/row index
export const findPixelPositionByTile = (columnIndex, rowIndex) => ({
    x: (columnIndex + 1 ) * baseUnitSize().WIDTH, // right edge
    y: (rowIndex + 1) * baseUnitSize().HEIGHT  // top edge (element 0 is actually top of screen, so index must be reversed for height)
});

// calculate final velocity
export const calculateFinalV = (velocityInitial, secondsSinceStart, acceleration) =>
    velocityInitial + (secondsSinceStart * acceleration);

// velocity checkers
export const isAtWalkingVelocity = (horizontalVelocity) =>
    horizontalVelocity > 0 && horizontalVelocity <= physicsData.MAX_WALK_VELOCITY;
export const isAtSprintingVelocity = (horizontalVelocity) =>
    horizontalVelocity > physicsData.MAX_WALK_VELOCITY && horizontalVelocity <= physicsData.MAX_SPRINT_VELOCITY;

// collision checker
export const isTouchingFloor = (playerWidth, playerHeight, playerXPos, playerYPos, gameGrid) => {
    // get collision coordinates for player
    const collisionCoordinates =
        getCollisionCoordinates(playerWidth, playerHeight, playerXPos, playerYPos, gameGrid)
            .filter(collisionCoord => collisionCoord.yLabel === 'BOTTOM');
    // check that player is touching at least one solid object
    return collisionCoordinates.length >= 1;
};
export const getCollisionCoordinates = (objectWidth, objectHeight, xPos, yPos, gameGrid) => {
    // check each of the box model corner
    const boxModel = buildPlayerBoxModel(objectWidth, objectHeight, xPos, yPos);
    let foundCollisions = [];
    // loop through box model coordinates
    for (const modelVertex of boxModel) {
        const { x, y } = modelVertex;
        // get grid tile by coordinates
        const tileIndexes = findTilePositionByPixel(x, y);
        const gameTile = gameGrid[tileIndexes.x][tileIndexes.y];
        if (gameTile !== null && gameTile !== undefined)
            // add game tile coordinates to collision list
            foundCollisions.push(modelVertex);
    }
    return foundCollisions;
};
const buildPlayerBoxModel = (playerWidth, playerHeight, playerXPos, playerYPos) => {
    // build box model coordinates of player
    const topLeft = {
        xLabel: 'LEFT',
        yLabel: 'TOP',
        x: playerXPos - (playerWidth / 2),
        y: playerYPos + (playerHeight / 2)
    };
    const topRight = {
        xLabel: 'RIGHT',
        yLabel: 'TOP',
        x: playerXPos + (playerWidth / 2),
        y: playerYPos + (playerHeight / 2)
    };
    const bottomLeft = {
        xLabel: 'LEFT',
        yLabel: 'BOTTOM',
        x: playerXPos - (playerWidth / 2),
        y: playerYPos - (playerHeight / 2)
    };
    const bottomRight = {
        xLabel: 'RIGHT',
        yLabel: 'BOTTOM',
        x: playerXPos + (playerWidth / 2),
        y: playerYPos - (playerHeight / 2)
    };
    return [topLeft, topRight, bottomLeft, bottomRight];
}

// player controls
export const convertKeyToAction = key => {
    // converts any directional enhancers to player action constants
    switch(key) {
        case (playerMovement.RUN_KEY):
            return playerMovement.SPRINT;
        case (playerMovement.JUMP_KEY):
            return playerMovement.JUMP;
        case (playerMovement.DOWN_KEY):
            return playerMovement.CROUCH;
        default:
            return playerMovement.STAND;
    }
}
export const isDirectionKey = (pressedKey) =>
    [playerMovement.LEFT_KEY, playerMovement.RIGHT_KEY].includes(pressedKey);
export const isDirectionalEnhancer = (pressedKey) =>
    [playerMovement.DOWN_KEY, playerMovement.RUN_KEY, playerMovement.JUMP_KEY].includes(pressedKey);

/*
if (collisionCoordinates.length >= 1) {
        // map coordinates to game grid objects
        const gridCollisionObjects = collisionCoordinates.map(coordinates => {
            // get tile indexes
            const tileIndexes = findTilePositionByPixel(coordinates.x, coordinates.y);
            return gameGrid[tileIndexes.x][tileIndexes.y];
        });
        let anyLethalCollision = false;
        gridCollisionObjects.forEach(collisionObject => {
            // ensure all of the "floor" collisions are safe
            if (collisionObject.isLethal)
                anyLethalCollision = true;
        });
        return anyLethalCollision;
    }
    return false;
 */