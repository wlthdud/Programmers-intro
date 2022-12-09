/*
//////////

<문제 설명>
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ n ≤ 100

<입출력 예>
-입출력 예 #1
10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.

-입출력 예 #2
15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

//////////
*/


function solution(n) { 
    ExceptionOfNums(n);
    let array = [];

    for(let i = 1; i <= n; i++){  //1~10
        let count = 0;
        for(let j = 1; j <= i; j++){  //
            if(i % j == 0){
                count++;
            }
        }
        if(count >= 3){
            array.push(i);
        }
    }
    
    return array.length;
}

//예외처리
function ExceptionOfNums(n){
    if(n < 1 || n > 100){
        throw new Error("n ERROR");
    }
}

console.log(solution(15));