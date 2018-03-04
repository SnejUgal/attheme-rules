const Attheme = require(`attheme-js`);
const defaultValues = require(`attheme-default-values`);

const rules = require(`./rules`);

/**
 * Test the theme for bugs.
 * @param {object} userTheme The theme to test.
 * @returns {Array} An array of warnings and errors.
 */
const testTheme = (userTheme) => {
  const fallbackedTheme = {
    ...new Attheme(``, defaultValues),
    ...userTheme,
  };

  const warns = [];

  rules.forEach((rule) => {
    const ruleResult = rule(fallbackedTheme);

    if (ruleResult !== true) {
      warns.push(ruleResult);
    }
  });

  return warns;
};

module.exports = { testTheme };