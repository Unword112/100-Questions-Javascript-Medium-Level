const countPrime = (n) => {
    var count = 0, i, j, arr = [];
    
    for(i=2;i<n;i++){
        if(arr[i]) continue;
        else count += 1;
        for(j = i << 1; j <= n; j += i){
            arr[j] = true;
        }
    }
    return count;
}


console.log(countPrime(10));
