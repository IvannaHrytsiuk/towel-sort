module.exports = function towelSort (matrix) {
  let res = []
  if(matrix === undefined){
    return [];
  } else{
    if(matrix.length<1){
      return [];
    } else{
      for(let i=0; i<matrix.length; i++){
        if(i%2==0){
          res.push(...matrix[i]);
        } else{
           res.push(...matrix[i].reverse());
        }
      }
    }
  }
  return res;
}
