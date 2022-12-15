/*
//////////

<문제 설명>
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.

<입출력 예>
-입출력 예 #1
1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.

-입출력 예 #2
9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

//////////
*/


function solution(array) { 
    ExceptionOfNums(array);
    let answer = [];

    answer[0] = Math.max(...array); //최대값
    answer[1] = array.indexOf(answer[0]); //최대값 인덱스

    return answer;
}

function ExceptionOfNums(array){
    if(array.length < 1 || array.length > 50){
        throw new Error("array length 오류");
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0 || array[i] > 1000){
            throw new Error("array 원소 오류");
        }
    }
}

console.log(solution([1, 8, 3]));