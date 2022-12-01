/*
//////////

<문제 설명>
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

<제한사항>
0 ≤ num1 ≤ 10,000
0 ≤ num2 ≤ 10,000

<입출력 예>
-입출력 예 #1
num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.

-입출력 예 #2
num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.

-입출력 예 #3
num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.

//////////
*/


function solution(num1, num2) {
    ExceptionOfNums(num1, num2)
    var answer = (num1 == num2) ? 1 : -1;
    return answer;
}

//예외처리
function ExceptionOfNums(num1, num2){
    if(num1 < 0 || num1 > 10000){
        throw new Error("num1 값 오류");
    }
    if(num2 < 0 || num2 > 10000){
        throw new Error("num2 값 오류");
    }   
}