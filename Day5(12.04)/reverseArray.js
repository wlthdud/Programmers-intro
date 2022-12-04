/*
//////////

<문제 설명>
정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ num_list의 길이 ≤ 1,000
0 ≤ num_list의 원소 ≤ 1,000

<입출력 예>
-입출력 예 #1
num_list가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.

-입출력 예 #2
num_list가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.

-입출력 예 #3
num_list가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.

//////////
*/


function solution(num_list) {
    ExceptionOfNums(num_list);

    return num_list.reverse();
}

//예외처리
function ExceptionOfNums(num_list){
    if(num_list.length < 1 || num_list.length > 1000){
        throw new Error("num_list 길이 오류");
    } 
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] < 0 || num_list[i] > 1000){
            throw new Error("num_list 원소 오류");
        }
    }
}