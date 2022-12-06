function fibs(n){
    if(n <= 0) return 'Invalid number';
    let fibArray = [];
    let a = 0;
    let b = 0;
    let c = 1;
    let d = a + b;

    for (let i = 1; i <= n; i++) {
        fibArray.push(d)
        a = b;
        b = c;
        c = d;
        d = b + c;
    }

    return fibArray;
}
