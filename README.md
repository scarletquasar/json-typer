# json-typer
 
Convert JSON strings to TypeScript types fastly

Installation:
```
npm i json-typer
```

Usage:
```js
import { jsonToType } from "json-typer";

const myJson = `{ "a": 1 }`;
console.log(jsonToType("myType", myJson));

//type myType = {a:number}
```
