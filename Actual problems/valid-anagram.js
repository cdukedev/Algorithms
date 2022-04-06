//write a solution to find if two strings are anagrams of each other
//given two strings as s1 and s2, write a function to determine if s2 is an anagram of s1.
s1 = "danger";
s2 = "garden";

// create a hash table to store the characters of s1
// loop through s2 and check if the character is in the hash table
// if it is, remove it from the hash table
// if it is not, add it to the hash table
// if the hash table is empty, the strings are anagrams

function are_anagrams(s1, s2){
    if (s1.length != s2.length) {
        return false;
    }
    var freq1 = {};
    var freq2 = {};
    for (var i = 0; i < s1.length; i++) {
        if (freq1[s1[i]]) {
            freq1[s1[i]] += 1;
        } else {
            freq1[s1[i]] = 1;
        }
    }
    for (var i = 0; i < s2.length; i++) {
        if (freq2[s2[i]]) {
            freq2[s2[i]] += 1;
        } else {
            freq2[s2[i]] = 1;
        }
    }
    for (key in freq1) {
        if (freq1[key] != freq2[key]) {
            return false;
        }
    }
    return true;
}

console.log(are_anagrams(s1, s2));



