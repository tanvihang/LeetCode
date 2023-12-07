//竟然没看到“字母和数字都属于字母数字字符。"真该给自己两巴掌！

s = "0P"

var isPalindrome = function(s) {
    s = s.trim();
    s = s.toLowerCase();
    //replace non a-z value to ""
    s = s.replace( /[^a-z0-9]/g,'');

    console.log(s)

    //pointer
    left = 0;
    right = s.length-1;

    while(left<right){
        if(s.at(left) == s.at(right)){
            left++;
            right--;
        }else{
            console.log("Not a palindrom")
            break;
        }
    }

    console.log("Is palindrome")
};

isPalindrome(s);