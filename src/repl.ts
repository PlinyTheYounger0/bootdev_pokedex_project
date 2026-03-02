
export function cleanInput(input: string): string[] {
    const inputs = input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter(word => word !== "")

    return inputs
}