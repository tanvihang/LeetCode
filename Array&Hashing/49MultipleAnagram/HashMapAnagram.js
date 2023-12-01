strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(stars){
    let j = 0;
    let myHashMap = new Map();

     let retArr = new Array(100);

     for(let ll = 0; ll<100;ll++){
         retArr[ll] = new Array(100);
     }

    for(let str of stars){
        let sorted = stringToList(str);
        str = str.toString();
        console.log(sorted);

        if(myHashMap.has(sorted)){
            //push it into the string[][]
            console.log("Pushed in "+ myHashMap.get(sorted));
            // let index = myHashMap.get(sorted);
            //push column
            // for(let i = 0; i < retArr.length;i++){
            //     retArr.push();
            // }

            retArr[myHashMap.get(sorted)][retArr[myHashMap.get(sorted)].length+1] = str;

            console.log(retArr)
        }
        else{
            myHashMap.set(sorted,j);
            console.log("Pushed in " + myHashMap.get(sorted))

            // retArr.push(str);
            retArr[myHashMap.get(sorted)][0] = str;
            console.log(retArr)
            j++;
        }

    }

    return retArr;

}


function stringToList(str){
    return str.split("").sort().join("");
}

let arr = groupAnagrams(strs);

arr = arr.map(subArray => subArray.filter(item => item !== undefined));
arr = arr.filter(subarray=> subarray.length>0);

console.log(arr)
