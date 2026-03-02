import { State } from "./state.js";

export function commandHelp(state: State): void {
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    Object.values(state.commands).forEach(command => {
        console.log(`${command.name}: ${command.description}`)
    });
    console.log()
}