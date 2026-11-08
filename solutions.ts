function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        multiplier = 2;
    }

    return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
    if (typeof value === 'string') {
        return value.trim().toLocaleLowerCase();
    }

    if (typeof value === 'number') {
        return value * 10;
    }

    return value ? 'Active' : 'Inactive';
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce<T[]>((result, current) => result.concat(current), []);
}


