/*
//////////

<문제 설명>
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

<제한사항>
0 < n < 1,000
n / 10 ≤ k < 1,000
서비스로 받은 음료수는 모두 마십니다.

<입출력 예>
-입출력 예 #1
10인분을 시켜 서비스로 음료수를 하나 받아 총 10 * 12000 + 3 * 2000 - 1 * 2000 = 124,000원입니다.

-입출력 예 #2
64인분을 시켜 서비스로 음료수를 6개 받아 총 64 * 12000 + 6 * 2000 - 6 * 2000 =768,000원입니다.

//////////
*/


function solution(n, k) {
    ExceptionOfNums(n, k);

    let service = parseInt(n / 10);
    
    return n * 12000 + k * 2000 - service * 2000;
}

//예외처리
function ExceptionOfNums(n, k){
    if(n <= 0 || n >= 1000){
        throw new Error("my_string 길이 오류");
    } 
    if(k < parseInt(n / 10) || k >= 1000){
        throw new Error("k 오류");
    }
}

console.log(solution(64, 6));