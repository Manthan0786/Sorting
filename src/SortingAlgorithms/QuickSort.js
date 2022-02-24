export function quicksort(array) {                               //calling original array
  const animation = [];
  if (array.length <= 1) {
    return;
  }
  quicksortHelper(array, 0, array.length - 1, animation);
  print(array);
  return animation;                                           //returning animations for visualization
}

function quicksortHelper(arr, s, e, animation) {
  if (s >= e) {
    return;
  }
  let p = partition(arr, s, e, animation);                        //function to divide array in two parts
  quicksortHelper(arr, s, p - 1, animation);
  quicksortHelper(arr, p + 1, e, animation);
}

function partition(array, s, e, animation) {
  var pivot = array[e];                                           //select last element of array as pivot
  var pindex = s;                                        
  for (let i = s; i < e; i++) {
    animation.push(["comparison1", i, e]);                       //Comparing value at i and e so push them to change their color
    animation.push(["comparison2", i, e]);                       //Comparing them again to turn them into secondary color
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
