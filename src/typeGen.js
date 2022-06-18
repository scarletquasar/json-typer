const typeGen = (typeName, typesObject) => {
    const typeBase = `type ${typeName} = `;
    let typeBody = JSON.stringify(typesObject).replaceAll("\"", "");

    return typeBase + typeBody;
}

export { typeGen }