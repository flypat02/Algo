function solution(phone_number) {
    var answer = '';
    let tempt =[];
    //문자열을 배열로 변환해준다
    tempt = phone_number.split('');
    
    //끝에서 4자리는 남겨두고 나머지 번호는 *로 바꾼다
    for (let i=0; i<tempt.length-4;i++){
        tempt[i]='*';
    }
    
    //바꾼 배열을 다시 문자열로 변환한다
    answer=tempt.join('');
    return answer;
}