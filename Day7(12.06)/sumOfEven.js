/*
//////////

<문제 설명>
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

<제한사항>
0 < n ≤ 1000

<입출력 예>
-입출력 예 #1
n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.

-입출력 예 #2
n이 4이므로 2 + 4 = 6을 return 합니다.

//////////
*/


function solution(n) {
    ExceptionOfNums(n);
    let answer = 0;

    for(let i = 2; i <= n; i+=2){
        answer += i;
    }

    return answer;
}

//예외처리
function ExceptionOfNums(n){
    if(n <= 0 || n > 1000){
        throw new Error("n 오류");
    } 
}