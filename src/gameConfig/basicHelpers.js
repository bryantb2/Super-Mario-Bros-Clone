import { baseUnitSize, gameGrid } from "./gameGlobals";

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
    x: Math.floor(Math.floor(xPos) / baseUnitSize.WIDTH) - 1,
    y: Math.floor(Math.floor(yPos) / baseUnitSize.HEIGHT) - 1
});

// retrieve x / y pixel positions via a column/row index
export const findPixelPositionByTile = (columnIndex, rowIndex) => ({
    x: (columnIndex + 1 ) * baseUnitSize.WIDTH, // right edge
    y: (rowIndex + 1) * baseUnitSize.HEIGHT //((gameGrid.RENDERABLE_HEIGHT - (rowIndex + 1)) * baseUnitSize.HEIGHT) + baseUnitSize.HEIGHT // top edge (element 0 is actually top of screen, so index must be reversed for height)
});

