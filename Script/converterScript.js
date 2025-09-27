import * as unitData from './unitData.js';

const conv_option = document.querySelectorAll("#convList li a");
const urlData = new URLSearchParams(window.location.search);
conv_option.forEach((key) => {
    if(key.getAttribute("data-value") === urlData.get("action")) key.setAttribute("id", "selected");
})

document.addEventListener('DOMContentLoaded', () => {
    conv_option.forEach( (key) => {
        let selected;
        if (key.getAttribute("id") === "selected"){
            selected = key;
        }
        if (selected) {
            const option_data = selected.getAttribute('data-value');
            if (option_data === 'leng') {
                console.log("Modo de comprimento");
            }
        }
    })
})
function create_select(quantity) {

    const inputs = document.querySelectorAll(".inputs");
    const option_td = document.querySelectorAll("#select-tr td");

    const input_select = document.createElement("select");
    input_select.className = "unit-select"
    input_select.id = "input-select";
    option_td[0].appendChild(input_select);

    const output_select = document.createElement("select");
    output_select.className = "unit-select";
    output_select.id = "output-select";
    option_td[1].appendChild(output_select);

    if (quantity === 'leng') {
        //const control = document.createElement("option");
        //control.innerText = "Input";
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro");
        });
        for (const data of unitData.leng_data) {
            const option = document.createElement("option");

            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm' ? option.setAttribute("selected") : null;

            input_select.appendChild(option);
            //input_select.appendChild(control);

            const option_clone = option.cloneNode(true);
            output_select.appendChild(option_clone);
        }
    } else if (quantity === 'area') {
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro quadrado");
        });
        for (const data of unitData.area_data) {
            const option = document.createElement("option");
            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm' ? option.setAttribute("selected", "selected") : null;
            input_select.appendChild(option);
            const option_clone = option.cloneNode(true);
            output_select.appendChild(option_clone);
        }
    } else if (quantity === 'vol') {

    }

}

create_select('area');
