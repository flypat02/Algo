function solution(n, k) {
    let answer = 0,service=0;
    // 총 인분을 10으로 나눠 서비스로 받는 음료수 개수 구하기
    service = parseInt(n/10);
    //원 가격에 서비스 음료*2000을 빼기
    answer = n*12000 + k*2000 - service*2000;
    return answer;
}