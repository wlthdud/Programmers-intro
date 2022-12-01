/*
//////////

<문제 설명>
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

<제한사항>
0 < denum1, num1, denum2, num2 < 1,000

<입출력 예>
-입출력 예 #1
1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

-입출력 예 #2
9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

//////////
*/


let denum; //분자
let num; //분모
let gcd; //최대공약수

function solution(denum1, num1, denum2, num2) {
    ExceptionOfNums(denum1, num1, denum2, num2);
    
    let answer = [];

    addFraction(denum1, num1, denum2, num2);

    if(denum > num) {
        calGCD(denum, num);
    }else{
        calGCD(num, denum);
    }

    answer[0] = parseInt(denum / gcd);
    answer[1] =  parseInt(num / gcd);
    
    return answer;
}

function addFraction(denum1, num1, denum2, num2){
    denum = (denum1 * num2) + (denum2 * num1); //8
    num = num1 * num2; //10
}

function calGCD(a, b){
    let r = a % b;
    if(r == 0) {
        gcd = b;
        return gcd;
    }else{
        return calGCD(b, r);
    }
}

//예외처리
function ExceptionOfNums(denum1, num1, denum2, num2){
    if(denum1 < 0 || denum1 > 1000){
        throw new Error("denum1 값 오류");
    }
    if(num1 < 0 || num1 > 1000){
        throw new Error("num1 값 오류");
    }
    if(denum2 < 0 || denum2 > 1000){
        throw new Error("denum2 값 오류");
    }
    if(num2 < 0 || num2 > 1000){
        throw new Error("num2 값 오류");
    }   
}