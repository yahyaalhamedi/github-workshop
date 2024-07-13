// Add solution to "back spacing" quetion
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

