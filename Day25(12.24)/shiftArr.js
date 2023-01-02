/*
//////////

<문제 설명>
문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 
이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, 
A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
0 < A의 길이 = B의 길이 < 100
A, B는 알파벳 소문자로 이루어져 있습니다.

<입출력 예>
-입출력 예 #1
"hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.

-입출력 예 #2
"apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.

//////////
*/


function solution(A, B) {
    ExceptionOfNums(A, B);    
    let count = 0;

    if(A == B){
        return count;
    }
    
    let arrA = A.split('');

    for(let i = arrA.length - 1; i >= 0; i--){
        arrA.unshift(arrA[arrA.length-1]);
        arrA.pop();
        count++;
        
        if(arrA.join('') == B){
            return count;
        }
    }
    return -1;
}

function ExceptionOfNums(A, B){
    if(A.length <= 0 || A.length >= 100){
        throw new Error("A 길이 오류");
    }
    if(B.length <= 0 || B.length >= 100){
        throw new Error("B 길이 오류");
    }
    if(A.length != B.length){
        throw new Error("A 길이 != B 길이 오류");
    }
}

console.log(solution("apple", "pleap"));