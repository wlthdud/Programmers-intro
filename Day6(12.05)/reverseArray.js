/*
//////////

<문제 설명>
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ my_string의 길이 ≤ 1,000

<입출력 예>
-입출력 예 #1
my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

-입출력 예 #2
my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

//////////
*/


function solution(my_string) {
    ExceptionOfNums(my_string);

    return my_string.split('').reverse().join('');
}

//예외처리
function ExceptionOfNums(my_string){
    if(my_string.length < 1 || my_string.length > 1000){
        throw new Error("my_string 길이 오류");
    } 
}

console.log(solution("bread"));