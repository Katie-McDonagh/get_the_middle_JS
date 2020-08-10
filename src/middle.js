
function getMiddle(str){


  if(str.length % 2 === 1) {
  var middleNumber = Math.ceil(str.length /2)
  return str.charAt(middleNumber -1);
  } else {
    return str.substring(middleNumber -1, middleNumber);
  };
};
