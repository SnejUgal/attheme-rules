/* eslint-disable sort-keys */

/**
 * All rules accept only one argument with themes and returns either true
 * indicating everything is okay or an object {
 *  type: `error`/`warning`,
 *  name: string,
 *  variables: string[],
 * }.
 */

const Color = require(`./color`);

module.exports = [
  /**
   * @themesporterbot leaves some variables purple if it couldn't find them an
   * equivalent in the .tdesktop-theme. This rule highlights such to remind
   * you to change them. If you really want them to be purple, just ignore the
   * rule.
   * @param {object} theme The theme object.
   * @returns {boolean/object} The result of testing for this rule.
   */
  (theme) => {
    const PURPLE = {
      red: 255,
      green: 0,
      blue: 255,
      alpha: 255,
    };

    const variables = [];

    for (const variable in theme) {
      if (Color.areEqual(theme[variable], PURPLE)) {
        variables.push(variable);
      }
    }

    if (variables.length === 0) {
      return true;
    }

    return {
      type: `warning`,
      name: `purple-variables`,
      variables,
    };
  },

  /**
   * This rules tests the theme for invisible elements.
   * @param {object} theme The theme object.
   * @returns {boolean/object} The result of testing for this rule.
   */
  (theme) => {
    const variables = [];

    // Action bar
    {
      const finalBackground = Color.overlay(
        theme.windowBackgroundWhite,
        theme.actionBarDefault,
      );

      const finalIconColor = Color.overlay(
        finalBackground,
        theme.actionBarDefaultIcon,
      );

      if (Color.areEqual(finalBackground, finalIconColor)) {
        variables.push(`actionBarDefaultIcon`);
      }
    }

    if (variables.length === 0) {
      return true;
    }

    return {
      type: `error`,
      name: `invisible-elements`,
      variables,
    };
  },
];