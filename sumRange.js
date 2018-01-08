function range (start, end, step = 1){
    const rangeArray = [];
    if (step >= 0){
        for (let count = start; count <= end; count += step){
            rangeArray.push(count);
        }
    } else {
        for (let count = end; count >= start && count >= 0; count += step){
            rangeArray.push(count);
    }
}
   
return rangeArray;
};

function sumRange (range){
    return range.reduce( (prev, curr) => prev + curr );
}

console.log(range(0, 10, -1));

