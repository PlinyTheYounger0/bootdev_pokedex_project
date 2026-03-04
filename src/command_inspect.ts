import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (args.length < 1) {
        console.log("you must provide a pokemon name")
    }

    const pokemonName = args[0];
    const pokemon = state.pokedex[pokemonName]

    if (pokemon) {
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);

        console.log("Stats:");
        for (const stat of pokemon.stats) {
            console.log(` -${stat.stat.name}: ${stat.base_stat}`)
        };

        console.log("Types:");
        for (const pokemonType of pokemon.types) {
            console.log(` - ${pokemonType.type.name}`)
        };

        console.log("Abilities:");
        for (const pokemonAbility of pokemon.abilities) {
            console.log(` - ${pokemonAbility.ability.name}`)
        };

    } else {
        console.log(`you have not caught ${pokemonName} yet`)
    }
}