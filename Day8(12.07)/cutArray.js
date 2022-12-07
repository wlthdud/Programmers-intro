/*
//////////

<문제 설명>
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
2 ≤ numbers의 길이 ≤ 30
0 ≤ numbers의 원소 ≤ 1,000
0 ≤num1 < num2 < numbers의 길이

<입출력 예>
-입출력 예 #1
[1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.

-입출력 예 #2
[1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.

//////////
*/


function solution(numbers, num1, num2) {
    ExceptionOfNums(numbers, num1, num2);
    let answer = [];

    answer = numbers.slice(num1, num2 + 1);

    return answer;
}

//예외처리
function ExceptionOfNums(numbers, num1, num2){
    if(numbers.length < 2 || numbers.length > 30){
        throw new Error("numbers 길이 오류");
    } 
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0 || numbers[i] > 1000){
            throw new Error("numbers 원소 오류");
        }
    }
    if(numbers.length <= num2 || num2 <= num1 || num1 < 0){
        throw new Error("ERROR");
    }
}

console.log(solution([1, 3, 5], 1, 2));