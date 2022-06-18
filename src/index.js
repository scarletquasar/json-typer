import { typeGen } from "./typeGen.js";
import { typer } from "./typer.js";

const jsonToType = (typeName, json) => {
    return typeGen(typeName, typer(json));
}

export { jsonToType }