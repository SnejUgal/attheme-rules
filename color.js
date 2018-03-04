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
}

module.exports = Color;