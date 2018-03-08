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

test(`it reports invisible actionBarDefaultIcon (alpha === 255)`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultIcon=#ff000000`,
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

test(`it reports invisible actionBarDefaultIcon (alpha === 0)`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultIcon=#00123456`,
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

test(`it reports invisible actionBarDefaultIcon (0 < alpha < 255)`, (t) => {
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

test(`it doesn't reports visible actionBarDefaultIcon`, (t) => {
  const theme = new Attheme(
    `actionBarDefault=#ff000000
    actionBarDefaultIcon=#80ffffff`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});