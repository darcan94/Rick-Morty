import { showCharacters } from "./pages/Characters.js";
console.log(await showCharacters());

document.body.innerHTML = await showCharacters();