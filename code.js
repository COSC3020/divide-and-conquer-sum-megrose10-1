function divideAndConquerSum(a) {
    let alength = a.length;
    let sum = 0;
    let athird = Math.floor((a.length)*(1/3));
    let atwothird = Math.floor((a.length) * (2/3));
    let aThirdArray = [];
    let aTwoThirdArray = [];
    let aLastThirdArray = [];
    if(alength == 0) {
        sum = 0;
    }
    else if(alength == 1) {
        sum = a[0]; 
    }
    else if(alength == 2) {
        sum = a[0] + a[1];
    }
    else {
        for(let i = 0; i < athird; i++) {
          aThirdArray.push(a[i]);
        }
        for(let i = athird; i < atwothird; i++) {
          aTwoThirdArray.push(a[i]);
        }
        for(let i = atwothird; i < a.length; i++) {
          aLastThirdArray.push(a[i]);
        }
        let sum1 = divideAndConquerSum(aThirdArray);
        let sum2 = divideAndConquerSum(aTwoThirdArray);
        let sum3 = divideAndConquerSum(aLastThirdArray);
        sum = sum1 + sum2 + sum3;
    }
    
    return sum;
}
