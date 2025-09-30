import unitData from "./unitValues.json" with { type: "json" };

function getList(name) {
    if (unitData[name]) {
        return unitData[name];
    } else {
        throw new Error("Lista de objetos não encontrada!");
    }
}
export function conversionCalc(input, output, value, type) {
    const quantityName = getList(type);
    let inputValue;
    let outputValue;

    quantityName.forEach(key => {
        key.name === input ? inputValue = key.value : null;
        key.name === output ? outputValue = key.value : null;
    });
    inputValue = value * inputValue;
    outputValue = inputValue / outputValue;
    return outputValue;
}
