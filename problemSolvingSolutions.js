// Add solution1 to "back spacing" quetion
function backspaceCompare(s, t) {
    let str1 = "";
    let str2 = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            str1 = str1.slice(0, -1); // Remove the last character
            console.log(str1);
        } else {
            str1 += s[i];
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        if (t[j] === "#") {
            str2 = str2.slice(0, -1); // Remove the last character
        } else {
            str2 += t[j];
        }
    }
    
    return str1 === str2;
}


// Add solution2 to "move zeros" quetion
const moveZeroes = (nums) => {
    
    if (nums.length <= 1) return nums;
    
    let zerosCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zerosCount++;
        } else if (zerosCount > 0) {
            nums[i - zerosCount] = nums[i];
            nums[i] = 0;
        }
    }
    
    return nums;
};


// Add solution3 to "ransom note" quetion
function canConstruct(ransomNote, magazine) {
    const hash = {};
    // a way to add elements and keys in a hash taple 
    for (const i of ransomNote) {
        if (i in hash) {
            hash[i] += 1;
        } else {
            hash[i] = 1;
        }
    }
    // console.log(hash);
    for (const j of magazine) {    
        if (j in hash) {
            hash[j] -= 1;
            if (!hash[j]) {
                delete hash[j];
            }
        }
    }
    // edit this snippet of code 
    return Object.keys(hash).length === 0;
}

// Add solution4 to "valid palindrome" quetion
const isPalindrome = (s) => {
    // To remove alphanumeric characters and convert to lowercase
    let palindrome = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // console.log(palindrome);
   
    let left = 0;
    let right = palindrome.length - 1;

    while (left < right) {
        if (palindrome[left] !== palindrome[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}