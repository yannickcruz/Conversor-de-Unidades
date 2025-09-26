const conv_option = document.querySelectorAll("#convList li a");
let current_option;

document.addEventListener('DOMContentLoaded', () => {
    for(let key in conv_option){
    let selected = conv_option[key].document.getElementById("selected");
    if(selected){
        const option_data = selected.getAttribute('data-value');
        if(option_data == 'leng'){

        } 
    }
}
})

function create_select(quantity){
    const leng_data = [
        {value: 'm', text: 'metro'},
        {value: 'km', text: 'quilômetro'},
        {value: 'cm', text: 'centímetro'},
        {value: 'mm', text: 'milimetro'},
        {value: 'um', text: 'micrômetro'},
        {value: 'nm', text: 'nanômetro'},
        {value: 'mi', text: 'milha'},
        {value: 'yd', text: 'jarda'},
        {value: 'ft', text: 'pés'},
        {value: 'in', text: 'polegada'},
        {value: 'ly', text: 'ano-luz'},
        {value: 'ls', text: 'segundo-luz'}
    ];
    const area_data = [
        {value: 'm2', text: 'metro quadrado'},
        {value: 'km2', text: 'quilômetro quadrado'},
        {value: 'cm2', text: 'centímetro quadrado'},
        {value: 'mm2', text: 'milímetro quadrado'},
        {value: 'um2', text: 'micrômetro quadrado'},
        {value: 'ha', text: 'hectare'},
        {value: 'sqmi', text: 'milha quadrada'},
        {value: 'sqyd', text: 'jarda quadrada'},
        {value: 'sqft', text: 'pé quadrado'},
        {value: 'sqin', text: 'polegada quadrada'},
        {value: 'ac', text: 'acre'},
    ];
    const volume_data = [
        {value: 'm3', text: 'metro cúbico'},
        {value: 'km3', text: 'quilômetro cúbico'},
        {value: 'cm3', text: 'centímetro cúbico'},
        {value: 'mm3', text: 'milímetro cúbico'},
        {value: 'um3', text: 'micrômetro cúbico'},
        {value: 'l', text: 'litro'},
        {value: 'ml', text: 'mililitro'},
        {value: 'USG', text: 'galão americano'},
        {value: 'USQ', text: 'quarto americano'},
        
    ]
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

    if(quantity === 'leng'){
        //const control = document.createElement("option");
        //control.innerText = "Input";
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro");
        });
        for(const data of leng_data){
            const option = document.createElement("option");

            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm' ? option.setAttribute("selected") : null;

            input_select.appendChild(option);
            //input_select.appendChild(control);

            const option_clone = option.cloneNode(true);
            output_select.appendChild(option_clone);
        }
    } else if(quantity === 'area'){
        inputs.forEach((input) => {
            input.setAttribute("placeholder", "metro quadrado");
        });
        for(const data of area_data){
            const option = document.createElement("option");
            option.value = data.value;
            option.innerText = data.text;
            option.value === 'm' ? option.setAttribute("selected", "selected") : null;
            input_select.appendChild(option);
            const option_clone = option.cloneNode(true);
            output_select.appendChild(option_clone);
        }
    } else if(quantity === 'vol'){

    }
    
}

create_select('area');
