function matriz(m){
    l=0
    s=0
    while(l<m.length){
      c=0
      while(c<m[l].length){
        s=s+m[l][c]
        c=c+1
      }
      l=l+1
    }
    return s
  }
  
  numeros=[
    [9,2,4],
    [6,5,7],
    [2,1,3]
  ]
  n=matriz(numeros)
  console.log('Somatório:', n)
  
  numeros=[
    [5,8,3,4],
    [9,7,2]
  ]
  n=matriz(numeros)
  console.log('Somatório:', n)