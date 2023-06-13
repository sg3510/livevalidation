function factorial(n: number): number {
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

function approximateCos(x: number, n: number): number {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += Math.pow(-1, i) * Math.pow(x, 2 * i) / factorial(2 * i)
    }
    return sum
}