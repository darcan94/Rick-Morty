import { API } from "../../api.js";

export const getCharacters = async (url = `${API}/character/`) => {
    try {
        const response = await fetch(url);
        const characters = await response.json();
        return characters;
    } catch (error) {
        console.log('Error', error);
    }
};