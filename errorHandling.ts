//Example of narrowing during errorHandling
//error TS1196: Catch clause variable type annotation must be 'any' or 'unknown' if specified.
function errorFunction() {
    try {
        throw new Error('foo');
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                message: `Things exploded (${err.message})`,
            };
        }
    }
}

console.log(errorFunction())