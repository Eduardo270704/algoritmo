numeros=prompt('Entre com os números separados por virgula:')
//numeros="8,2,3,5,9"
n=numeros.split(',');
for(p=0, m=0; p<n.length; p++){
    n[p]=parseFloat(n[p])
    if(p%2==0){
        m=m+n[p]
    }
}
console.log('Somatório:',m)