/*
//////////

<문제 설명>
문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ my_string의 길이 ≤ 1,000
my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

<입출력 예>
-입출력 예 #1
소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.

-입출력 예 #2
소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.

//////////
*/


function solution(my_string) { 
    ExceptionOfNums(my_string);
    let answer = '';

    let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let my_array = [...my_string];
    
    for(let i = 0; i < my_array.length; i++){
        if(upper.includes(my_array[i])){
            answer += lower[upper.indexOf(my_array[i])];
        }else{
            answer += upper[lower.indexOf(my_array[i])];
        }
    }
    
    return answer;
}

function ExceptionOfNums(my_string){
    if(my_string.length < 1 || my_string.length > 1000){
        throw new Error("my_string length 오류");
    }
}

console.log(solution("cccCCC"));