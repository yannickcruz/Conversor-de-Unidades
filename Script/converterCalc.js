export function calcLength(input, output, value) {
    const lengData = [
        {name: "m", value: 1},
        {name: "km", value: 1000},
        {name: "cm", value: 0.01},
        {name: "mm", value: 0.0001},
        {name: "um", value: 0.000001},
        {name: "nm", value: 0.00000001},
        {name: "mi", value: 1609.344},
        {name: "yd", value: 0.9144},
        {name: "ft", value: 0.3048},
        {name: "inch", value: 0.0254},
        {name: "ly", value: 9460660000000000},
        {name: "ls", value: 299792458.00000185}
    ]

    let inputValue;
    let outputValue;
    lengData.forEach((key) => {
        key.name === input ? inputValue = key.value : null;
        key.name === output ? outputValue = key.value : null;
    });

    inputValue = value * inputValue;
    outputValue = inputValue / outputValue;
}
