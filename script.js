function sumArray(array) {
  if (!array || array.length <= 1)
    {
        return 0;
    }
    let max = Math.max(...array);
    let min = Math.min(...array);

    return array.reduce((sum, num) => sum + num, 0) - max - min;
}
console.log(sumArray([1, 1, 11, 2, 3 ]));

function secondMethod(arr)
{
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return !arr || arr.length === 0 ? 0 : arr.reduce((sum, num) => sum + num, 0) - max - min;
}
console.log(secondMethod([1, 1, 11, 2, 3 ]));
