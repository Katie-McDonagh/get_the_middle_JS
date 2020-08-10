
function getMiddle(str){

  var middleNumber = Math.ceil(str.length /2)
  if(str.length % 2 === 1) {
  
  return str.charAt(middleNumber -1);
  } else {
    return str.substring(middleNumber -1, middleNumber 
      +1 );
  };
};
