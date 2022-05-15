const floodFill = (image, sr, sc, newColor) => {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  const pix = image[sr][sc];
  const trav = (x, y) => {
    if (x < 0 || x >= image.length) return;
    if (y < 0 || y >= image[0].length) return;
    if (image[x][y] !== pix || image[x][y] === newColor) return;

    image[x][y] = newColor;

    directions.forEach(([dx, dy]) => {
      trav(x + dx, y + dy);
    });
  }
}
