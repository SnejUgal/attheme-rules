# attheme-rules
A module for testing .attheme's for potentional issues.
## Installing
```bash
npm i attheme-rules
```
## Using
```js
import Attheme from "attheme-js";
import { testTheme } from "attheme-rules";

const theme = new Attheme(`divider=#ff00ff`);
const testResults = testTheme(theme);

console.log(...testResults);
```
The output is:
```js
{ type: 'warning',
  name: 'purple-variables',
  variables: [ 'divider' ] }
```
## Documentation
### `atthemeRules.testTheme(theme: Attheme): RuleResult[]`
```ts
type Type = "warning" | "error";

interface RuleResult {
  type: Type;
  name: string;
  variables: string[];
}
```
Accepts a theme and runs the rules, returns an array of failed rules' results.
