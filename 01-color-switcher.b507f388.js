const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let r=null;d.setAttribute("disabled","disabled"),e.addEventListener("click",(()=>{r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled")})),d.addEventListener("click",(()=>{clearInterval(r),d.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.b507f388.js.map