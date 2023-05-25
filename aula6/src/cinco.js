function inverte(n){
    s=""
    p=n.length-1
    while(p>=0){
        s=s+n[p]
        p=p-1
    }
    return s
}

r=inverte('Pedro')
console.log('Invertido:', r)

r=inverte('Mariana')
console.log('invertido', r)