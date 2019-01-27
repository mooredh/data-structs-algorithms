function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 1; j < i; j++) {
            if (arr[j-1] > arr[j]) {
                swap(arr, j-1, j);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) swap(arr, min, i);
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j+1] = currentVal
    }
    return arr;
}

function merge(arr1, arr2) {
    let newArr = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }

    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
    return merge(left, right);
}

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, swapIdx, start)
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let most = 0;
    for (let i = 0; i < arr.length; i++) {
        most = Math.max(digitCount(arr[i], most))
    }
    return most;
}

function radixSort(arr) {
    for (let k = 0; k < mostDigits(arr); k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            buckets[getDigit(arr[i], k)].push(arr[i])
        }
        arr = [].concat(...buckets)
    }
    return arr;
}
