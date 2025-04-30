const flipCard=()=> {
        let e=document.querySelectorAll(".contenido-card-razon-beneficio-vivienda"),
        t=document.querySelectorAll(".card-frontal-razon-beneficio-vivienda"),
        a=document.querySelectorAll(".card-trasera-razon-beneficio-vivienda"),
        o=document.querySelectorAll(".imagen-razon-beneficio-vivienda"),
        r=document.querySelectorAll(".imagen-frontal-razon-beneficio-vivienda"),
        c=document.querySelectorAll(".imagen-trasera-razon-beneficio-vivienda");
        e.forEach((o,r)=>{e[r].addEventListener("click",()=>{
            a[r].classList.contains("card-activo")?(a[r].classList.remove("card-activo"),t[r].style.transform="perspective(1000px) rotateY(0deg)",
            a[r].style.transform="perspective(1000px) rotateY(180deg)"):(a[r].classList.add("card-activo"),t[r].style.transform="perspective(1000px) rotateY(180deg)",
            a[r].style.transform="perspective(1000px) rotateY(360deg)")})}),
            
            o.forEach((e,t)=>{o[t].addEventListener("click",()=>{c[t].classList.contains("card-activo")?(c[t].classList.remove("card-activo"),
            r[t].style.transform="perspective(1000px) rotateY(0deg)",c[t].style.transform="perspective(1000px) rotateY(180deg)"):(c[t].classList.add("card-activo"),
            r[t].style.transform="perspective(1000px) rotateY(180deg)",c[t].style.transform="perspective(1000px) rotateY(360deg)")})})};

            flipCard();





