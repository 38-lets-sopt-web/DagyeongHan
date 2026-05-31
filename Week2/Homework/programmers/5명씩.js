function solution(names) {
    var answer = [];
    
    for (let i = 0; i < names.length; i += 5) { // 인덱스 5개씩 건너뜀
        answer.push(names[i]); // names 배열의 i번째 값을 answer 배열에 추가
    }
    
    return answer;
}