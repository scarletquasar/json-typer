import { typeGen } from "./src/typeGen.js";
import { typer } from "./src/typer.js";

const jsonToType = (typeName, json) => {
    return typeGen(typeName, typer(json));
}

export { jsonToType }