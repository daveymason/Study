function fib(n){
    if (n<2){
        return n;
    }
    return (n -1) + fib(n-2);
}