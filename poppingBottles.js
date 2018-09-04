// 1 bottle costs $2
// 2 bottles return 1 bottle
// 4 caps return 1 bottle

// $2 investment return 3 bottles
// $10 investment return 15 bottles


function poppingBottles(investment){
  let recycle = investment / 2;
  var getBackBottle = Math.floor(recycle / 2);
  var leftOver = Math.round(recycle % 2);
  var partialTotal = getBackBottle + leftOver;
  var getMoreBottle = Math.floor(partialTotal / 2);
  var getEvenMore = (getMoreBottle + leftOver) / 2;

  var sum = recycle + getBackBottle + leftOver + getMoreBottle + getEvenMore;

  var bottlesFromCaps = Math.floor(sum / 4);
  var gettingMore = Math.floor(bottlesFromCaps / 2);
  var moreBottlesfromCaps = Math.floor(bottlesFromCaps + gettingMore / 2);
  var finalMath = Math.round(gettingMore % 2) + Math.round(moreBottlesfromCaps % 2)

  var finalSum = bottlesFromCaps + gettingMore + moreBottlesfromCaps + sum;
  return finalSum;
}

console.log(poppingBottles(30));
