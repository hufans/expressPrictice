
var nums = [21,13,65,34,75,48];
//快速
function quickSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    //得到相对中心点数字
    var point =  nums[Math.floor(nums.length/2)];
    var left = [];
    var right = [];
    
    nums.forEach(element => {
        if (element > point ){
            right.push(element);
        }else if (element < point){
            left.push(element)
        }
    });
    return quickSort(left).concat([point], quickSort(right));
}



//快速排序2
function quickSorts(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left !== 'number' ? 0 : left,
        right = typeof right !== 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSorts(arr, left, partitionIndex - 1);
        quickSorts(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr,leftI,rightI){
    var middleI = leftI;
    var index = middleI+1;
    for (let i = index; i < rightI; i++){
        if (arr[i] < arr[middleI]) {
            swap(arr,middleI,index);
            index++;
        }
    }
    swap(arr,middleI,index-1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var s = [24,13,65,11];
// console.log(partition(s,0,3));
console.log( quickSorts(nums));