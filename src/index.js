function fibs(n) {
    if (n === 1) {
        return [0];
    }
    let result = [0, 1];
    for (i = 2; i < n; i++) {
        result.push(result[i-2]+ result[i-1])
    }

    return result;

}

function fibsRec(n) {

    if (n == 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    
    let result = fibsRec(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2])


    return result
}

console.log(fibsRec(8))