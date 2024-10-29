@customElement('ds-button')
class Button extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <style>
        color: green;
      </style>
      <p>test</p>
      <button type="button">Hi</button>
    `
  }
  customElements.define('ds-button', Button)
}
