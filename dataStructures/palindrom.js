const { argv } = require("process");

(()=>{
    var palindrom01 = palindrom01;
    var isPalindrom = isPalindrom; 
    
    //palindrom01();
    isPalindrom()

    function palindrom01(){

        let inputNum = argv[2];
        let totalLength = inputNum.length;
        let half_length = parseInt(totalLength/2);
        let flag = true; 
        
        for(let i = 0, j = (totalLength - 1); i < half_length; i++){
            if(inputNum.charAt(i) !== inputNum.charAt(j)){
                flag = false;    
                break;
            }
            j--;
        }

        console.log(`input ${inputNum} is Palinform => ${flag}`);
    }

    function isPalindrom(){
        let inputStr = argv[2];
        let inputArray = inputStr.split("");
        inputArray = inputArray.reverse();
        let reverseInputStr = inputArray.join("");
        let flag = (inputStr === reverseInputStr) ? true : false; 
        console.log(`input ${inputStr} is Palinform => ${flag}`);
    }
})();