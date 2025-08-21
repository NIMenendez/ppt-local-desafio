class e extends HTMLElement{static get style(){return`
    .container {
        position: relative;
        width: 380px;
        height: 380px;
      }
      .estrella-text {
        font-family: var(--fuete-odibee);
        letter-spacing: 0.5rem;
        font-size: 2.2rem;
        z-index: 2;
        color: #ffffff; /* Cambiar el color del texto a blanco para que contraste con el fondo rojo */
        position: absolute;
        top: 35%; /* Centrar verticalmente */
        left: 48%; /* Centrar horizontalmente */
        transform: translate(
          -50%,
          -50%
        ); /* Ajustar para que el centro del texto coincida con el centro de la estrella */
      }
      .estrella {
        position: absolute;
        z-index: 1;
        width: 330px;
        height: 330px;
        top: 14px;
        bottom: auto;
        left: 14px;
        right: 0px;
        background-color: var(--estrella-win);
        clip-path: polygon(
          50% 0%,
          67% 28%,
          98% 35%,
          79% 55%,
          93% 100%,
          52% 79%,
          10% 100%,
          23% 60%,
          2% 35%,
          33% 26%
        );
      }
      .estrella2 {
        width: 360px;
        height: 360px;
        background-color: rgb(15, 15, 15);
        clip-path: polygon(
          50% 0%,
          67% 28%,
          98% 35%,
          79% 55%,
          93% 100%,
          52% 79%,
          10% 100%,
          23% 60%,
          2% 35%,
          33% 26%
        );
      }     
      .estrella-invertida{
        transform: rotatex(180deg);  
        background-color: var(--estrella-loser);
     
      } 
      .estrella-invertida2{
        transform: rotatex(180deg);  
        background-color: black;
      }   
       `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){if(this.shadowRoot.innerHTML=`
    <style>${e.style}</style>
    <div class="container">
      <div class="estrella"></div>
      <div class="estrella2"></div>
      <h3 class="estrella-text">Ganaste!</h3>
    </div>
    `,this.hasAttribute("invertida")){let e=this.shadowRoot.querySelector(".estrella"),t=this.shadowRoot.querySelector(".estrella2"),r=this.shadowRoot.querySelector(".estrella-text");e.setAttribute("class","estrella estrella-invertida"),t.setAttribute("class","estrella2 estrella-invertida2"),r.textContent="Perdiste!"}}}customElements.define("estrella-el",e);class t extends HTMLElement{static get style(){return`
    button {
        font-family: var(--fuente-odibee);
        font-size: 3rem;
        letter-spacing: 0.15rem;
        color: var(--button-font);
        min-width: 380px;
        height: 84px;
        background-color: var(--color-button);
        border: solid 10px var(--color-borderbutton);
        border-radius: 10px;
        transition: ease-in-out 0.25s;
        cursor: pointer;
      }
      button:hover {
        background-color: var(--color-borderbutton);
        border: solid 10px var(--color-button);
      }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=this.getAttribute("class");this.shadowRoot.innerHTML=`
    <style>${t.style}</style>
    <button class="${e}"><slot></slot></button>

    `}}customElements.define("button-el",t);class r extends HTMLElement{static get style(){return`
    .container {
        box-sizing: border-box;
        font-family: var(--fuente-odibee);
        font-size: 1.5rem;
        width: 259px;
        height: 187px;
        background-color: white;
        color: black;
        border: solid 10px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        margin: 0;
      }
      .container h3 {
        /* margin: 0; */
        text-align: center;
        letter-spacing: 0.5rem;
        margin-top: 10px;
      }
      .container-p {
        flex-grow: 1;
        width: 100%;
        height: 140px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .p-pc,
      .p-player {
        margin: 0;
        text-align: end;
        letter-spacing: 0.5rem;
      }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${r.style}</style>
    <div class="container">
      <h3>Score</h3>
      <div class="container-p">
        <p class="p-player">Vos: 3</p>
        <p class="p-pc">PC: 3</p>
      </div>
    </div>
    `}}customElements.define("score-el",r);class a extends HTMLElement{static get style(){return""}constructor(){super(),this.tags=["h1","p"],this.tag="p",this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag),console.log(this.tag),this.render()}render(){let e=document.createElement(this.tag);e.textContent=this.textContent,this.shadowRoot.append(e)}}customElements.define("text-el",a);const o={data:{currentGame:{clientMove:null,pcMove:null},historyByTurn:[],scores:{myScore:0,pcScore:0}},subscribers:[],subscribe(e){this.subscribers.push(e)},getState(){return this.data},setState(e){this.data={...this.data,...e,currentGame:{...this.data.currentGame,...e.currentGame||{}},scores:{...this.data.scores,...e.scores||{}}},this.subscribers.forEach(e=>e(this.data)),this.saveToLocalStorage()},setMoves(e){let t=this.getRandomMove();this.setState({currentGame:{clientMove:e,pcMove:t}})},getRandomMove(){let e=["rock","paper","scissors"];return e[Math.floor(Math.random()*e.length)]},pushToHistory(e){let t=[...this.data.historyByTurn,e];this.setState({historyByTurn:t})},getWinner:(e,t)=>e===t?"tie":({rock:"scissors",paper:"rock",scissors:"paper"})[e]===t?"clientWins":"pcWins",playGame(e){if(null===this.data.currentGame.pcMove)return;let t=this.getWinner(e,this.data.currentGame.pcMove);"clientWins"===t?this.setState({scores:{myScore:this.data.scores.myScore+1}}):"pcWins"===t&&this.setState({scores:{pcScore:this.data.scores.pcScore+1}})},saveToLocalStorage(){localStorage.setItem("gameState",JSON.stringify(this.data))},loadFromLocalStorage(){let e=localStorage.getItem("gameState");e&&(this.data=JSON.parse(e),this.subscribers.forEach(e=>e(this.data)))},resetScores(){this.setState({scores:{myScore:0,pcScore:0}})}},n="/ppt-local-desafio";function i(){return location.host.includes("github.io")}const s=[{pathRegex:/^\/inicio$/,render:()=>(function(e){let t=document.createElement("div");t.innerHTML=`
  <style>
  .contenedor{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 25px;
    padding: 20px;
    width: 380px;
    height: 330px;
    overflow-wrap: anywhere;
  }
  .title h1 {
    text-align: center;
    margin: 0;
    font-family: var(--fuente-odibee);
    letter-spacing: 0.25rem;
    font-size: 5.5rem;
    color: var(--color-h1);
  }
  
  .title h1 span {
    color: #0090485a;
  }
  .div-button{
    height: 100px;    
  }
  .container-manos {
    padding: 0 10px;
    min-width: 370px;
    position: fixed;
    display: flex;
    bottom: -40px;
    flex-direction: row;
    gap: 40px;
  }
  .container-manos img {
    width: 100px;
    height: 250px;
  }
  </style>
  <div class="contenedor">
  <div class="title">
  <h1>
    Piedra<br />
    Papel <span>\xf3</span> <br />Tijera
  </h1>
</div>
<div class="div-button">
<button-el>Empezar!</button-el>
</div>
<div class="container-manos">
  <img src="./assets/papel.svg" alt="" />
  <img src="./assets/piedra.svg" alt="" />
  <img src="./assets/tijera.svg" alt="" />
</div>
</div>
  `;let r=t.querySelector("button-el");return r?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t})({goTo:l})},{pathRegex:/^\/instrucciones$/,render:()=>(function(e){let t=document.createElement("div");t.innerHTML=`
  <style>
    .container {
      height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.div-text {
  width: 317px;
  height: 380px;
}
.div-text-p {
  font-family: var(--fuente-odibee);
  font-size: 2.7rem;
  letter-spacing: 0.11rem;
  font-weight: 800;
  text-align: center;
}
.div-button {
  
  height: 100px;
}
.container-manos {
  padding: 0 10px;
  min-width: 370px;
  position: fixed;
  display: flex;
  bottom: -40px;
  flex-direction: row;
  gap: 40px;
}
.container-manos img {
  width: 100px;
  height: 250px;
}
</style>
  <div class="container">
      <div class="div-text">
        <p class="div-text-p">
          Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los
          3 segundos. <br> El primero en llegar a 2 puntos gana el juego
        </p>
      </div>
      <div class="button">
        <button-el>Jugar!</button-el>
      </div>
      <div class="container-manos">
        <img src="./assets/papel.svg"/>
        <img src="./assets/piedra.svg"/>
        <img src="./assets/tijera.svg"/>
      </div>
  </div>
  `;let r=t.querySelector("button-el");return o.data.scores.pcScore=0,o.data.scores.myScore=0,r?.addEventListener("click",()=>{e.goTo("/juego")}),t})({goTo:l})},{pathRegex:/^\/juego$/,render:()=>(function(e){let t=document.createElement("div");t.innerHTML=`
    <style>
      /* Estilos como los que ten\xedas anteriormente */
      .principal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
      }
      .progressbar-container {
        width: 400px;
        height: 400px;
        margin: 0px auto;
      }
      .progressbar-container .outer-box {
        border-radius: 50%;
        background-color: transparent;
        width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressbar-container .inner-box {
        font-size: 12rem;
        font-weight: 900;
        width: 180px;
        height: 0px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressbar-container svg {
        position: absolute;
      }
      .progressbar-container circle {
        fill: none;
        stroke: url(#gradientColor);
        stroke-width: 30px;
        stroke-dasharray: 1040;
        stroke-dashoffset: 1040;
        animation: loading 3.3s linear forwards;
      }
      @keyframes loading {
        100% {
          stroke-dashoffset: 0;
        }
      }
      .elige {
        font-size: 2rem;
        font-family: var(--fuente-odibee);
        text-align: center;
        margin: 0;
      }
      .my-score, .computer-score {font-family: var(--fuente-odibee);}
      .container-manos {
        position: fixed;
        bottom: -80px;
        display: flex;
        justify-content: space-between;
        max-width: 450px;
      }
      .general {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 150px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .piedra, .papel, .tijera {
        width: 100px;
        height: 300px;
       
        
        width: 100px;
        height: 300px;
        transform: scale(1) translateY(0); /* Estado inicial */
        transition: transform 0.3s ease-in-out; /* Transici\xf3n suave para ambas transformaciones */ 
          }
        .general:hover .piedra,
        .general:hover .papel,
        .general:hover .tijera {
          transform: scale(1.2) translateY(-40px); /* Se agranda un 20% al hacer click */
        }
        .piedra.active,
        .papel.active,
        .tijera.active {
          transform: scale(1.2) translateY(-40px); /* Se agranda un 20% al hacer click */
        }
        .general .piedra,
        .general .papel,
        .general .tijera {
           transition: transform 0.3s ease-in-out;
        }

        .general.active .piedra,
        .general.active .papel,
        .general.active .tijera {
          transform: scale(1.2) translateY(-40px); /* Se mantiene desplazada */
          }
        .secundario {
        width: 100%;
        height: 100vh;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .div-img-maquina, .div-img-jugador {
        width: 400px;
        height: 400px;
      }
      .div-img-maquina {
        width: 400px;
        height: 400px;
        transform: rotate(180deg);
      }
      .imagen-maquina, .imagen-jugador {
        width: 400px;
        height: 400px;
      }
      .my-score, .computer-score {
        font-size: 2rem;
      }
    </style>
    <div class="principal">
      <div class="progressbar-container">
        <div class="outer-box">
          <div class="inner-box">3</div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">
            <defs>
              <linearGradient id="gradientColor">
                <stop offset="0%" stop-color="#006cfc" />
                <stop offset="100%" stop-color="#001997" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="160" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <h3 class="elige">Elige tu jugada antes de que se termina el tiempo!</h3>
      <div class="container-manos">
        <button class="general">
          <img class="piedra" src="./assets/piedra.svg" alt="" />
        </button>
        <button class="general" >
          <img class="papel" src="./assets/papel.svg" alt="" />
        </button>
        <button class="general" >
          <img class="tijera" src="./assets/tijera.svg" alt="" />
        </button>
      </div>
      <div class="my-score">Jugador: <span></span></div>
      <div class="computer-score"> Computadora: <span></span></div>
    </div>
    <div class="secundario">
      <div class="div-img-maquina">
        <img class="imagen-maquina" src="./assets/papel.svg" alt="" />
      </div>
      
      <div class="div-img-jugador">
        <img class="imagen-jugador" src="./assets/papel.svg" alt="" />
      </div>
    </div>
  `;let r=t.querySelector(".container-manos button img.piedra"),a=t.querySelector(".container-manos button img.papel"),n=t.querySelector(".container-manos button img.tijera"),i=t.querySelector(".principal"),s=t.querySelector(".secundario"),l=t.querySelector(".imagen-maquina"),c=t.querySelector(".imagen-jugador"),d=t.querySelector(".my-score span"),p=t.querySelector(".computer-score span");o.subscribe(()=>{let e=o.getState();d.textContent=e.scores.myScore.toString(),p.textContent=e.scores.pcScore.toString()});let g=o.getState();function u(e){o.setMoves(e);let r=o.data.currentGame.pcMove;l.src=`../public/${r}.svg`,c.src=`../public/${e}.svg`,o.playGame(e);let a=t.querySelectorAll(".general");a.forEach(e=>e.classList.remove("active"));let n=t.querySelector(`.general img.${e}`)?.parentElement;n&&n.classList.add("active"),a.forEach(e=>{e.disabled=!0,e.style.pointerEvents="none"})}d.textContent=g.scores.myScore.toString(),p.textContent=g.scores.pcScore.toString(),setTimeout(()=>{let t=o.getState();2==t.scores.pcScore||2==t.scores.myScore?e.goTo("/resultado"):e.goTo("/juego")},5e3),r.addEventListener("click",()=>u("rock")),a.addEventListener("click",()=>u("paper")),n.addEventListener("click",()=>u("scissors"));let h=setInterval(function(){let e=document.querySelector(".inner-box"),t=Number(e.innerText);t>-2&&(e.innerText=(t-1).toString()),t<=0&&(s.style.display="flex",i.style.display="none",clearInterval(h))},1e3);return t})({goTo:l})},{pathRegex:/^\/resultado$/,render:()=>(function(e){let t,r=document.createElement("div");r.innerHTML=`
  <style>.ganaste {
  /* display: none; */
  height: 100vh;
  background-color: var(--background-win);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container {
  box-sizing: border-box;
  font-family: var(--fuente-odibee);
  font-size: 1.5rem;
  width: 259px;
  height: 187px;
  background-color: white;
  color: black;
  border: solid 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0;
}
.container h3 {
  /* margin: 0; */
  text-align: center;
  letter-spacing: 0.5rem;
 }
.container-p {
  flex-grow: 1;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.p-maquina,
.p-persona {
  margin: 0;
  text-align: end;
  letter-spacing: 0.5rem;
}
/*  */
.perdiste {
  height: 100vh;
  background-color: var(--background-loser);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 50px;
}
.contenedor {
  box-sizing: border-box;
  font-family: var(--fuente-odibee);
  font-size: 1.5rem;
  width: 259px;
  height: 187px;
  background-color: white;
  color: black;
  border: solid 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0;
}
.contenedor h3 {
  text-align: center;
  letter-spacing: 0.5rem;
  margin-top: 10px;
}
.contenedor-p {
  flex-grow: 1;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.parrafo-maquina,
.parrafo-persona {
  margin: 0;
  text-align: end;
  letter-spacing: 0.5rem;
}
  </style>
  <div class="ganaste">
  <estrella-el></estrella-el>
  <div class="container">
    <h3>Score</h3>
    <div class="container-p">
      <p class="p-persona">Vos: 3</p>
      <p class="p-maquina">Maquina: 3</p>
    </div>
  </div>
   <button-el>Volver a Jugar!</button-el>  
   <!--   <button-el>Ir al Inicio!</button-el>
  -->
  </div>
  <!--  -->
  <div class="perdiste">
  <estrella-el invertida></estrella-el>
  <div class="contenedor">
    <h3>Score</h3>
    <div class="contenedor-p">
    <p class="parrafo-persona">Vos: 3</p>
    <p class="parrafo-maquina">Maquina: 3</p>
    </div>
    </div>
    <button-el class="volver-jugar">Volver a Jugar!</button-el>
    <!-- <button-el>Ir al Inicio!</button-el>  -->

  
</div>
  `,r.querySelector("button-el").addEventListener("click",()=>{e.goTo("/inicio")}),r.querySelector(".volver-jugar").addEventListener("click",()=>{e.goTo("/inicio")});let a=o.getState();r.querySelector(".p-persona").textContent=`Vos: ${a.scores.myScore}`,r.querySelector(".p-maquina").textContent=`Maquina: ${a.scores.pcScore}`,r.querySelector(".parrafo-persona").textContent=`Vos: ${a.scores.myScore}`,r.querySelector(".parrafo-maquina").textContent=`Maquina: ${a.scores.pcScore}`,t=!(a.scores.pcScore>a.scores.myScore);let n=r.querySelector(".ganaste"),i=r.querySelector(".perdiste");return t?(n.style.display="flex",i.style.display="none"):(n.style.display="none",i.style.display="flex"),r})({goTo:l})},{pathRegex:/.*/,render:()=>{let e=document.createElement("div");return e.innerHTML="<h1>404 - Página no encontrada</h1>",e}}];function l(e){let t=e.startsWith("/")?e:"/"+e,r=i()?n+t:t;history.pushState({},"",r),c(r)}function c(e){let t=e;i()&&(t.startsWith(n)&&(t=t.slice(n.length)),t.startsWith("/")||(t="/"+t)),t=t.replace(/\/$/,"");let r=s.find(e=>e.pathRegex.test(t));if(r){let e=document.getElementById("app");e&&(e.innerHTML="",e.appendChild(r.render({goTo:l})))}else console.warn(`El path '${t}' no fue encontrado.`)}if(!document.querySelector("#app"))throw Error("Elemento #app no encontrado");const d=location.pathname.replace(/\/$/,"");i()&&(d===n||d===n+"/")?l("/inicio"):i()||""!==d&&"/"!==d?c(d):l("/inicio"),window.addEventListener("popstate",()=>c(location.pathname));
//# sourceMappingURL=ppt-local.72259554.js.map
