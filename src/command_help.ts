import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    Object.values(commands).forEach(command => {
        console.log(`${command.name}: ${command.description}`)
    });
    console.log()
}