function solution(rank, attendance) {
    let answer = 0, tempt = [], attStudent = [], sortedNums = [];

    // attendance에서 true인 인덱스 번호만 뽑아
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === true)
            attStudent.push(i);
    }

    // rank에서 참여한 학생들의 등수만 뽑아 높은 등수로 정렬
    for (let i = 0; i < attStudent.length; i++) {
        tempt.push({ idx: attStudent[i], rank: rank[attStudent[i]] }); // 객체로 저장
    }

    // rank 기준으로 정렬
    sortedNums = tempt.sort((a, b) => a.rank - b.rank);

    // 정렬 후 10000*1등 + 100*2등 + 3등을 return
    answer = 10000 * sortedNums[0].idx + 100 * sortedNums[1].idx + sortedNums[2].idx;

    return answer;
}
