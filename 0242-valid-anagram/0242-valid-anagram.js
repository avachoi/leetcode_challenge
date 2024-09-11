/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("")===t.split("").sort().join("")
};
//reverse t
//check if s and t are same