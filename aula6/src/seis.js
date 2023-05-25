function somatorio(l){
    s=0
    p=0
    while(p<l.length){
        s=s+l[p]
        p=p+1
    }

    return s
}

numeros=[8,3,4,7,5]
m=somatorio(numeros)
console.log('Somatório:', m)

numeros=[5,4,3]
m=somatorio(numeros)
console.log('Somatório:', m)