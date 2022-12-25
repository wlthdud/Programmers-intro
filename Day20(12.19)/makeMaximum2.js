/*
//////////

<문제 설명>
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

<제한사항>
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100

<입출력 예>
-입출력 예 #1
두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.

-입출력 예 #2
두 수의 곱중 최댓값은 10 * 24 = 240 입니다.

-입출력 예 #3
두 수의 곱중 최댓값은 20 * 30 = 600 입니다.

//////////
*/


function solution(numbers) { 
    ExceptionOfNums(numbers);
    let arr = [];

    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            arr.push(numbers[i] * numbers[j]);
        }
    }

    return Math.max(...arr);
}

function ExceptionOfNums(numbers){
    if(numbers.length < 2 || numbers.length > 100){
        throw new Error("numbers 길이 오류");
    }
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < -10000 || numbers[i] > 10000){
            throw new Error("numbers 원소 오류");
        }
    }
}

console.log(solution([1, 2, -3, 4, -5]));