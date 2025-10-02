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
    if(type === "temperature_data"){
        function cTOf(inpVal){
            return inpVal * (9/5) + 32;
        }
        function cTOk(inpVal){
            return inpVal - 273.15;
        }
        if(input === "f"){
            inputValue = cTOf(value);
            if(output === "c") return inputValue
            if(output === "k") return cTOk(inputValue);;
            if(output ==="f") return value;
        }
        if(input === "k"){
            inputValue = cTOk(value);
            if(output === "c") return inputValue
            if(output === "f") return cTOf(inputValue);
            if(output === "k") return value;
        }
        if(input === "c"){
            if(output === "c") return value;
            if(output === "f") return cTOf(value);
            if(output === "k") return cTOk(value);
        }
    }
    quantityName.forEach(key => {
        key.name === input ? inputValue = key.value : null;
        key.name === output ? outputValue = key.value : null;
    });
    inputValue = value * inputValue;
    outputValue = inputValue / outputValue;
    return outputValue;
}

//console.log(conversionCalc("k", "f", 2, "temperature_data"));