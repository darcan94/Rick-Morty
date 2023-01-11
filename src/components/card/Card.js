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
    :host{
        width: 100%;
        max-width: 300px;
        height: 100%;
        box-shadow: var(--container-shadow);  
        background-color: var(--card);  
        border-radius: .5rem;
      }

      ::slotted(img){
          border-radius: .5rem .5rem 0 0;
          width: 100%;
          height: auto;
      }

      div{
        padding: 1rem 1rem 0 1rem;
        color: var(--title);
      }
    `;
}

customElements.define('app-card', Card);