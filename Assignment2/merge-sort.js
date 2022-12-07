function mergeSort(array){
    const halfArray = Math.ceil(array.length/2);
    if(array.length < 2) return array;

    const leftHalf = array.splice(0, halfArray)
    const rightHalf = array;
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));

}

function merge(left, right){
    let sortedArray = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    return [...sortedArray, ...left, ...right]
}

console.log(mergeSort([1, 3, 2, 7, 5]));