/**
 * Color class.
*/
class Color {
  /**
   * Strictly checks if two colors are equal.
   * @param {object} firstColor The first color to compare.
   * @param {object} secondColor The second color to compare.
   * @param {[boolean]} shouldCheckAlpha Whether it should compare alpha or
   * not. Defaults to true.
   * @returns {boolean} Whether the colors are equal.
   */
  static areEqual (firstColor, secondColor, shouldCheckAlpha = true) {
    if (firstColor.red !== secondColor.red) {
      return false;
    }

    if (firstColor.green !== secondColor.green) {
      return false;
    }

    if (firstColor.blue !== secondColor.blue) {
      return false;
    }

    if (shouldCheckAlpha && firstColor.alpha !== secondColor.alpha) {
      return false;
    }

    return true;
  }

  /**
   * Overlays colors.
   * @param {...object} colors Colors to overlay.
   * @returns {object} Overlaid color.
   */
  static overlay (...colors) {
    const finalColor = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
    };

    colors.forEach((color) => {
      if (color.alpha === 0) {
        return;
      }

      if (color.alpha === 255) {
        finalColor.red = color.red;
        finalColor.green = color.green;
        finalColor.blue = color.blue;
      }

      const { red, green, blue } = color;
      const alpha = color.alpha / 255;

      const newRed = alpha * (red - finalColor.red) + finalColor.red;
      const newGreen = alpha * (green - finalColor.red) + finalColor.green;
      const newBlue = alpha * (blue - finalColor.blue) + finalColor.blue;

      finalColor.red = Math.round(newRed);
      finalColor.green = Math.round(newGreen);
      finalColor.blue = Math.round(newBlue);
    });

    return finalColor;
  }

  /**
   * Calculates the distance between two colors using the Euclidean method.
   * @param {object} firstColor The first color.
   * @param {object} secondColor The second color.
   * @returns {number} The distance between two colors.
   */
  static distance (firstColor, secondColor) {
    const redDistance = (secondColor.red - firstColor.red) ** 2;
    const greenDistance = (secondColor.green - firstColor.green) ** 2;
    const blueDistance = (secondColor.blue - firstColor.blue) ** 2;
    const sum = redDistance + greenDistance + blueDistance;
    const sumRoot = Math.sqrt(sum);

    return sumRoot;
  }

  /**
   * Whether two colors are similar.
   * @param {object} firstColor The first color.
   * @param {object} secondColor The second color.
   * @param {number} maxDistance The maximum distance between two colors within
   * which the colors are considered similar.
   * @returns {boolean} Wheter the passed colors are similar.
   */
  static areSimilar (firstColor, secondColor, maxDistance) {
    const distance = Color.distance(firstColor, secondColor);

    if (distance >= maxDistance) {
      return false;
    }

    return true;
  }
}

module.exports = Color;