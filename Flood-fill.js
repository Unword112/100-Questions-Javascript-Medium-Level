var floodFill = function(image, sr, sc, color) {
    let imageColor = image[sr]?.[sc];
    if (imageColor === color) return image;
    for (let row=sr; row<image.length; row++) {
        for (let col=sc; col<image[row].length; col++) {
            replaceColor(row, col, image, imageColor, color);
            return image;
        }
    }
}

var replaceColor = (row, col, image, imageColor, color) => {
    if (image[row]?.[col] === imageColor) {
        image[row][col] = color;
    } else {
        return;
    }
    replaceColor(row-1, col, image, imageColor, color);
    replaceColor(row+1, col, image, imageColor, color);
    replaceColor(row, col-1, image, imageColor, color);
    replaceColor(row, col+1, image, imageColor, color);
}

const test1 = image = floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
const test2 = image = floodFill([[[0,0,0],[0,0,0]]], 0, 0, 0);

console.log(test1);
console.log(test2);