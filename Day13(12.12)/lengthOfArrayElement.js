/*
//////////

<문제 설명>
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

<입출력 예>
-입출력 예 #1
본문과 동일합니다.

-입출력 예 #2
["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

-입출력 예 #3
["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.

//////////
*/


function solution(strlist) { 
    ExceptionOfNums(strlist);
    let answer = [];
    
    for(let i = 0; i < strlist.length; i++){
        answer[i] = strlist[i].length;
    }

    return answer;
}

function ExceptionOfNums(strlist){
    for(let i = 0; i < strlist.length; i++){
        if(strlist[i].length < 1 || strlist[i].length > 100){
            throw new Error("strlist 원소 길이 오류");
        }
    }
    
}

console.log(solution(["We", "are", "the", "world!"]));