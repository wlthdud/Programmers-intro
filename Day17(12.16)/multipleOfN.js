/*
//////////

<문제 설명>
정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ n ≤ 10,000
1 ≤ numlist의 크기 ≤ 100
1 ≤ numlist의 원소 ≤ 100,000

<입출력 예>
-입출력 예 #1
numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.

-입출력 예 #2
numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.

-입출력 예 #3
numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.

//////////
*/


function solution(n, numlist) { 
    ExceptionOfNums(n, numlist);

    for(let i = 0; i < numlist.length; i++){
        if(numlist[i] % n != 0){
            numlist.splice(i, 1);
            i--;
        }
    }

    return numlist;
}

function ExceptionOfNums(n, numlist){
    if(n < 1 || n > 10000){
        throw new Error("n 오류");
    }
    if(numlist.length < 1 || numlist.length > 100){
        throw new Error("numlist length 오류");
    }
    for(let i = 0; i < numlist.length; i++){
        if(numlist[i] < 1 || numlist[i] > 100000){
            throw new Error("numlist 원소 오류");
        }
    }
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));