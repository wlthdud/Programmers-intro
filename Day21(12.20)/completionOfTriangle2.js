/*
//////////

<문제 설명>
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

<제한사항>
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000

<입출력 예>
-입출력 예 #1
두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.

-입출력 예 #2 [3, 6]
가장 긴 변이 6인 경우
될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
나머지 한 변이 가장 긴 변인 경우
될 수 있는 한 변은 7, 8 로 2개입니다.
따라서 3 + 2 = 5를 return합니다.

-입출력 예 #3
가장 긴 변이 11인 경우
될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
나머지 한 변이 가장 긴 변인 경우
될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
따라서 7 + 6 = 13을 return합니다.

//////////
*/


function solution(sides) { 
    ExceptionOfNums(sides);
    let answer = 0;

    sides.sort((a,b) => {
        return a - b;
    });

    //배열의 최댓값 : 배열 원소
    for(let element = sides[1] - sides[0] + 1; element <= sides[1]; element++){
        console.log(element);
        answer++;
    }
    
    //배열의 최댓값 : 새로운 값
    for(let element = sides[1] + 1; element < sides[0] + sides [1]; element++){
        console.log(element);
        answer++;
    }

    return answer;
}

function ExceptionOfNums(sides){
    if(sides.length != 2){
        throw new Error("sides 길이 오류");
    }
    for(let i = 0; i < sides.length; i++){
        if(sides[i] < 1 || sides[i] > 1000){
            throw new Error("sides 원소 오류");
        }
    }
}

console.log(solution([11,7]));