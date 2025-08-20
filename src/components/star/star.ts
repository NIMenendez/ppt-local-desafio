class Estrella extends HTMLElement {
  static get style() {
    return /*CSS*/ `
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
       `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*HTML*/ `
    <style>${Estrella.style}</style>
    <div class="container">
      <div class="estrella"></div>
      <div class="estrella2"></div>
      <h3 class="estrella-text">Ganaste!</h3>
    </div>
    `;
    // const contenedorEstrella = this.shadowRoot!.querySelector(".container");
    if (this.hasAttribute("invertida")) {
      const estrella = this.shadowRoot!.querySelector(".estrella");
      const estrella2 = this.shadowRoot!.querySelector(".estrella2");
      const estrellaText = this.shadowRoot!.querySelector(".estrella-text");
      estrella!.setAttribute("class", "estrella estrella-invertida");
      estrella2!.setAttribute("class", "estrella2 estrella-invertida2");
      estrellaText!.textContent = "Perdiste!";
    }
  }
}
customElements.define("estrella-el", Estrella);