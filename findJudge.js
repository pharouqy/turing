function findJudge(N, trust) {
  const trustCount = [];
  trustCount.length = N + 1;
  trustCount.fill(0);
  for (let [i, j] of trust) {
    trustCount[j]++;
    trustCount[i]--;
  }
  for (let i = 1; i <= N; i++) {
    if (trustCount[i] === N - 1) {
      return i;
    }
  }
  return -1;
}

console.log(findJudge(2, [[1, 2]])); // 2
console.log(
  findJudge(3, [
    [1, 2],
    [2, 3],
    [3, 1],
  ])
); // -1
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
); // 3
console.log(
  findJudge(3, [
    [1, 2],
    [2, 3],
  ])
); // -1
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
); // 3
