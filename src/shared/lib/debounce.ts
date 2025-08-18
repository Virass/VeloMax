export function debounce<F extends (...args: any[]) => void>(fn: F, ms = 300) {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
}
