function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

function stringSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) break;
            else if (j === short.length - 1) count++;
        }
    }
    return count;
}

function kmpSearch(long, short) {
    // This forms the KMP Table
    let table = [];
    table[0] = 0;
    let count = 0;
    for (let i = 1, j = 0; i < short.length; i++) {
        do {
            if (short[i] === short[j]) {
                table[i] = ++j;
                i++;
                continue;
            } else if (j > 0) j = table[j - 1];
        } while (j > 0)
        if (i < short.length) {
            j = 0;
            table[i] = j;
        }
    }
    // Table formation ends here

    // Search starts here
    for (let i = 0, j = 0; i < long.length; i++) {
        do {
            if (long[i] === short[j]) {
                j++;
                break;
            } else if (j > 0) j = table[j - 1];
        } while (j > 0);
        if (j === short.length) {
            j = 0;
            count++;
        }
    }

    return count;
}

console.log(stringSearch('aabgdshbabchjs dhdshghgabc sjgdj vGBAVVDHabc', 'abc'))