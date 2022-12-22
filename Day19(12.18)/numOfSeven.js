/*
//////////

<문제 설명>
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

<제한사항>
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000

<입출력 예>
-입출력 예 #1
[7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.

-입출력 예 #2
[10, 29]에는 7이 없으므로 0을 return 합니다.

//////////
*/


function solution(array) { 
    ExceptionOfNums(array);
    let count = 0;
    let str = array.join('');
    
    for(let i = 0; i < str.length; i++){
        if(str[i] == '7'){
            count++;
        }
    }

    return count;
}

function ExceptionOfNums(array){
    if(array.length < 1 || array.length > 100){
        throw new Error("array 길이 오류");
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0 || array[i] > 100000){
            throw new Error("array 원소 오류");
        }
    }
    
}

console.log(solution([7, 77, 17]));