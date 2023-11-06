# Tasks

# Java Code

- Q1. Code for shuffling an array
```
import java.util.*;

class Shuffle {
    public static void main(String[] args) {
	    int[] nums = {1,2,3,4,5,6,7};
	    System.out.println(Arrays.toString(shffleArray(nums)));
    }

    private static int[] shffleArray(int[] nums) {
	    Random rand = new Random();
	    for(int i=1;i<nums.length;i++) {
	    	int j = rand.nextInt(i+1);
	    	int tmp = nums[i];
	    	nums[i] = nums[j];
	    	nums[j] = tmp;
	    }
	return nums;
    }
}
```

- Q2. Code for converting Roman Numbers into Integer values

```
import java.util.*;

class RomanConversion {
    
    public static void main(String[] args) {
        String s = "IX";
        System.out.println(romanToInt(s));
    }
    
    private static int romanToInt(String s) {
        Map<Character, Integer> m = new HashMap<>();
        
        m.put('I', 1);
        m.put('V', 5);
        m.put('X', 10);
        m.put('L', 50);
        m.put('C', 100);
        m.put('D', 500);
        m.put('M', 1000);
        
        int ans = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (i < s.length() - 1 && m.get(s.charAt(i)) < m.get(s.charAt(i + 1))) {
                ans -= m.get(s.charAt(i));
            } else {
                ans += m.get(s.charAt(i));
            }
        }
        
        return ans;
    }
}
```

- Q3. Code for checking if a string is Pangram or not

```
import java.util.*;
class PanagramTest {
    public static void main(String[] args) {
        System.out.println(checkIfPangram("helloworld"));
    }
    private static boolean checkIfPangram(String a) {
        int n =a.length();
        boolean hash[] = new boolean[26];
        int count =0;
        for(int i=0;i<n-1;i++){
            char c = a.charAt(i);
            if(!hash[c-  'a']){
                count++;
            }

            hash[c - 'a'] = true;
        }

        return count == 26;
    }
}
```
# JavaScript Code

- Q1. Code for Reversing each word in a sentence
```
let a = "This is a sunny day";

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

(function reverse(s) {
    let i = 0, j = s.length - 1;
    while (i <= j && s[i] === ' ') i++;   // Find the first non-space character
    while (j >= i && s[j] === ' ') j--;   // Find the last non-space character
    s = s.substring(i, j + 1);            // Extract the trimmed substring

    // Split the trimmed string into words based on spaces
    let words = s.split(/\s+/);            // Tokenize the string into words

    // Initialize the output string
    let out = '';

    // Iterate through the words in reverse order
    for(let k = 0 ; k<words.length;k++){
        // Append the current word and a space to the output
        out += reverseString(words[k]) + ' ';
    }

    // Append the first word to the output (without trailing space)
    // out += words[0];
    
    console.log(out);
})(a)
```

- Q2. Code for Sorting an array in descending order

```
const a = [1,2,3,4,5];
(
    function (b){
        b.sort((a,b)=>b-a); 
        console.log(b);
    }
)(a);
```

# HTML Task
- [Basic Calculator](https://github.com/Tr4ce007/Test/tree/master/TaskCloudVedanta/BasicCalculator)
- [Basic Survey Form](https://github.com/Tr4ce007/Test/tree/master/TaskCloudVedanta/SurveyForm)
