function solution(num_list) {
    var answer = 0;
    let gop =1,i=1;
    //리스트의 길이가 11 이상,이하 인지 구분
    //if문으로 이상이면 모든 원소 합, 이하면 모든 원소 곱 return
    if(num_list.length>=11)
        for(i=0;i<num_list.length;i++)
            answer+=num_list[i];
    else{
        for(i=0; i<num_list.length;i++){
            gop*=num_list[i];
            answer=gop;
        }
    }
    return answer;
}