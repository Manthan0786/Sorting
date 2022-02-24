export function quicksort(array) {
  const animation = [];
  if (array.length <= 1) {
    return;
  }
  quicksortHelper(array, 0, array.length - 1, animation);
  print(array);
  return animation;
}

function quicksortHelper(arr, s, e, animation) {
  if (s >= e) {
    return;
  }
  let p = partition(arr, s, e, animation);
  quicksortHelper(arr, s, p - 1, animation);
  quicksortHelper(arr, p + 1, e, animation);
}

function partition(array, s, e, animation) {
  var pivot = array[e];
  var pindex = s;
  for (let i = s; i < e; i++) {
    animation.push(["comparison1", i, e]);
    animation.push(["comparison2", i, e]);
    if (array[i] <= pivot) {
      animation.push(["comparison1", i, pindex]);
      animation.push(["swap", i, array[pindex]]);
      animation.push(["swap", pindex, array[i]]);
      animation.push(["comparison2", i, pindex]);
      [array[i], array[pindex]] = [array[pindex], array[i]];
      pindex++;
    }
  }
  animation.push(["comparison1", e, pindex]);
  animation.push(["swap", e, array[pindex]]);
  animation.push(["swap", pindex, array[e]]);
  animation.push(["comparison2", e, pindex]);
  [array[pindex], array[e]] = [array[e], array[pindex]];
  return pindex;
}

function print(array) {
  console.log(array);
}
