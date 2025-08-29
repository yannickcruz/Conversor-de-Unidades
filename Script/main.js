function changeDark(){
    const header = document.getElementById("navbar");
    const body = document.body;
    const titles = document.querySelectorAll(".dark-change");
    const p = document.querySelectorAll(".std-text");
    const unitContainers = document.querySelectorAll(".unit");
    const btn = document.getElementById("dark");
    let isDark = false;

    
    btn.addEventListener('click', () => {
        if(!isDark){
            body.style.backgroundColor = "#161616";
            header.style.backgroundColor = "rgba(22, 22, 22, 0.75)";
            header.style.boxShadow = "none";
            header.style.borderBottom = "1px #ffffff solid";

            titles.forEach((index) => {
                index.style.color = "#ffffff";
            });

            p.forEach((index) => {
                index.style.color = "#ccccccff";
            });
            
            unitContainers.forEach((index) => {
                index.style.background = "linear-gradient(20deg, #060610ff, #0f0e18ff)";
            });

            btn.style.rotate = "180deg";
            btn.style.filter = "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(7249%) hue-rotate(193deg) brightness(95%) contrast(98%)";
            isDark = true;
        } else{
            body.style.backgroundColor = "#fff8f3";
            header.style.backgroundColor = "rgba(255, 248, 243, 0.75)";
            header.style.boxShadow = "0px 0px 10px 2px";
            header.style.borderBottom = "none";

            titles.forEach((index) => {
                index.style.color = "#333232";
            });

            p.forEach((index) => {
                index.style.color = "#515151";
            });
            
            unitContainers.forEach((index) => {
                index.style.background = "linear-gradient(20deg, #d1d1d1, #aba9a4)";
            });

            btn.style.rotate = "0deg";
            btn.style.filter = "brightness(0) saturate(100%) invert(70%) sepia(11%) saturate(3984%) hue-rotate(134deg) brightness(109%) contrast(102%)";
            isDark = false;
        }
    })
}

changeDark();


