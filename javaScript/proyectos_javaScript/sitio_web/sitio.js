const btn_html = document.getElementById("btn_html");
const btn_css = document.getElementById("btn_css");
const btn_js = document.getElementById("btn_js");
const botones_content = document.querySelector(".botones_content");


btn_html.addEventListener("click",()=>{
    const main__html = document.getElementById("main__html");
    main__html.classList.toggle("main__html_");
    botones_content.classList.toggle("botones_content_");
})

btn_css.addEventListener("click",()=>{
    const main__css = document.getElementById("main__css");
    main__css.classList.toggle("main__css_");
    botones_content.classList.toggle("botones_content_");
})
btn_js.addEventListener("click",()=>{
    const main__js = document.getElementById("main_js");
    main__js.classList.toggle("main__js_");
    botones_content.classList.toggle("botones_content_");
})