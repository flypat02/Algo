function solution(todo_list, finished) {
    var answer = [];
    let tempt = [];

    // finished 배열에서 false인 인덱스를 찾기
    for (let i = 0; i < finished.length; i++) {
        if (finished[i] === false) {
            tempt.push(i);  // false인 인덱스를 저장
        }
    }

    // 못 끝낸 일(todo_list[false인 인덱스])을 answer에 담기
    for (let i = 0; i < tempt.length; i++) {
        answer.push(todo_list[tempt[i]]);
    }

    return answer;
}
