/*
//////////

<문제 설명>
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
0 ≤ dots의 원소 ≤ 100
dots의 길이 = 4
dots의 원소의 길이 = 2
dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

<입출력 예>
-입출력 예 #1
점 [1, 4], [3, 8]을 잇고 [9, 2], [11, 6]를 이으면 두 선분은 평행합니다.

-입출력 예 #2
점을 어떻게 연결해도 평행하지 않습니다.

//////////
*/


function solution(dots) { 
    ExceptionOfNums(dots);
    const leanArr = [];

    for(let i = 0; i < dots.length; i++){
        for(let j = i + 1; j < dots.length; j++){
            const curLean = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0]);
            if(leanArr.includes(curLean)){
                return 1;
            }else{
                leanArr.push(curLean);
            }
        }
    }
    
    return 0;
}

function ExceptionOfNums(dots){
    if(dots.length != 4){
        throw new Error("dots 길이 오류");
    }
    for(let i = 0; i < dots.length; i++){
        if(dots[i] < 0 || dots[i] > 100){
            throw new Error("dots 원소 오류");
        }
        if(dots[i].length != 2){
            throw new Error("dots 원소 길이 오류");
        }
    }
}

console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]));