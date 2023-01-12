import { getCharacters } from "../utils/apiService.js";
import "../components/card/Card.js";
import { html } from "lit";


export const showCharacters = async () => {
    const {results} = await getCharacters();
    return html`${results.map( character => html`       
            <app-card>
                <img slot="image" loading="lazy" width="640" height="300" src="${character.image}" alt="${character.name}" />
                <div class="info" slot="info">
                    <h2 class="character-name">${character.name}</h2>                                
                    <div>
                        <p class="status ${character.status.toLowerCase()}"></p>
                        ${character.status} - ${character.species}
                    </div>
                </div>
                <app-card-info slot="info" title="Last known location:" info="${character.location.name}"></app-card-info>
            </app-card>
        `)
    }`;
};