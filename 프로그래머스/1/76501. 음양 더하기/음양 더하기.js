function solution(absolutes, signs) {
    var answer = 0;
    let tempt=[],result=[];
    //true면 +1, false면 -1을 넣어줌
    for (let i =0;i<signs.length;i++){
        if(signs[i]===true)
            tempt.push(1);
        else
            tempt.push(-1);
    }
    //absolutes와 signs에 같은 인덱스인 값을 서로 곱하면 부호가 있는 정수가 만들어짐
    for (let i = 0; i<absolutes.length;i++)
        {
            result.push(absolutes[i]*tempt[i]);
        }
    //그리고 계산
    for(let i = 0; i<result.length;i++)
        {
            answer+=result[i];
        }
    return answer;
}