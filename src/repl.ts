import { createInterface } from "node:readline";

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
            const commandName = inputs[0]
            console.log(`Your command was: ${commandName}`);
            rl.prompt()
        } else {
            rl.prompt;
            return;
        }
    });
}