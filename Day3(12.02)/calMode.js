/*
//////////

<문제 설명>
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

<제한사항>
0 < array의 길이 < 100
0 ≤ array의 원소 < 1000

<입출력 예>
-입출력 예 #1
[1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.

-입출력 예 #2
[1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.

-입출력 예 #3
[1]에는 1만 있으므로 최빈값은 1입니다.

//////////
*/


function solution(array) {
    ExceptionOfNums(array);
    let answer = 0;
    
    const modeMap = new Map();

    //Map 객체 초기화
    for(let i = 0; i <= Math.max(...array); i++){
        modeMap.set(i, 0);
    }

    //array 배열의 원소값과 일치하는 Map 객체의 key를 1씩 증가
    for(let i = 0; i < array.length; i++){
        modeMap.set(array[i], modeMap.get(array[i]) + 1);
    }
    
    //Map객체의 value만 모아서 배열로 만듦
    let ansArray = Array.from(modeMap.values());

    //최대값 산출
    let max = Math.max(...ansArray);

    if(ansArray.indexOf(max) != ansArray.lastIndexOf(max)){
        answer = -1;
    }else{
        answer = ansArray.indexOf(max);
    }
    
    return answer;
}

//예외처리
function ExceptionOfNums(array){
    if(array.length <= 0 || array.length >= 100){
        throw new Error("array 길이 오류");
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0 || array[i] >= 1000){
            throw new Error("array 원소 오류");
        }
    }  
}