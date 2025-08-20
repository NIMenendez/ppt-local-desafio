class ScoreEl extends HTMLElement {
  static get style() {
    return `
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
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*HTML*/ `
    <style>${ScoreEl.style}</style>
    <div class="container">
      <h3>Score</h3>
      <div class="container-p">
        <p class="p-player">Vos: 3</p>
        <p class="p-pc">PC: 3</p>
      </div>
    </div>
    `;
  }
}
customElements.define("score-el", ScoreEl);