export function mergesort(array) {                                   //calling original array
  const animation = [];
  if (array.length <= 1) {
    return array;
  }
  mergesortHelper(array, 0, array.length - 1, animation);          
  return animation;                                                 //returning animations for visualization
}

function mergesortHelper(array, startindex, endindex, animation) {
  if (startindex >= endindex) {
    return;
  }
  const mid = Math.floor((startindex + endindex) / 2);           //dividing array in two parts             
  mergesortHelper(array, startindex, mid, animation);            // recrusion steps
  mergesortHelper(array, mid + 1, endindex, animation);
  merge(array, startindex, mid, endindex, animation);            // merging sorted arrays
}

function merge(array, startindex, mid, endindex, animation) {
  let l = startindex;
  let k = startindex;
  let r = mid + 1;
  let mainArray = [];
  while (l <= mid && r <= endindex) {                           
    animation.push([l, r]);                                       //Comparing value at ith and jth index so push them to change their color
    animation.push([l, r]);         //By changing color we imply that we are comparing those two values and then again we should revert back to other color, so push them again
    if (array[l] <= array[r]) {                      //if condition satisfies,    
      animation.push([k, array[l]]);                //pushing value of arr[l] into kth index
      mainArray[k] = array[l];                     //overwrite value of arr[l] to mainarray[k].
      k++;
      l++;
    } else {
      animation.push([k, array[r]]);               
      animation.push([k, array[l]]);           
      mainArray[k] = array[l];                 
      mainArray[k] = array[r];
      k++;
      r++;
    }
  }
  while (l <= mid) {
    animation.push([l, l]);
    animation.push([l, l]);
    animation.push([k, array[l]]);
    mainArray[k] = array[l];
    k++;
    l++;
  }
  while (r <= endindex) {
    animation.push([r, r]);
    animation.push([r, r]);
    animation.push([k, array[r]]);
    mainArray[k] = array[r];
    k++;
    r++;
  }

  for (var i = startindex; i <= endindex; i++) {     //again pushing values of new array to original array
    array[i] = mainArray[i];
  }
}
