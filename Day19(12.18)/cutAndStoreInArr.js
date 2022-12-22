/*
//////////

<문제 설명>
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ my_str의 길이 ≤ 100
1 ≤ n ≤ my_str의 길이
my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

<입출력 예>
-입출력 예 #1
"abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.

-입출력 예 #2
"abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.

<유의사항>
입출력 예 #1의 경우 "abc1Addfggg4556b"를 길이 6씩 자르면 "abc1Ad", "dfggg4" 두개와 마지막 "556b"가 남습니다. 
이런 경우 남은 문자열을 그대로 배열에 저장합니다.

//////////
*/


function solution(my_str, n) { 
    ExceptionOfNums(my_str, n);
    let answer = [];
    
    for(let i = 0; i < my_str.length; i+=n){
        answer.push(my_str.substr(i, n));
    }
    
    return answer;
}

function ExceptionOfNums(my_str, n){
    if(my_str.length < 1 || my_str.length > 100){
        throw new Error("my_str 길이 오류");
    }
    if(n < 1 || n > my_str.length){
        throw new Error("n 길이 오류");
    }
}

console.log(solution("abc1Addfggg4556b", 6));