/*
//////////

<문제 설명>
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

<제한사항>
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100

<입출력 예>
-입출력 예 #1
두 수의 곱중 최댓값은 4 * 5 = 20 입니다.

-입출력 예 #2
두 수의 곱중 최댓값은 31 * 24 = 744 입니다.

//////////
*/


function solution(numbers) { 
    ExceptionOfNums(numbers);

    numbers.sort(function (a, b) {
        return b - a;
    });

    return numbers[0] * numbers[1];
}

//예외처리
function ExceptionOfNums(numbers){
    if(numbers.length < 2 || numbers.length > 100){
        throw new Error("numbers 길이 ERROR");
    }
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0 || numbers[i] > 10000){
            throw new Error("numbers 원소 ERROR");
        }
    }
}