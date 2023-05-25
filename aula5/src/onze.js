m=[
    [9,2,4],
    [6,5,7],
    [2,1,3]
];
x=0;
s=0;
while(x<m.length){
    y=0
    while(y<m[x].length){
        s=s+m[x][y];
        y++;
    }
    x++;
}
console.log('Somatório:', s);