import { State } from "./state.js";

export async function commandExplore(state: State, location: string) {
    const locationDetails = await state.pokeAPI.fetchLocation(location)

    console.log(`Exploring ${location}...`);
    console.log("Found Pokemon:");
    for (const encounter of locationDetails.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}