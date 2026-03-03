import { State } from "./state.js";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    const inputs = input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter(word => word !== "");

    return inputs;
}

export async function startREPL(state: State) {
    state.rl.prompt()
    state.rl.on("line", async (input) => {
        const inputs = cleanInput(input);
        if (inputs.length > 0) {
            const commandName = inputs[0];
            const command = state.commands[commandName]

            if (command) {
                try {
                    await command.callback(state);
                } catch (e) {
                    console.log((e as Error).message);
                }

            } else {
                console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`)
            }

            state.rl.prompt();
        } else {
            state.rl.prompt;
            return;
        }
    });
}