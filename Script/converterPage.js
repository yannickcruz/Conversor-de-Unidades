import unitData from "./unitData.json" with { type: "json" };
import { conversionCalc } from "./converterCalc.js";

let isDark;
let clickIsDark;

const selectsNone = document.querySelectorAll(".unit-select");
const conv_option = document.getElementById("convList");
const conv_btns = document.querySelectorAll(".linkText");
const inputs = document.querySelectorAll(".inputs");
const selects = document.querySelectorAll(".unit-select");


conv_option.addEventListener('click', (btn) => {
    const btnTarget = btn.target;
    selects.forEach((key) =>{
        while(key.firstChild){
            key.removeChild(key.firstChild);
        }
    })
    if (btnTarget.tagName === 'BUTTON') {
        conv_btns.forEach((key) => {
            key.getAttribute("id") === "selected" ? key.removeAttribute("id") : null;
        });
        btnTarget.setAttribute("id", "selected");
        sessionStorage.setItem('sendUnit', btnTarget.getAttribute("data-value"));
        unitSelection();
    }
});


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
        if (key.getAttribute("data-value") === sessionStorage.getItem('sendUnit')) {
            key.setAttribute("id", "selected");
        }
    });
    unitSelection();
});


function create_select(quantity) {
    const input_select = document.getElementById("input-select");
    const output_select = document.getElementById("output-select");
    inputs.forEach((key) => {key.value = ''});
    function getArray(type){
        if(unitData[type]) return unitData[type];
    }
    function createOptions(type){
        const arrayObj = getArray(type);
        for (const data of arrayObj) {
            const option = document.createElement("option");
            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm2' ? option.setAttribute("selected", "") : null;
            input_select.appendChild(option);
            const option_clone = option.cloneNode(true);
            output_select.appendChild(option_clone);
        }
    }

    if (quantity === 'length') {
        const selects = document.querySelectorAll(".unit-select");
        selects.forEach((key) => {key.setAttribute("name", "leng_data")});
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
    } else if(quantity === 'area') {
        const selects = document.querySelectorAll(".unit-select");
        selects.forEach((key) => {key.setAttribute("name", "area_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro quadrado");
        });
        for (const data of unitData.area_data) {
            const option = document.createElement("option");
            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm2' ? option.setAttribute("selected", "") : null;
            input_select.appendChild(option);
            const option_clone = option.cloneNode(true);
            output_select.appendChild(option_clone);
        }
    } else if(quantity === 'volume') {
        selectsNone.forEach((key) => {key.setAttribute("name", "volume_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro cúbico");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    } else if(quantity === 'temperature'){
        selectsNone.forEach((key) => {key.setAttribute("name", "temperature_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "celsius");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    } else if(quantity === 'weight'){
        selectsNone.forEach((key) => {key.setAttribute("name", "weight_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "quilograma");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    } else if(quantity === 'time'){
        selectsNone.forEach((key) => {key.setAttribute("name", "time_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "segundo");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    } else if(quantity === 'pressure'){
        selectsNone.forEach((key) => {key.setAttribute("name", "pressure_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "pascal");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    } else if(quantity === 'speed'){
        selectsNone.forEach((key) => {key.setAttribute("name", "speed_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metros por segundo");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    } else if(quantity === 'acceleration'){
        selectsNone.forEach((key) => {key.setAttribute("name", "acceleration_data")});
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metros por segundo ao quadrado");
        });
        const typeUnit = input_select.getAttribute("name");
        createOptions(typeUnit);
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const fromInput = document.getElementById("fromInput");
    const toInput = document.getElementById("toInput");
    darkMode(isDark);
    // input select
    const i_select = document.getElementById("input-select");
    // output select
    const o_select = document.getElementById("output-select");
    function changePlace(sel, io){
        let current = sel.options[sel.selectedIndex];
        current = current.innerText;
        io === "input" ? fromInput.setAttribute("placeholder", current) : toInput.setAttribute("placeholder", current);
    }
    console.log(i_select)
    i_select.addEventListener('change', () => {changePlace(i_select, "input")});
    o_select.addEventListener('change', () => {changePlace(o_select, "output")});
});


const inInput = document.getElementById("fromInput");
const outInput = document.getElementById("toInput");

function calcConversion(num){
    const inputSelect = document.getElementById("input-select");
    const outputSelect = document.getElementById("output-select");
    let currentInput = inputSelect.options[inputSelect.selectedIndex].getAttribute("value");
    let currentOutput = outputSelect.options[outputSelect.selectedIndex].getAttribute("value");
    let result = conversionCalc(currentInput, currentOutput, num, inputSelect.getAttribute("name"));
    outInput.value = result;
}


inInput.addEventListener('input', (num) => {calcConversion(num.target.value)});
selectsNone.forEach((key) => {
    key.addEventListener('change', () => {
        const num = parseFloat(inInput.value);
        console.log(num)
        if(typeof(num) === 'number' && !isNaN(num)) calcConversion(parseFloat(num));
    })
})


function localStorageSetting(action){
    if(action === "save"){
        localStorage.setItem("isDark", JSON.stringify(isDark));
    }
    if(action == "load"){
        isDark = localStorage.getItem("isDark");
        isDark === "false" ? isDark = false : isDark = true;
    }
}



const btn = document.getElementById("dark");
btn.addEventListener('click', () => {darkMode(true)});

function darkMode(click){
    localStorageSetting("load");
    click ? clickIsDark = isDark : clickIsDark = !isDark;

    const styleSheet = document.styleSheets;
    const header = document.getElementById("navbar");
    const body = document.body;
    const footer = document.getElementById("page-foot");
    const copyText = document.getElementById("copy");

    if(!clickIsDark){
        btn.style.rotate = "180deg";
        if(click){
            isDark = true;
            localStorageSetting("save");
        }
        

        body.style.backgroundColor = "#161616";
        header.style.backgroundColor = "rgba(22, 22, 22, 0.75)";
        header.style.boxShadow = "none";
        header.style.borderBottom = "1px #ffffff solid";
        copyText.style.color = "#ffffff";
        for(const sheet of styleSheet){
            for(const prop of sheet.cssRules){
                if(prop.selectorText === "#selected"){
                    prop.style["color"] = "#10066bff"
                    prop.style["background-color"] = "#ffffff";
                }
                if(prop.selectorText === ".linkText"){
                    prop.style["color"] = "#ffffff"
                    prop.style["background-color"] = "#10066bff";
                }
                if(prop.selectorText === ".std-text"){
                    prop.style["color"] = "#ffffff";
                }
                if(prop.selectorText === ".linkText:hover"){
                    prop.style.backgroundColor = "#00039bff";
                }
            }
        }
        inputs.forEach((key) => {
            key.style.backgroundColor = "#161515";
            key.style.color = "#ffffff";
            key.style.borderColor = "#ffffff";
        })
        selects.forEach((key) => {
            key.style.backgroundColor = "#161515";
            key.style.color = "#ffffff";
        })
        footer.style.backgroundColor = "#06003fff";

    } else if(clickIsDark){
        btn.style.rotate = "0deg";
        if(click){
            isDark = false;
            localStorageSetting("save");
        }
        

        body.style.backgroundColor = "#fff8f3";
        header.style.backgroundColor = "rgba(255, 248, 243, 0.75)";
        header.style.boxShadow = "0px 0px 10px 2px";
        header.style.borderBottom = "none";
        footer.style.backgroundColor = "#2fb6ff";
        copyText.style.color = "#333232";

        for(const sheet of styleSheet){
            for(const prop of sheet.cssRules){
                if(prop.selectorText === "#selected"){
                    prop.style["color"] = "#d4d4d4"
                    prop.style["background-color"] = "#0084ff";
                }
                if(prop.selectorText === ".linkText"){
                    prop.style["color"] = "#0084ff"
                    prop.style["background-color"] = "#d4d4d4";
                }
                if(prop.selectorText === ".std-text"){
                    prop.style["color"] = "#161515";
                }
                if(prop.selectorText === ".linkText:hover"){
                    prop.style.backgroundColor = "#e6e6e6";
                }
            }
        }
        inputs.forEach((key) => {
            key.style.backgroundColor = "#ffffff";
            key.style.color = "";
            key.style.borderColor = "#000000";
        })
        selects.forEach((key) => {
            key.style.backgroundColor = "#ffffff";
            key.style.color = "#000000";
        })

    }


}

