class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style> p {color: red;}</style><p>My web component</p>`;
    }
}
window.customElements.define('my-component', MyComponent);
