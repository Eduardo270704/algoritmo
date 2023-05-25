p=[0.4,0.2,0.1,0.3];
n=[8.2,5.0,10.0,9.1];
c=0;
y=0;
while(c<p.length && n.length){
    x=p[c]*n[c];
    y=x+y;
    c++;
};
console.log('Nota final', y);