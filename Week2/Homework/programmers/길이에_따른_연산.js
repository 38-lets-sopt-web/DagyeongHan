function solution(num_list) {
    var answer = 0;

    if (num_list.length >= 11) {
        let sum = 0; // 초기화

        for (let i = 0 ; i < num_list.length ; i++) { // 0 ~ 끝까지 순서대로 반복
            sum += num_list[i]; // 모든 원소의 합
        }

        answer = sum; // 결과 대입
    } else {
        let multi = 1; // 초기화, 곱이므로 1부터 시작

        for (let i = 0 ; i < num_list.length ; i++) { // 0 ~ 끝까지 순서대로 반복
            multi *= num_list[i]; // 모든 원소의 곱
        }

        answer = multi; // 결과 대입
    }

    return answer;
}