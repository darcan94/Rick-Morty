import { LitElement, html, css, nothing } from "lit";

class Card extends LitElement{
    render(){
        return html`
            <section>
                <div>
                    <slot name="image"></slot>
                </div>
            </section>
        `;
    }

    get infoTemplate(){
        return html`
            ${this.hasSlot() ? html`
                <div>
                    <slot name='info'></slot>
                </div>
            ` : nothing}
        `;
    }

    hasSlot( name = 'info' ){
        return this.querySelector(`[slot="${name}"]`) !== null;
    }

    static style = css`
    `;
}

customElements.define('app-card', Card);