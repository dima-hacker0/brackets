module.exports = function check(str, bracketsConfig) {
  let placeLast;
  let placeClose;
  let prov = 0;
  let stack = [];
  let arr = [];
  let tempArr = 0;
  let shetArr = [];
  let proverka = 0;
  let osnova;
  for(let i = 0; i < bracketsConfig.length; i++) {
    if(bracketsConfig[i][0] == bracketsConfig[i][1]) {
      arr[tempArr] = bracketsConfig[i][0];
      shetArr[tempArr] = 0;
      tempArr++;
    }
  }
  for(let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    for(let h = 0; h < arr.length; h++) {
        if(currentSymbol == arr[h]) {
          shetArr[h]++;
        }    
      }
    for(let t = 0; t < arr.length; t++) {
      if(shetArr[t] == 2){
        proverka = 1;
        osnova = shetArr[t];
      }
    }
    for(let q = 0; q < bracketsConfig.length; q++) {
      if(bracketsConfig[q][0] == currentSymbol)  prov++;
    }
    if(prov == 1 && proverka != 1) stack.push(currentSymbol);
    else {
      if(stack.length === 0) {
        return false;
      }
      let last = stack[stack.length - 1];
      for(let k = 0; k < bracketsConfig.length; k++) {
        if(bracketsConfig[k][1] == currentSymbol) {
          placeClose = k;
          break;
        }
      }
      for(let m = 0; m < bracketsConfig.length; m++) {
        if(bracketsConfig[m][0] == last) {
          placeLast = m;
          break;
        }
      }
      if(placeLast == placeClose) {
        stack.pop();
      }
      else {
        return false;
      }
    }
    for(let b = 0; b < arr.length; b++) {
      if(shetArr[b] == 2) {
        shetArr[b] = 0;
        proverka = 0;
      }
    }
    prov = 0;
  }
  if(stack.length === 0) {
    return true;
  }
  else {
    return false;
  }
}
