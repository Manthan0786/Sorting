export default function Mergesort(array) {
  //calling original array
  const animation = [];
  if (array.length <= 1) {
    return array;
  }
  mergesortHelper(array, 0, array.length - 1, animation);
  return animation; 
}

function mergesortHelper(array, startindex, endindex, animation) {
  if (startindex >= endindex) {
    return;
  }
  const mid = Math.floor((startindex + endindex) / 2); //dividing array in two parts
  mergesortHelper(array, startindex, mid, animation); // recrusion steps
  mergesortHelper(array, mid + 1, endindex, animation);
  merge(array, startindex, mid, endindex, animation); // merging sorted arrays
}

function merge(array, startindex, mid, endindex, animation) {
  let l = startindex;
  let k = startindex;
  let r = mid + 1;
  let mainArray = [];
  while (l <= mid && r <= endindex) {
    animation.push([l, r]); //Comparing value at ith and jth index so push them to change their color
    animation.push([l, r]); //By changing color we imply that we are comparing those two values and then again we should revert back to other color, so push them again
    if (array[l] <= array[r]) {
      //if condition satisfies,
      animation.push([k, array[l]]); // We overwrite the value at index k in the new array with the
      mainArray[k] = array[l]; // value at index l in the original array.
      k++;
      l++;
    } else {
      animation.push([k, array[r]]); // We overwrite the value at index k in the new array with the
      mainArray[k] = array[r]; // value at index r in the original array.
      k++;
      r++;
    }
  }
  while (l <= mid) {
    animation.push([l, l]); //We are comparing thses two values and changing their color
    animation.push([l, l]); //comparing again and revert them to seconday color
    animation.push([k, array[l]]);
    mainArray[k] = array[l];
    k++;
    l++;
  }
  while (r <= endindex) {
    animation.push([r, r]); //We are comparing thses two values and changing their color
    animation.push([r, r]); //comparing again and revert them to seconday color
    animation.push([k, array[r]]);
    mainArray[k] = array[r];
    k++;
    r++;
  }

  for (var i = startindex; i <= endindex; i++) {
    //again pushing values of new array to original array
    array[i] = mainArray[i];
  }
}
