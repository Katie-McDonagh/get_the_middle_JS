
function getMiddle(str){


  if(str.length % 2 === 1) {
  let middleNumber = Math.ceil(str.length /2)
  return str.charAt(middleNumber -1);
  } else {
    return "of"
  }
};
