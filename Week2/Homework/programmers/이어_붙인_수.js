function solution(num_list) {
    var answer = 0;

    // 초기화
    let odd = '';
    let even = '';

    for (let i = 0 ; i < num_list.length ; i++) { // 0 ~ 끝까지 순서대로 반복
        if (num_list[i] % 2 === 0) { // 짝수 - 2로 나눴을 때 나머지가 0인 경우
            even += num_list[i];
        } else {
            odd += num_list[i]; //홀수 - 그 외
        }

        answer = Number(odd) + Number(even); // 홀수 이어붙인 수 + 짝수 이어붙인 수
    }

    return answer;
}