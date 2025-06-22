function solution(num_list) {
    var answer = [];
    let hol=0, jjak=0;
    //num_list에서  홀,짝 판단해 hol,jjak에 넣기
    for (let i=0; i<num_list.length; i++)
        {
            if(num_list[i]%2===0)
                jjak+=1;
            else
                hol+=1;
        }
    //hol, jjak을 answer에 넣기
    answer=[jjak,hol];
    return answer;
}