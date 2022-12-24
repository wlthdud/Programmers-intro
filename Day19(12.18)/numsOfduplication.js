/*
//////////

<문제 설명>
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

<제한사항>
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 1,000
0 ≤ n ≤ 1,000

<입출력 예>
-입출력 예 #1
[1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

-입출력 예 #2
[0, 2, 3, 4] 에는 1이 0개 있습니다.

//////////
*/


function solution(array, n) { 
    ExceptionOfNums(array, n);

    const answer = array.filter(num => num == n);
    console.log(answer);
    console.log(answer.length);
    
    return answer.length;
}

function ExceptionOfNums(array, n){
    if(array.length < 1 || array.length > 100){
        throw new Error("array 길이 오류");
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0 || array[i] > 1000){
            throw new Error("array 원소 오류");
        }
    }
    if(n < 0 || n > 1000){
        throw new Error("n 길이 오류");
    }
}

console.log(solution([1, 1, 2, 3, 4, 5]	, 1));