import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    const inputs = input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter(word => word !== "");

    return inputs;
}

export function startREPL(): void {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    })
    rl.prompt()
    rl.on("line", async (input) => {
        const inputs = cleanInput(input);
        if (inputs.length > 0) {
            const commandName = inputs[0];
            const commands = getCommands();
            const command = commands[commandName]

            if (command) {
                try {
                    command.callback(commands);
                } catch (e) {
                    console.log(e);
                }

            } else {
                console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`)
            }

            rl.prompt();
        } else {
            rl.prompt;
            return;
        }
    });
}