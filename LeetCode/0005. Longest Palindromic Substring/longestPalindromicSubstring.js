/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = -Infinity, count // max starts at -Infinity to avoid counting the first character as a palindrome
    let prev, next
    let start, end
    for (let i = 0; i < s.length; i++) {

        //for odd combinations we can and subtract 1 from the count which 
        prev = i - 1
        next = i + 1
        count = 1
        while (prev >= 0 && next < s.length) {
            if (s[prev] === s[next]) {
                prev--
                next++
                count += 2
            } else {
                break
            }
        }
        if (count > max) {
            max = count
            start = prev + 1
            end = next - 1
        }

        //for even combinations
        prev = i
        next = i + 1
        count = 0
        while (prev >= 0 && next < s.length) {
            if (s[prev] === s[next]) {
                prev--
                next++
                count += 2
            } else {
                break
            }
        }
        if (count > max) {
            max = count
            start = prev + 1
            end = next - 1
        }
    }

    let result = ''
    for (let i = start; i <= end; i++) {
        result += s[i]
    }
    return "1: " + result
};

// OR  

var longestPalindrome2 = function (s) {
    var str = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            var left = i;
            var right = left + j;
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            if (right - left - 1 > str.length) {
                str = s.slice(left + 1, right);
            }
        }
    }
    return "2:" + str;
};
console.log(longestPalindrome("babad"))
console.log(longestPalindrome2("babad"))