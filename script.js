// Code Wars Problem: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b.
//arrayDiff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]



const a1 = [4,8,91,10,13,5,31];
const a2 = [3,19,39,10,5,33,8];


function differenceMaker(arr1,arr2) {


    let mergedArr = arr1.concat(arr2);
    //console.log(mergedArr);

    let answer = mergedArr.filter((i) => {
        return mergedArr.indexOf(i) === mergedArr.lastIndexOf(i);
    });

    return answer;

    

     
    };



console.log(differenceMaker(a1,a2));    