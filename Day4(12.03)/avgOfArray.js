/*
//////////

<문제 설명>
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

<제한사항>
0 ≤ numbers의 원소 ≤ 1,000
1 ≤ numbers의 길이 ≤ 100
정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

<입출력 예>
-입출력 예 #1
numbers의 원소들의 평균 값은 5.5입니다.

-입출력 예 #2
numbers의 원소들의 평균 값은 94.0입니다.

//////////
*/


function solution(numbers) {
    ExceptionOfNums(numbers);
    let answer = 0;

    const result = numbers.reduce(function add(sum, currValue){
        return sum + currValue;
    }, 0);

    answer = result / numbers.length;
    return answer.toFixed(1);
}

//예외처리
function ExceptionOfNums(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0 || numbers[i] > 1000){
            throw new Error("numbers 원소 오류");
        } 
    }
    if(numbers.length < 1 || numbers.length > 100){
        throw new Error("numbers 길이 오류");
    } 
}