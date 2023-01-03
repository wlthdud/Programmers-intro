/*
//////////

<문제 설명>
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

<제한사항>
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
공비가 0인 경우는 없습니다.

<입출력 예>
-입출력 예 #1
[1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.

-입출력 예 #2
[2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.

//////////
*/


function solution(common) {
    ExceptionOfNums(common);    

    if((common[1] - common[0]) == (common[2] - common[1])){
        return common[common.length-1] + (common[1] - common[0]);
    }else{
        return common[common.length-1] * parseInt(common[1] / common[0]);
    }
}

function ExceptionOfNums(common){
    if(common.length <= 2 || common.length >= 1000){
        throw new Error("common 길이 오류");
    }
    for(let i = 0; i < common.length; i++){
        if(common[i] <= -1000 || common[i] >= 2000){
            throw new Error("common 원소 오류");
        }
    }
}

console.log(solution([2,4,8]));