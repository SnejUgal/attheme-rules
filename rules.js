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

/**
 * This value seems to be the minimal distance between very similar colors,
 * but it is really subjective and may need some tests.
*/
// eslint-disable-next-line no-magic-numbers
const JND = Math.sqrt(3 * 10 ** 2);

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

    { // Action bar
      const finalBackground = Color.overlay(
        theme.windowBackgroundWhite,
        theme.actionBarDefault,
      );

      { // actionBarDefaultIcon
        const finalIconColor = Color.overlay(
          finalBackground,
          theme.actionBarDefaultIcon,
        );

        if (Color.areSimilar(finalBackground, finalIconColor, JND)) {
          variables.push(`actionBarDefaultIcon`);
        }
      }

      { // actionBarDefaultTtitle
        const finalTitleColor = Color.overlay(
          finalBackground,
          theme.actionBarDefaultTitle,
        );

        if (Color.areSimilar(finalBackground, finalTitleColor, JND)) {
          variables.push(`actionBarDefaultTitle`);
        }
      }

      { // actionBarDefaultSubtitle
        const finalSubtitleColor = Color.overlay(
          finalBackground,
          theme.actionBarDefaultSubtitle,
        );

        if (Color.areSimilar(finalBackground, finalSubtitleColor, JND)) {
          variables.push(`actionBarDefaultSubtitle`);
        }
      }

      { // actionBarDefaultSelector
        const finalSelectorColor = Color.overlay(
          finalBackground,
          theme.actionBarDefaultSelector,
        );

        if (Color.areSimilar(finalBackground, finalSelectorColor, JND)) {
          variables.push(`actionBarDefaultSelector`);
        }
      }

      { // actionBarDefaultSearch
        const finalSearchTextColor = Color.overlay(
          finalBackground,
          theme.actionBarDefaultSearch,
        );

        if (Color.areSimilar(finalBackground, finalSearchTextColor, JND)) {
          variables.push(`actionBarDefaultSearch`);
        }
      }

      { // actionBarDefaultSearchPlaceholder
        const finalSearchPlaceholderColor = Color.overlay(
          finalBackground,
          theme.actionBarDefaultSearchPlaceholder,
        );

        if (
          Color.areSimilar(finalBackground, finalSearchPlaceholderColor, JND)
        ) {
          variables.push(`actionBarDefaultSearchPlaceholder`);
        }
      }

      { // Submenu
        const finalSubmenuBackground = Color.overlay(
          finalBackground,
          theme.actionBarDefaultSubmenuBackground,
        );

        { // actionBarDefaultSubmenuItem
          const finalItemColor = Color.overlay(
            finalSubmenuBackground,
            theme.actionBarDefaultSubmenuItem,
          );

          if (Color.areSimilar(finalSubmenuBackground, finalItemColor, JND)) {
            variables.push(`actionBarDefaultSubmenuItem`);
          }
        }
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