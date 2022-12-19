/*
//////////

<문제 설명>
어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ n ≤ 10
1 ≤ t ≤ 15

<입출력 예>
-입출력 예 #1
처음엔 2마리, 1시간 후엔 4마리, 2시간 후엔 8마리, ..., 10시간 후엔 2048마리가 됩니다. 따라서 2048을 return합니다.

-입출력 예 #2
처음엔 7마리, 1시간 후엔 14마리, 2시간 후엔 28마리, ..., 15시간 후엔 229376마리가 됩니다. 따라서 229,376을 return합니다.

//////////
*/


function solution(n, t) { 
    ExceptionOfNums(n, t);

    for(let i = 1; i <= t; i++){
        n *= 2;
    }

    return n;
}

function ExceptionOfNums(n, t){
    if(n < 1 || n > 10){
        throw new Error("n 오류");
    }
    if(t < 1 || t > 15){
        throw new Error("t 오류");
    }
}

console.log(solution(2, 10));