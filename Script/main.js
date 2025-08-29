function changeDark(){
    const header = document.getElementById("navbar");
    const body = document.body;
    const h3 = document.querySelectorAll(".unit-h3");
    const p = document.querySelectorAll(".std-text");

    body.style.backgroundColor = "#161616";
    header.style.display = "rgba(22, 22, 22, 0.75)";

    for(let i = 0; i < h3.length; i++){
        h3[i].style.color = "#ffffff";
    }
    for(let i = 0; i < p.length; i++){
        p[i].style.color = "#ccccccff";
    }
}

//changeDark();
