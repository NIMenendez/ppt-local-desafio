class TextEl extends HTMLElement {
  tags: string[] = ["h1", "p"];
  tag: string = "p";
  static get style() {
    return ``;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.tags.includes(this.getAttribute("tag")!)) {
      this.tag = this.getAttribute("tag") || this.tag;
    }
    console.log(this.tag);
    this.render();
  }
  render() {
    const rootEl = document.createElement(this.tag);
    rootEl.textContent = this.textContent;
    this.shadowRoot!.append(rootEl);
  }
}
customElements.define("text-el", TextEl);