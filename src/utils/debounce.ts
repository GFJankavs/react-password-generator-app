const debounce = (func: (...args: any[]) => any, delay: number) => {
    let debounceTimer: number | null = null;
    return function(this: any, ...args: any[]) {
        const context = this;
        if (debounceTimer !== null) {
            clearTimeout(debounceTimer);
        }
        debounceTimer = window.setTimeout(() => func.apply(context, args), delay);
    };
};

export default debounce;