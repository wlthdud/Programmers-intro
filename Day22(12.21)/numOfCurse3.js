/*
//////////

<문제 설명>
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.
정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ n ≤ 100

<입출력 예>
-입출력 예 #1
15를 3x 마을의 숫자로 변환하면 25입니다.

-입출력 예 #2
40을 3x 마을의 숫자로 변환하면 76입니다.

//////////
*/


function solution(n) { 
    ExceptionOfNums(n);
    let answer = 0;

    for(let i = 1; i <= n; i++){
        answer++;
        while(1){
            if(answer % 3 == 0 || String(answer).includes('3')){
                answer++;
                continue;
            }
            break;
        }
    }
    
    return answer;
}

function ExceptionOfNums(n){
    if(n < 1 || n > 100){
        throw new Error("n 오류");
    }
}

console.log(solution(15));