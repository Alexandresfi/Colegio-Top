const carrosel = document.getElementsByClassName("containercarrosel")[0];

function rolarDireita(){
    console.log(carrosel.offsetWidth)
    carrosel.scrollLeft += carrosel.offsetWidth;
    carrosel.innerHTML = `<ul class="animate__animated animate__slideInRight"> 
                                <li> <img src="./assects/Projetos/Projeto Engenharias.jpeg" alt="Engenharias"> </li>
                                <li> <img src="./assects/Projetos/projeto.jpg" alt="projetos"> </li>    
                            </ul>
                            <div class="button">
                                <button  onclick="rolarEsquerda()"> <img src="./assects/arrow rigth.png" alt="arrow left" class="left"> </button>
                                <button  onclick="rolarDireita()"> <img src="./assects/arrow rigth.png" alt="arrow rigth"> </button>
                            </div>
    
    `;
}

function rolarEsquerda (){
    carrosel.innerHTML=`
                        <ul class="animate__animated animate__slideInLeft"> 
                        <li> <img src="./assects/Projetos/projeto Biológicas.jpg" alt=" biotecnologia"> </li>
                        <li> <img src="./assects/Projetos/projeto robotica girls.jpeg" alt="Linguagens"> </li>
                        <li> <img src="./assects/Projetos/Projeto Engenharias.jpeg" alt="Engenharias" width="400px"> </li>
                        </ul>
                        <div class="button">
                                <button id="left" > <img src="./assects/arrow rigth.png" alt="arrow left" class="left"> </button>
                                <button  onclick="rolarDireita()"> <img src="./assects/arrow rigth.png" alt="arrow rigth"> </button>
                        </div>
    `;
}

function aviso (){
    alert("Estamos em construção")
}
