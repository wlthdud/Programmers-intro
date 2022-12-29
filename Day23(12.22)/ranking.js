/*
//////////

<문제 설명>
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
0 ≤ score[0], score[1] ≤ 100
1 ≤ score의 길이 ≤ 10
score의 원소 길이는 2입니다.
score는 중복된 원소를 갖지 않습니다.

<입출력 예>
-입출력 예 #1
평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.

-입출력 예 #2
평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.
공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.

//////////
*/


function solution(score) {
    ExceptionOfNums(score);
    let result = [];

    let avg = score.map(a => (a[0] + a[1]) / 2);
    let sortAvg = avg.slice().sort((a,b) => b - a);

    for(let i = 0; i < avg.length; i++){
        result.push(sortAvg.indexOf(avg[i])+1);
    }

    return result;
}

function ExceptionOfNums(score){
    if(score[0] < 0 || score[1] > 100){
        throw new Error("score[0], score[1] 오류");
    }
    if(score.length < 1 || score.length > 10){
        throw new Error("score 길이 오류");
    }
    for(let i = 0; i < score.length; i++){
        if(score[i].length != 2){
            throw new Error("score 원소 오류");
        }
    }
}

console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]));