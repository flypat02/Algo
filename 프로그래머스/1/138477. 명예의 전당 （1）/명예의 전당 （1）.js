function solution(k, score) {
    var answer = [];
    let cutline=[];
   
    for (let i = 0;i<score.length;i++){
        if(i<k)
            cutline.push(score[i]);
        if(score[i]>Math.min(...cutline)){
            cutline.pop();
            cutline.push(score[i]);
            cutline.sort((a,b)=>b-a);
        }
        answer.push(cutline.at(-1));
    }
    return answer;
}