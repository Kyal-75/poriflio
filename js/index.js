const tbtn=document.querySelector("#tbtn");
tbtn.onclick=()=> {
    window.scrollTo(0,0);
}

window.onscroll=()=> {
    if(window.scrollY>=500) {
        tbtn.style.display="block";

    }
    else {
        tbtn.style.display="none";
    }
}