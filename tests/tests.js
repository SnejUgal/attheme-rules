import Attheme from "attheme-js";
import test from "ava";
import { testTheme } from "../index.js";

test(`it finds purple colors`, (t) => {
  const theme = new Attheme(
    `windowBackgroundWhite=#ffff00ff
    graySection=#ff000000
    divider=#ffff00ff`,
  );

  const testRsults = testTheme(theme);
  const expectedResults = [
    {
      type: `warning`,
      name: `purple-variables`,
      variables: [
        `divider`,
        `windowBackgroundWhite`,
      ],
    },
  ];

  t.deepEqual(expectedResults, testRsults);
});