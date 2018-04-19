/**
 * Created by martin on 19/04/18.
 */

class RwRandomQuote extends HTMLElement {

    constructor() {
        super();
        this._quotes = ['To be or not to be', 'A kingdom for my horse', 'Friends romans countrymen'];
        this._$quote = null;
        this._interval = null;
    }

    connectedCallback() {
        this.innerHTML = `<style> .rw-container {
                            width: 500px; margin: auto; border: dotted 1px #999; padding: 20px
                            }
                             .rw-container h1{
                             font-size: 20px; margin: 0;
                            }
                            </style>
                            <div class="rw-container">
                                <h1>Random quote</h1>
                                <p>"<span id="quote"></span>"</p>
                            </div>
                            `;
        this._$quote = this.querySelector('#quote');
        this._setInterval(this.getAttribute('interval'))
        this._render();
    }

    _render() {
        if (this._$quote !== null) {
            this._$quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];
        }
    }

    disconnectedCallback() {
        clearInterval(this._interval);
    }

    _setInterval(value) {
        if (this._interval !== null) {
            clearInterval(this._interval);
        }
        if (value > 0) {
            this._interval = setInterval(() => this._render(), value);
        }
    }
}


window.customElements.define('rw-random-quote', RwRandomQuote);
