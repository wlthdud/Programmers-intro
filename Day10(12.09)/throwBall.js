/*
//////////

<문제 설명>
머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 
공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

<제한사항>
2 < numbers의 길이 < 100
0 < k < 1,000
numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.


<입출력 예>
-입출력 예 #1
1번은 첫 번째로 3번에게 공을 던집니다.
3번은 두 번째로 1번에게 공을 던집니다.

-입출력 예 #2
1번은 첫 번째로 3번에게 공을 던집니다.
3번은 두 번째로 5번에게 공을 던집니다.
5번은 세 번째로 1번에게 공을 던집니다.
1번은 네 번째로 3번에게 공을 던집니다.
3번은 다섯 번째로 5번에게 공을 던집니다.

-입출력 예 #3
1번은 첫 번째로 3번에게 공을 던집니다.
3번은 두 번째로 2번에게 공을 던집니다.
2번은 세 번째로 1번에게 공을 던집니다.

//////////
*/


function solution(numbers, k) {
    ExceptionOfNums(numbers, k);
    let getIndex = 0; //받는 사람 인덱스
    let throwIndex = 0; //던지는 사람 인덱스

    for(let i = 0; i < k; i++){ 
        getIndex += 2;

        if(getIndex >= numbers.length){
            getIndex -= numbers.length;
        }
    }

    if((getIndex - 2) >= 0){
        throwIndex = getIndex - 2;
    }else{
        throwIndex = getIndex + numbers.length - 2;
    }

    return numbers[throwIndex];
}

//예외처리
function ExceptionOfNums(numbers, k){

    if(numbers.length <= 2 || numbers.length >= 100){
        throw new Error("numbers 길이 ERROR");
    }
    if(k <= 0 || k >= 1000){
        throw new Error("k ERROR");
    }
}

console.log(solution([1, 2, 3, 4], 2));