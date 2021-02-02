// Implement a function that first finds and removes the smallest element in a sorted array.
function findMinAndRemoveSorted(arr){
    return arr.shift()
}


// Implement the merge function to combine two sorted arrays into one larger array.
function merge(firstHalf, secondHalf){
    let sorted = [];
    while(firstHalf.length != 0 && secondHalf.length != 0){
        if(firstHalf[0] < secondHalf[0]){
            sorted.push(findMinAndRemoveSorted(firstHalf))
        } else {
            sorted.push(findMinAndRemoveSorted(secondHalf))
        }
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

// Implement the mergeSort algorithm using the previous functions that you wrote.
function mergeSort(arr){
    let mid = arr.length/2;
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    let sorted;

    if(arr.length < 2){
        return arr
    } else {
        sorted = merge(mergeSort(left), mergeSort(right))
    }
    return sorted;
}