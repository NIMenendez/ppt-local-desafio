class ButtonEl extends HTMLElement {
  static get style() {
    return `
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
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const clase = this.getAttribute("class");
    this.shadowRoot!.innerHTML = `
    <style>${ButtonEl.style}</style>
    <button class="${clase}"><slot></slot></button>

    `;
  }
}
customElements.define("button-el", ButtonEl);