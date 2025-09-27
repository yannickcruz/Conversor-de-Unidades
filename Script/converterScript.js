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
        {value: 'ac', text: 'acre'}
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
        {value: 'IMG', text: 'galão imperial'},
        {value: 'IMQ', text: 'quarto imperial'},
        {value: 'cumi', text: 'milha cúbica'},
        {value: 'cuyd', text: 'jarda cúbica'},
        {value: 'cuft', text: 'pé cúbico'},
        {value: 'cuin', text: 'polegada cúbica'}        
    ];
    const temperature_data = [
        {value: 'c', text: 'celsius'},
        {value: 'f', text: 'fahrenheit'},
        {value: 'k', text: 'kelvin'}
    ];
    const weight_data = [
        {value: 'kg', text: 'quilograma'},
        {value: 'g', text: 'grama'},
        {value: 'mg', text: 'miligrama'},
        {value: 'ton', text: 'tonelada'},
        {value: 'lt', text: 'tonelada longa'},
        {value: 'st', text: 'tonelada curta'},
        {value: 'lb', text: 'libra'},
        {value: 'ounce', text: 'onça'},
        {value: 'amu', text: 'unidade de massa atômica'}
    ];
    const time_data = [
        {value: 's', text: 'segundo'},
        {value: 'ms', text: 'milisegundo'},
        {value: 'us', text: 'microsegundo'},
        {value: 'ns', text: 'nanosegundo'},
        {value: 'ps', text: 'picosegundo'},
        {value: 'min', text: 'minuto'},
        {value: 'hr', text: 'hora'},
        {value: 'day', text: 'dia'},
        {value: 'week', text: 'semana'},
        {value: 'mo', text: 'mês'},
        {value: 'yr ', text: 'ano'}
    ];
    const pressure_data = [
        {value: 'Pa', text: 'pascal'},
        {value: 'kPa', text: 'quilopascal'},
        {value: 'bar', text: 'bar'},
        {value: 'mbar', text: 'milibar'},
        {value: 'psi', text: 'libra por polegada quadrada (psi)'},
        {value: 'ksi', text: 'quilolibra por polegada quadrada (ksi)'},
        {value: 'atm', text: 'atmosfera padrão'},
        {value: 'at', text: 'atmosfera técnica'},
        {value: 'torr', text: 'torr'},
        {value: 'mmHg', text: 'milímetro de mercúrio'},
        {value: 'inHg', text: 'polegada de mercúrio'},
        {value: 'mmH2O', text: 'milímetro de coluna d\'água'},
        {value: 'cmH2O', text: 'centímetro de coluna d\'água'},
        {value: 'inH2O', text: 'polegada de coluna d\'água'},
        {value: 'hPa', text: 'hectopascal'}
    ];
    const speed_data = [
        {value: 'hPa', text: 'hectopascal'},
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
