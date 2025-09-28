let isDark;
let clickIsDark;

function changeDark(){
    const header = document.getElementById("navbar");
    const body = document.body;
    const titles = document.querySelectorAll(".dark-change");
    const p = document.querySelectorAll(".std-text");
    const unitContainers = document.querySelectorAll(".unit");
    const btn = document.getElementById("dark");
    const footer = document.getElementById("page-foot");
    
    const ucMouseOut = (event) => {
        event.currentTarget.style.backgroundColor = "#aba9a4";
    }
    const ucMouseOver = (event) => {
        event.currentTarget.style.backgroundColor = "#d1d1d1";
    }
    const darkUCMouseOut = (event) => {
        event.currentTarget.style.backgroundColor = "#060610ff";
    }
    const darkUCMouseOver = (event) => {
        event.currentTarget.style.backgroundColor = "#06003fff";
    }
    modeChange(false);
    function modeChange(click){
        click ? clickIsDark = isDark : clickIsDark = !isDark;
        if(!clickIsDark){
            body.style.backgroundColor = "#161616";
            header.style.backgroundColor = "rgba(22, 22, 22, 0.75)";
            header.style.boxShadow = "none";
            header.style.borderBottom = "1px #ffffff solid";
            footer.style.backgroundColor = "#06003fff";

            titles.forEach((index) => {
                index.style.color = "#ffffff";
            });

            p.forEach((index) => {
                index.style.color = "#ccccccff";
            });
            
            unitContainers.forEach((index) => {
                index.style.backgroundColor = "#060610ff";

                index.addEventListener("mouseover", darkUCMouseOver);
                index.addEventListener("mouseout", darkUCMouseOut);

                index.removeEventListener('mouseover', ucMouseOver);
                index.removeEventListener('mouseout', ucMouseOut);
            });

            btn.style.rotate = "180deg";
            btn.style.filter = "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(7249%) hue-rotate(193deg) brightness(95%) contrast(98%)";
            if(click){
                isDark = true;
                localStorageSetting("save");
            }
        } else{
            body.style.backgroundColor = "#fff8f3";
            header.style.backgroundColor = "rgba(255, 248, 243, 0.75)";
            header.style.boxShadow = "0px 0px 10px 2px";
            header.style.borderBottom = "none";
            footer.style.backgroundColor = "#2fb6ff";

            titles.forEach((index) => {
                index.style.color = "#333232";
            });

            p.forEach((index) => {
                index.style.color = "#515151";
            });
            
            unitContainers.forEach((index) => {
                index.style.backgroundColor = "#aba9a4";
                index.addEventListener('mouseover', ucMouseOver);
                index.addEventListener('mouseout', ucMouseOut);
                index.removeEventListener("mouseover", darkUCMouseOver);
                index.removeEventListener("mouseout", darkUCMouseOut);
            });

            btn.style.rotate = "0deg";
            btn.style.filter = "brightness(0) saturate(100%) invert(70%) sepia(11%) saturate(3984%) hue-rotate(134deg) brightness(109%) contrast(102%)";
            if(click){
                isDark = false;
                localStorageSetting("save");
            }
        }
    }
    btn.addEventListener("click", () => modeChange(true));
}
localStorageSetting("load");
changeDark();

function localStorageSetting(action){
    if(action === "save"){
        localStorage.setItem("isDark", JSON.stringify(isDark));
    }
    if(action == "load"){
        isDark = localStorage.getItem("isDark");
        isDark === "false" ? isDark = false : isDark = true;
        //isDark = Boolean(isDark);
    }
}


const unitChoose = document.getElementById("unitChoose");
let targetValue;
unitChoose.addEventListener('click', (link) =>{
    const linkTarget = link.target;
    if(linkTarget.tagName === "A"){
        targetValue = linkTarget.getAttribute("data-value");
        sessionStorage.setItem('sendUnit', targetValue);
    }
});

