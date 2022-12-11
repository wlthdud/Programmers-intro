/*
//////////

<문제 설명>
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.


<제한사항>
2 ≤ n ≤ 10,000

<입출력 예>
-입출력 예 #1
12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.

-입출력 예 #2
17은 소수입니다. 따라서 [17]을 return 해야 합니다.

-입출력 예 #3
420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.

//////////
*/


function solution(n) { 
    ExceptionOfNums(n);
    let answer = [];
    let divisior = 2; //소수 2부터 시작
    
    while(n >= 2){
        if(n % divisior == 0){  //n이 소수로 나누어질때
            answer.push(divisior);
            n = parseInt(n / divisior); //n값 초기화
        }else{  //n이 소수로 안나누어질때
            divisior++;
        }
    }
    
    const setAnswer = [...new Set(answer)];  //중복제거
    
    return setAnswer;
}

//예외처리
function ExceptionOfNums(n){
    if(n < 2 || n > 10000){
        throw new Error("n ERROR");
    }
}

console.log(solution(12));