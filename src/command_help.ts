import { State } from "./state.js";

export async function commandHelp(state: State) {
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    Object.values(state.commands).forEach(command => {
        console.log(`${command.name}: ${command.description}`)
    });
    console.log()
}