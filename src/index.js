// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  
let coins = {};

if (currency>10000){
  coins.error="You are rich, my friend! We don't have so much coins for exchange";
  return coins;
}

while (currency>=50) {
  currency=currency-50;
  if(!(coins.H)){
    coins.H=0;
  }
  coins.H++;
}

while (currency>=25) {
  currency=currency-25;
  if(!(coins.Q)){
    coins.Q=0;
  }
    coins.Q++;
}

while (currency>=10) {
  currency=currency-10;
  if(!(coins.D)){
    coins.D=0;
  }
  coins.D++;
}

while (currency>=5) {
  currency=currency-5;
  if(!(coins.N)){
    coins.N=0;
  }
  coins.N++;
}

while (currency>=1){
  currency=currency-1;
  if(!(coins.P)){
    coins.P=0;
  }
  coins.P++;
}
return coins;
};