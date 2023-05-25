function inverter(l){
    p=l.length-1
    while(p>=0){
        console.log(p, ":", l[p])
        p=p-1
    }
}

console.log('Lista:')
numeros=[8,3,4,7,5]
inverter(numeros)

console.log('\nLista:')
numeros=[5,4,3]
inverter(numeros)