const carrosel = document.getElementsByClassName("containercarrosel")[0];
const empurar = document.getElementsByClassName("ultima");
const mostrarConteudoBtnFist = document.getElementsByClassName("show")[0];

const Video = document.getElementById("video")
const iMageVideo = document.getElementsByClassName("video")[0]

const Missao = document.getElementsByClassName("Missao")[0];
const Visao = document.getElementsByClassName("Visao")[0];
const Valores = document.getElementsByClassName("Valores")[0];
const Anuncios = document.getElementsByClassName("Anuncios")[0];



const SaibaMais = document.getElementsByClassName("saiba");


function rolarDireita(){
    empurar[0].style.display = "none";
    empurar[1].style.display = "none";

}

function rolarEsquerda (){
    empurar[0].style.display = "block";
    empurar[1].style.display = "block";
}



function playA(){

    Video.play(); 
    console.log(iMageVideo)
    

    if(!(Video.paused)){
        iMageVideo.style.display = "none"
    }else{
        iMageVideo.style.display = "block"
    }
}


function missao(){
    Missao.classList.add("active")
    Valores.classList.remove("active")
    Visao.classList.remove("active")
    Anuncios.classList.remove("active")
    mostrarConteudoBtnFist.innerHTML=` 
    <div class="show">

        <figure>
            <img src="./assects/alunos3Ano.png" alt="alnos do 3º ano">
            <figcaption>Alunos(as) do 3º ano</figcaption>
        </figure>

        <p>Visamos abordar a educação de forma ampla, envolvendo não somente a transmissão de conhecimento, mas
            também
            as habilidades sociais,
            emocionais e comportamentais, além de todo o contexto da vida dos alunos.
            <br> <br><br>
            <span>Ler mais <img src="./assects/arrow rigth.png" alt="arrow rigth"> </span>
        </p>
        
    </div>`
}

function visao(){
    Visao.classList.add("active")
    Valores.classList.remove("active")
    Missao.classList.remove("active")
    Anuncios.classList.remove("active")
    mostrarConteudoBtnFist.innerHTML=` 
    <div class="show">

        <figure>
            <img src="./assects/Primeira/visao.jpg" alt="visão" width="199px" heigth="232px"  class="imgPri">
            <figcaption>Alunas da 3ª Série</figcaption>
        </figure>

        <p>Ser uma Escola de referência a nível local e nacional pelo sucesso acadêmico
            e profissional dos seus alunos, pela qualidade do seu ambiente interno e relações
            externas.
            <br> <br><br>
            <a href="./sobre.html">Ler mais <img src="./assects/arrow rigth.png" alt="arrow rigth"> </a>
        </p>
        
    </div>`   
}

function valores(){
    Valores.classList.add("active")
    Missao.classList.remove("active")
    Visao.classList.remove("active")
    Anuncios.classList.remove("active")
    mostrarConteudoBtnFist.innerHTML=` 
    <div class="show">

        <figure>
            <img src="./assects/Primeira/valores.jpg" alt="visão" width="199px" heigth="232px" class="imgPri">
            <figcaption>Alunas do Fundamental 2</figcaption>
        </figure>

        <p> Queremos ser uma Escola, que promova uma cultura de liberdade e que esteja atenta à 
            diversidade de todos os membros da comunidade educativa. Queremos ser uma Escola que 
            contribua para a autonomia intelectual das crianças e adolescentes.
            <br> <br><br>
            <a href="./sobre.html">Ler mais <img src="./assects/arrow rigth.png" alt="arrow rigth"> </a>
        </p>
    
    </div>`   
}

function anuncios(){
    Anuncios.classList.add("active")
    Valores.classList.remove("active")
    Visao.classList.remove("active")
    Missao.classList.remove("active")
    mostrarConteudoBtnFist.innerHTML=` 
    <div class="show">

        <figure>
            <img src="./assects/Primeira/colegiotop.jpeg" alt="visão" width="199px" heigth="232px">
            <figcaption>Colégio Top </figcaption>
        </figure>

        <p> Matrículas abertas 2022! Primeira Escola 4.0 da Paraíba!
            <br> <br><br>
            <a href="./sobre.html">Ler mais <img src="./assects/arrow rigth.png" alt="arrow rigth"> </a>
        </p>
    
    </div>`  
}

SaibaMais[0].addEventListener("click", ()=>{

        if(document.getElementsByClassName("mostrarResto")[0].innerHTML === "..."){

            document.getElementsByClassName("mostrarResto")[0].innerHTML=`
                próprios jogos, histórias e animações, gerando assim diversas 
                habilidades como trabalho em equipe, resoluções de problemas, 
                raciocínio lógico, além de habilidade socioemocionais.`
                SaibaMais[0].innerHTML = `<span class="saiba">Esconder</span>`
        }else {
            document.getElementsByClassName("mostrarResto")[0].innerHTML = "..."
            SaibaMais[0].innerHTML = `<span class="saiba">Saiba mais</span>`
        }
})

SaibaMais[1].addEventListener("click", ()=>{

    if(document.getElementsByClassName("mostrarResto")[1].innerHTML === "..."){

        document.getElementsByClassName("mostrarResto")[1].innerHTML=`
        a gerar controvérsias. Exemplo disso 
        são a utilização de diagnósticos baseados em DNA, a clonagem humana, e o consumo de alimentos geneticamente modificados. 
        Os projetos buscam aproximar a ciência clássica e moderna aos alunos, fazendo-os perceber que a ciência é um elemento comum ao seu cotidiano.
        `
            SaibaMais[1].innerHTML = `<span class="saiba">Esconder</span>`
    }else {
        document.getElementsByClassName("mostrarResto")[1].innerHTML = "..."
        SaibaMais[1].innerHTML = `<span class="saiba">Saiba mais</span>`
    }
})

SaibaMais[2].addEventListener("click", ()=>{

    if(document.getElementsByClassName("mostrarResto")[2].innerHTML === "..."){

        document.getElementsByClassName("mostrarResto")[2].innerHTML=`
        sociedade que integram, melhoram a autoestima e aprimoram a expressividade ao máximo!
        Nesse projeto, os alunos têm acesso à oficinas multi- artísticas ao longo do ano letivo,
         utilizando leituras diversas, interpretação: oral, escrita e corporal, dramatização, dança,
          canto, recursos tecnológicos como criação de videoclipe, trabalho em grupo e pesquisas.

        `
            SaibaMais[2].innerHTML = `<span class="saiba">Esconder</span>`
    }else {
        document.getElementsByClassName("mostrarResto")[2].innerHTML = "..."
        SaibaMais[2].innerHTML = `<span class="saiba">Saiba mais</span>`
    }
})

SaibaMais[3].addEventListener("click", ()=>{

    if(document.getElementsByClassName("mostrarResto")[3].innerHTML === "..."){

        document.getElementsByClassName("mostrarResto")[3].innerHTML=`
         Presidência da República, levando a uma melhor compreensão acerca das propostas em questão. Estão sendo produzidos recursos interativos 
         para dar maior 
         visibilidade ao debate de programas de governo, qualificando assim o debate político..<br>
        `
            SaibaMais[3].innerHTML = `<span class="saiba">Esconder</span>`
    }else {
        document.getElementsByClassName("mostrarResto")[3].innerHTML = "..."
        SaibaMais[3].innerHTML = `<span class="saiba">Saiba mais</span>`
    }
}
)
SaibaMais[4].addEventListener("click", ()=>{

    if(document.getElementsByClassName("mostrarResto")[4].innerHTML === "..."){

        document.getElementsByClassName("mostrarResto")[4].innerHTML=`
         lançamento horizontal e oblíquo. Estudam
                            também a parte de química
                            relacionada aos combustíveis utilizados por foguetes ...<br>
        `
            SaibaMais[4].innerHTML = `<span class="saiba">Esconder</span>`
    }else {
        document.getElementsByClassName("mostrarResto")[4].innerHTML = "..."
        SaibaMais[4].innerHTML = `<span class="saiba">Saiba mais</span>`
    }
})

document.getElementById("Todos").addEventListener("click", ()=>{

    if(document.getElementsByClassName("events")[0].style.overflow === "auto"){
        document.getElementsByClassName("events")[0].style.overflow="hidden";
        document.getElementById("Todos").innerText="Todos"
    }else{
        document.getElementsByClassName("events")[0].style.overflow="auto"
        document.getElementById("Todos").innerText="Mostrar Menos"
    }
})

function mostrarTexto(Element){

    if(document.getElementsByClassName("textoCompleto")[Element.id].style.display !="block"){
        document.getElementsByClassName("textoCompleto")[Element.id].style.display ="block"
    }else{
        document.getElementsByClassName("textoCompleto")[Element.id].style.display ="none"
    }
}

document.getElementsByClassName("barMenu")[0].addEventListener("click",()=>{
    
    document.getElementsByClassName("barMenu")[0].classList.toggle("active")

    if(document.getElementsByClassName("Menu")[0].style.display != "block"){
        
        document.getElementsByClassName("Menu")[0].style.display = "block"
    }else{
        document.getElementsByClassName("Menu")[0].style.display = "none"
    }
})

var $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
  slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});

const $responsiveCarousel = document.querySelector(".js-carousel--responsive");
 
new Glider($responsiveCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});

window.addEventListener('load', function(){
  new Glider(document.querySelector($simpleCarousel), {
    setting: setting-value
  })
})