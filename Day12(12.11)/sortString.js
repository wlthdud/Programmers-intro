/*
//////////

<문제 설명>
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

<제한사항>
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

<입출력 예>
-입출력 예 #1
"hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.

-입출력 예 #2
"p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.

//////////
*/


function solution(my_string) { 
    ExceptionOfNums(my_string);

    /*
    numString = my_string.replace(/[a-z]/g, '');

    numArray = [...numString].sort();
    
    numArray.map(x => Number(x));
    
    return numArray;
    */
    
    return my_string.match(/[0-9]/g).sort((a, b) => a - b).map(n => Number(n));

}

//예외처리
function ExceptionOfNums(my_string){
    if(my_string.length < 1 || my_string.length > 100){
        throw new Error("my_string ERROR");
    }
    if(my_string.match(/[a-z]/g).length == 0){
        throw new Error("문자열이 포함되어있지 않습니다. ERROR");
    }
}

console.log(solution("hi12392"));