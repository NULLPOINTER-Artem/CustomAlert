import {checkOnEmptyMessage, setDefaultType} from './util.js';

export default class AlertComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {    
        if(!checkOnEmptyMessage(this.message)) {
            this.innerHTML = `<p>${this.message}<\p> <button type="button">OK</button>`;

            let button = this.querySelector('button');
            button.classList.add('btn');
            button.addEventListener('click', (e) => {
                this.style.display = "none";
            });
        } else {
            this.style.display = 'none';
        }
    }

    disconnectedCallback() {
    }

    static get observedAttributes() {
        return ['type', 'message'];
    }

    attributeChangedCallback(nameAtt, prevVal, currVal) {
        switch(nameAtt) {
            case 'message': {
                if(!this.hasAttribute('type')) {
                    setDefaultType(this.style);
                }

                this.message = currVal;
                break;
            }
            case 'type': {
                switch(currVal) {
                    case 'error': {
                        this.style.color = '#762129'
                        this.style.backgroundColor = '#f8d7da';
                        break;
                    }
                    case 'info': {
                        this.style.color = '#256773';
                        this.style.backgroundColor = '#d1ecf1';
                        break;
                    }
                    case 'success': {
                        this.style.color = '#20602f';
                        this.style.backgroundColor = '#d4edda';
                        break;
                    }
                    default: {
                        setDefaultType(this.style);
                    }
                }
                break;
            }
        }
    }
}