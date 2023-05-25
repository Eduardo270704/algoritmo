function fatorial (nro){
    if(nro>=0){
        let total = 1;
        for(let i = 1; i <= nro; i++){
            total*=i;
        }
        return total;
    }
    else{
        return r = NaN
    }
}


let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(-2);
console.log("Fatorial:", r);