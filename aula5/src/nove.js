e=[9,2,4,5,8];
s=[3,5,2,7,4];
c=0;
while(c<e.length && s.length){
    x=e[c];
    y=s[c];
    if(x>y){
        z=x;
    }
    else{
        z=y;
    }
    console.log(c, ':', z);
    c++;
};