let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getAllNums(arr) {
  let count = 0;
  for (let i of arr) {
    count += i;
  }
  return count;
}
console.log(getAllNums(nums));
