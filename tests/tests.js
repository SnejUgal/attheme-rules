import Attheme from "attheme-js";
import defaultVariablesValues from "attheme-default-values";
import rules from "../rules.js";
import test from "ava";

test(`it finds purple colors`, (t) => {
  const theme = new Attheme(
    `windowBackgroundWhite=#ffff00ff
    graySection=#ff000000
    divider=#ffff00ff`,
    defaultVariablesValues,
  );

  const testRsult = rules[0](theme);
  const expectedResult = {
    type: `warning`,
    name: `purple-variables`,
    variables: [
      `divider`,
      `windowBackgroundWhite`,
    ],
  };

  t.deepEqual(expectedResult, testRsult);
});

test(`it reports invisible actionBarDefaultIcon`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultIcon=#80000000`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`actionBarDefaultIcon`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible actionBarDefaultIcon`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultIcon=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});

test(`it reports invisible actionBarDefaultTitle`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultTitle=#80000000`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`actionBarDefaultTitle`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible actionBarDefaultTitle`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultTitle=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});

test(`it reports invisible actionBarDefaultSelector`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultSelector=#80000000`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`actionBarDefaultSelector`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible actionBarDefaultSelector`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultSelector=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});

test(`it reports invisible actionBarDefaultSearch`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultSearch=#80000000`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`actionBarDefaultSearch`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible actionBarDefaultSearch`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultSearch=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});

test(`it reports invisible actionBarDefaultSearchPlaceholder`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultSearchPlaceholder=#80000000`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`actionBarDefaultSearchPlaceholder`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible actionBarDefaultSearchPlaceholder`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultSearchPlaceholder=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});

test(`it reports invisible actionBarDefaultSubmenuItem`, (t) => {
  const theme = new Attheme(
    `actionBarDefaultSubmenuBackground=#ff000000
    actionBarDefaultSubmenuItem=#80000000`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`actionBarDefaultSubmenuItem`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible actionBarDefaultSubmenuItem`, (t) => {
  const theme = new Attheme(
    `actionBarDefaultSubmenuBackground=#ff000000
    actionBarDefaultSubmenuItem=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});