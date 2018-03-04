class Color {
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