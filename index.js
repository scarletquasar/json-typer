const typer = (json) => {
    const object = JSON.parse(json);
    const typesObject = {};

    const typesMap = {
        "String": "string",
        "Number": "number",
        "Boolean": "boolean"
    };

    const checkObjectToRecursion = (object) => {
        if(object.constructor.name === "Object") {
            return typer(JSON.stringify(object))
        }

        return "any"
    };

    Object.entries(object).forEach((item) => {
        const constructor = item[1].constructor.name;
        const key = item[0];

        typesObject[key] = typesMap[constructor] ? typesMap[constructor] : checkObjectToRecursion(item[1])
    });

    return typesObject;
}

const typeGen = (typeName, typeObject) => {
    const values = [
        "number",
        "string",
        "boolean",
        "any"
    ];

    const typeBase = `type ${typeName} = `;
    let typeBody = JSON.stringify(typeObject).replaceAll("\"", "")

    return typeBase + typeBody;
}

const jsonTyper = (typeName, json) => {
    return typeGen(typeName, typer(json));
}

console.log(jsonTyper('test', '{ "a": { "b": 1, "c": false } }'))

