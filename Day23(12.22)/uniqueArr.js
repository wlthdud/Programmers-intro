/*
//////////

<문제 설명>
정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

<제한사항>
1 ≤ n ≤ 10,000
1 ≤ numlist의 원소 ≤ 10,000
1 ≤ numlist의 길이 ≤ 100
numlist는 중복된 원소를 갖지 않습니다.

<입출력 예>
-입출력 예 #1
4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다.
3과 5는 거리가 같으므로 더 큰 5가 앞에 와야 합니다.
2와 6은 거리가 같으므로 더 큰 6이 앞에 와야 합니다.

-입출력 예 #2
30에서 가까운 순으로 [36, 40, 20, 47, 10, 6, 7000, 10000]을 return합니다.
20과 40은 거리가 같으므로 더 큰 40이 앞에 와야 합니다.

//////////
*/


function solution(numlist, n) {
    ExceptionOfNums(numlist, n);
    
    return numlist.sort((a,b) => {
        const [aGap, bGap] = [Math.abs(a-n), Math.abs(b-n)];
        if(aGap == bGap){
            return b - a;
        }
        return aGap - bGap;
    })
}

function ExceptionOfNums(numlist, n){
    if(n < 1 || n > 10000){
        throw new Error("n 오류");
    }
    if(numlist.length < 1 || numlist.length >100){
        throw new Error("numlist 길이 오류");
    }
    for(let i = 0; i < numlist.length; i++){
        if(numlist[i] < 1 || numlist[i] > 10000){
            throw new Error("numlist 원소 오류");
        }
    }
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));