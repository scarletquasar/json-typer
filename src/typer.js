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

        return "unknown"
    };

    Object.entries(object).forEach((item) => {
        const constructor = item[1].constructor.name;
        const key = item[0];

        typesObject[key] = typesMap[constructor] ? typesMap[constructor] : checkObjectToRecursion(item[1])
    });

    return typesObject;
}

export { typer }