const Um = document.getElementsByClassName("Click")[0];
const Dois = document.getElementsByClassName("Click")[1];
const Tres = document.getElementsByClassName("Click")[2];
const Quatro = document.getElementsByClassName("Click")[3];



Um.addEventListener("click",()=>{
    document.getElementsByClassName("Detalhes")[0].style.display="block";
    document.getElementsByClassName("Detalhes")[1].style.display="none";
    document.getElementsByClassName("Detalhes")[2].style.display="none";
    document.getElementsByClassName("Detalhes")[3].style.display="none";
})

Dois.addEventListener("click",()=>{
    document.getElementsByClassName("Detalhes")[0].style.display="none";
    document.getElementsByClassName("Detalhes")[1].style.display="block";
    document.getElementsByClassName("Detalhes")[2].style.display="none";
    document.getElementsByClassName("Detalhes")[3].style.display="none";
})

Tres.addEventListener("click",()=>{
    document.getElementsByClassName("Detalhes")[0].style.display="none";
    document.getElementsByClassName("Detalhes")[1].style.display="none";
    document.getElementsByClassName("Detalhes")[2].style.display="block";
    document.getElementsByClassName("Detalhes")[3].style.display="none";
})

Quatro.addEventListener("click",()=>{
    document.getElementsByClassName("Detalhes")[0].style.display="none";
    document.getElementsByClassName("Detalhes")[1].style.display="none";
    document.getElementsByClassName("Detalhes")[2].style.display="none";
    document.getElementsByClassName("Detalhes")[3].style.display="block";
})

document.getElementsByClassName("barMenu")[0].addEventListener("click",()=>{
    if(document.getElementsByClassName("Menu")[0].style.display != "block"){
        
        document.getElementsByClassName("Menu")[0].style.display = "block"
    }else{
        document.getElementsByClassName("Menu")[0].style.display = "none"
    }
})