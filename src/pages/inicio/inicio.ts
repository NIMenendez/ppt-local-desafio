import "../../components/button/button";

export function initHome(params: { goTo: (arg: string) => void }) {
  const div: HTMLDivElement = document.createElement("div");
  div.innerHTML = `
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
    Papel <span>ó</span> <br />Tijera
  </h1>
</div>
<div class="div-button">
<button-el>Empezar!</button-el>
</div>
<div class="container-manos">
  <img src="/ppt-local/assets/papel.svg" alt="" />
  <img src="/ppt-local/assets/piedra.svg" alt="" />
  <img src="/ppt-local/assets/tijera.svg" alt="" />
</div>
</div>
  `;
  const buttonEl = div.querySelector("button-el");

  buttonEl?.addEventListener("click", () => {
    params.goTo("/instrucciones");
  });

  return div;
}