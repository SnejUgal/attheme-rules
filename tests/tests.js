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
    actionBarDefaultIcon=#80101010`,
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

test(`it reports invisible actionBarDefaultSubmenuItem`, (t) => {
  const theme = new Attheme(
    `actionBarDefaultSubmenuBackground=#ff000000
    actionBarDefaultSubmenuItem=#80101010`,
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

test(`it reports invisible chats_message`, (t) => {
  const theme = new Attheme(
    `windowBackgroundWhite=#ffffffff
    chats_message=#80f0f0f0`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = {
    type: `error`,
    name: `invisible-elements`,
    variables: [`chats_message`],
  };

  t.deepEqual(expectedResult, testResult);
});

test(`it doesn't report visible chats_message`, (t) => {
  const theme = new Attheme(
    `windowBackgroundWhite=#ff000000
    chats_message=#f0212121`,
    defaultVariablesValues,
  );

  const testResult = rules[1](theme);
  const expectedResult = true;

  t.deepEqual(expectedResult, testResult);
});