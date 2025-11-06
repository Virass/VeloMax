export function pluralize(count: number, word: string): string {
    if (count === 1) {
        return `${count} ${word}`;
    } else if (count < 5) {
        return `${count} ${word}и`;
    } else {
        return `${count} ${word}ів`;
    }
}
