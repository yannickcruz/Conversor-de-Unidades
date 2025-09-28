import * as unitData from './unitData.js';

const conv_option = document.getElementById("convList");
const conv_btns = document.querySelectorAll(".linkText");
const urlData = new URLSearchParams(window.location.search);
let selectedBtn;
conv_option.addEventListener('click', (btn) => {
    const btnTarget = btn.target;
    if (btnTarget.tagName === 'BUTTON') {
        conv_btns.forEach((key) => {
            key.getAttribute("id") === "selected" ? key.removeAttribute("id") : null;
        });
        btnTarget.setAttribute("id", "selected");
        sessionStorage.setItem('sendUnit', btnTarget.getAttribute("data-value"));
        unitSelection();
    }
})
function unitSelection() {
    conv_btns.forEach((key) => {
        let selected;
        if (key.getAttribute("id") === "selected") {
            selected = key;
        }
        if (selected) {
            const option_data = selected.getAttribute('data-value');
            create_select(option_data);
        }
    })
}
document.addEventListener('DOMContentLoaded', () => {
    conv_btns.forEach((key) => {
        if (key.getAttribute("data-value") === sessionStorage.getItem('sendUnit')){
            key.setAttribute("id", "selected");
        } 
    });
    unitSelection();
})
function create_select(quantity) {

    const inputs = document.querySelectorAll(".inputs");
    const option_td = document.querySelectorAll("#select-tr td");
    option_td.forEach((key) => {
        while(key.firstChild){
            key.removeChild(key.firstChild);
        }
    });
    const input_select = document.createElement("select");
    input_select.className = "unit-select"
    input_select.id = "input-select";
    option_td[0].appendChild(input_select);

    const output_select = document.createElement("select");
    output_select.className = "unit-select";
    output_select.id = "output-select";
    option_td[1].appendChild(output_select);

    if (quantity === 'length') {
        //const control = document.createElement("option");
        //control.innerText = "Input";
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro");
        });
        for (const data of unitData.leng_data) {
            const option = document.createElement("option");

            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm' ? option.setAttribute("selected", '') : null;

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

//create_select('area');
