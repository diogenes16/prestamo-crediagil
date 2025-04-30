acordeonDocumentos=()=>{
    let e=document.querySelectorAll(".boton-acordeon-documentos-vivienda"),
    t=document.querySelectorAll(".contenido-acordeon-documentos-vivienda"),
    a=document.querySelectorAll(".flecha-acordeon-documentos-vivienda");
    e.forEach((o,r)=>{e[r].addEventListener("click",c);
        function c(){t[r].classList.contains("acordeon-documento-vivienda-activo")?(t[r].classList.remove("acordeon-documento-vivienda-activo"),
            t[r].style.maxHeight="0",a[r].style.transform="rotate(0deg)"):(t[r].classList.add("acordeon-documento-vivienda-activo"),
            t[r].style.maxHeight=`${t[r].scrollHeight}px`,a[r].style.transform="rotate(180deg)")}})};acordeonDocumentos(),ScrollReveal({reset:!0}),ScrollReveal().reveal(".headline",{delay:500});