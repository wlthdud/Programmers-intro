/*
//////////

<문제 설명>
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000

<입출력 예>
-입출력 예 #1
[1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

-입출력 예 #2
[1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.

//////////
*/


function solution(num_list) {
    ExceptionOfNums(num_list)
    let answer = [0,0];
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 == 0){
            answer[0] += 1;
        }else{
            answer[1] += 1;
        }
    }

    return answer;
}

//예외처리
function ExceptionOfNums(num_list){
    if(num_list.length < 1 || num_list.length > 100){
        throw new Error("num_list 길이 오류");
    } 
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] < 0 || num_list[i] >1000){
            throw new Error("num_list 원소 오류");
        }
    }
}