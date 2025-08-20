import { state } from "../../state.ts";

export function initResultado(params: { goTo: (arg: string) => void }) {
  const divEl = document.createElement("div");
  divEl.innerHTML = /*HTML */ `
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
  `;

  const volverAlInicio = divEl.querySelector("button-el")!;

  volverAlInicio.addEventListener("click", () => {
    params.goTo("/inicio");
  });
  const volverAlInicioDos = divEl.querySelector(".volver-jugar")!;

  volverAlInicioDos.addEventListener("click", () => {
    params.goTo("/inicio");
  });

  // localStorage.removeItem("saved-state");
  let newCurrentState = state.getState();
  const pPersona = divEl.querySelector(".p-persona")!;
  pPersona.textContent = `Vos: ${newCurrentState.scores.myScore}`;

  const pMaquina = divEl.querySelector(".p-maquina")!;
  pMaquina.textContent = `Maquina: ${newCurrentState.scores.pcScore}`;

  const parrafoPersona = divEl.querySelector(".parrafo-persona")!;
  parrafoPersona.textContent = `Vos: ${newCurrentState.scores.myScore}`;
  const parrafoMaquina = divEl.querySelector(".parrafo-maquina")!;
  parrafoMaquina.textContent = `Maquina: ${newCurrentState.scores.pcScore}`;

  // Suponiendo que tienes una variable que indica si el jugador ganó o perdió
  let juegoGanado;

  if (newCurrentState.scores.pcScore > newCurrentState.scores.myScore) {
    juegoGanado = false;
  } else {
    juegoGanado = true;
  }

  const mostrarDivGanaste: HTMLDivElement = divEl.querySelector(".ganaste")!;
  const mostrarDivPerdiste: HTMLDivElement = divEl.querySelector(".perdiste")!;

  if (juegoGanado) {
    mostrarDivGanaste!.style.display = "flex"; // Muestra el div de ganaste
    mostrarDivPerdiste!.style.display = "none"; // Oculta el div de perdido
  } else {
    mostrarDivGanaste!.style.display = "none"; // Oculta el div de ganado
    mostrarDivPerdiste!.style.display = "flex"; // Muestra el div de perdido
  }

  return divEl;
}