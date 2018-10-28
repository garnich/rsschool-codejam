function sumOfOther(arr) {
    let sum = arr.reduce(function(acc,item){return acc+item});
    let out = arr.map(currentValue => sum - currentValue);
    return out;
}
