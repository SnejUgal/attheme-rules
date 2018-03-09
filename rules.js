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

// This value seems to be the minimal distance between very similar colors,
// but it is really subjective and may need some tests.
// eslint-disable-next-line no-magic-numbers
const JND = Math.sqrt(3 * 10 ** 2);

/**
 * Checks passed elements for similarity and pushes failed ones in the passed
 * array.
 * @param {object} theme The theme object.
 * @param {string[]} variables An array the function will push failed variables
 * in.
 * @param {number} distance The maximum distance between background and element
 * colors.
 * @param {object} background The background color.
 * @param {string[]} elements An array with variables to check.
 * @returns {void}
 */
const checkSimilarity = (theme, variables, distance, background, elements) => {
  elements.forEach((element) => {
    const elementColor = Color.overlay(
      background,
      theme[element],
    );

    if (Color.areSimilar(background, elementColor, distance)) {
      variables.push(element);
    }
  });
};

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
   * This rule tests the theme for invisible elements.
   * @param {object} theme The theme object.
   * @returns {boolean/object} The result of testing for this rule.
   */
  (theme) => {
    const variables = [];

    const checkVariables = checkSimilarity.bind(this, theme, variables, JND);

    { // Action bar
      const background = Color.overlay(
        theme.windowBackgroundWhite,
        theme.actionBarDefault,
      );

      const elementsToCheck = [
        `actionBarDefaultIcon`,
        `actionBarDefaultTitle`,
        `actionBarDefaultSubtitle`,
        `actionBarDefaultSearch`,
        `actionBarDefaultSearchPlaceholder`,
        `actionBarDefaultSelector`,
      ];

      checkVariables(background, elementsToCheck);
    }

    { // Submenu
      const background = Color.overlay(
        theme.windowBackgroundWhite,
        theme.actionBarDefault,
        theme.actionBarDefaultSubmenuBackground,
      );

      const elementsToCheck = [`actionBarDefaultSubmenuItem`];

      checkVariables(background, elementsToCheck);
    }

    { // Chats list
      // windowBackgroundWhite can be transparent, because of this fallbacking
      // to black
      const background = Color.overlay(
        theme.windowBackgroundWhite,
      );

      const elementsToCheck = [
        `chats_message`,
        `chats_date`,
        `chats_nameMessage`,
        `chats_actionMessage`,
        `chats_attachMessage`,
        `chats_draft`,
        `chats_name`,
        `chats_nameIcon`,
        `chats_secretName`,
        `chats_secretIcon`,
      ];

      checkVariables(background, elementsToCheck);
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