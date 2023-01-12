import { showCharacters } from "./pages/Characters.js";
console.log(await showCharacters());

const body = document.querySelector('body');
body.innerHTML = await showCharacters();