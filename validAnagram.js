function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let fc1 = {}, fc2 = {}
    for (char of str1) {
        fc1[char] = (fc1[char] || 0) + 1
    }
    for (char of str2) {
        fc2[char] = (fc2[char] || 0) + 1
    }

    if (Object.is(fc1, fc2)) {
        return false;
    }
    return true;
}

console.log(validAnagram("yea", "aye"))
console.log(validAnagram("yeye", "eye"))