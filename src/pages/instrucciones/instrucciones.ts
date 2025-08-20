import { state } from "../../state.ts";

export function initInstrucciones(params: { goTo: (arg: string) => void }) {
  let div = document.createElement("div");
  div.innerHTML = /*html*/ `
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
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          3 segundos. <br> El primero en llegar a 2 puntos gana el juego
        </p>
      </div>
      <div class="button">
        <button-el>Jugar!</button-el>
      </div>
      <div class="container-manos">
        <img src="/ppt-local/assets/papel.svg"/>
        <img src="/ppt-local/assets/piedra.svg"/>
        <img src="/ppt-local/assets/tijera.svg"/>
      </div>
  </div>
  `;
  const buttonEl = div.querySelector("button-el");

  state.data.scores.pcScore = 0;
  state.data.scores.myScore = 0;

  buttonEl?.addEventListener("click", () => {
    params.goTo("/juego");
  });
  return div;
}