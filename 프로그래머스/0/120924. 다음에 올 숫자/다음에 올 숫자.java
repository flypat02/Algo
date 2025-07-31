class Solution {
    public int solution(int[] common) {
        // 등차수열인지 확인
        if ((common[1] - common[0]) == (common[2] - common[1])) {
            int diff = common[1] - common[0];
            return common[common.length - 1] + diff;
        }
        // 등비수열일 경우
        else {
            int ratio = common[1] / common[0];
            return common[common.length - 1] * ratio;
        }
    }
}
