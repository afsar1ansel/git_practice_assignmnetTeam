function palindeome(str){
  let newStr="";

  for(let i=str.length;i>=0;i--){
  	newStr+=str[i];
  }
   return str==newStr;
}
