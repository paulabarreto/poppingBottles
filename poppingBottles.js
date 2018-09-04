// 1 bottle costs $2
// 2 bottles return 1 bottle
// 4 caps return 1 bottle

// $2 investment return 3 bottles
// $10 investment return 15 bottles


function poppingBottles(investment){
  let recycle = investment / 2;
  var getBackBottle = Math.floor(recycle / 2);

  return getBackBottle;
}

console.log(poppingBottles(10));
