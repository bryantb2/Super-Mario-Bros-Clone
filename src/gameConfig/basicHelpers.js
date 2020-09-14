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
export const findTilePosition = (xPos, yPos) => {
    // todo
}