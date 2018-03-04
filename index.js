const Attheme = require(`attheme-js`);
const defaultValues = require(`attheme-default-values`);

const rules = require(`./rules`);

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