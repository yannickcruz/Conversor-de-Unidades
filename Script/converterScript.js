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

function create_length(){
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

    
}