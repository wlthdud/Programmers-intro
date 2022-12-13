/*
//////////

<문제 설명>
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

<입출력 예>
-입출력 예 #1
3, 10, 28 중 20과 가장 가까운 수는 28입니다.

-입출력 예 #2
10, 11, 12 중 13과 가장 가까운 수는 12입니다.

//////////
*/


function solution(array, n) { 
    ExceptionOfNums(array, n);
    let subArr = [];

    for(let i = 0; i < array.length; i++){ 
        subArr[i] = Math.abs(array[i] - n);
    }

    const min = Math.min(...subArr); //subArr의 최소값 = 가장 가까움

    let dupCheck = [];
    for(let i = 0; i < subArr.length; i++){
        if(subArr[i] == min){
            dupCheck.push(array[i]);
        }
    }

    return Math.min(...dupCheck);
}

function ExceptionOfNums(array, n){
    if(array.length < 1 || array.length > 100){
        throw new Error("array 길이 오류");
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < 1 || array[i] > 100){
            throw new Error("array 원소 오류");
        }
    }
    if(n < 1 || n > 100){
        throw new Error("n 오류");
    }
}

console.log(solution([10, 11, 12], 13));