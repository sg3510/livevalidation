/**
 * Calculates the factorial of a given number.
 * @param n - The number to calculate the factorial of.
 * @returns The factorial of the given number.
 */
function factorial(n: number): number {
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

/**
 * Calculates the approximate cosine of a given angle using the Maclaurin series.
 * @param x - The angle in radians.
 * @param n - The number of terms to use in the series approximation.
 * @returns The approximate cosine value.
 */
function approximateCos(x: number, n: number): number {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += Math.pow(-1, i) * Math.pow(x, 2 * i) / factorial(2 * i)
    }
    return sum
}