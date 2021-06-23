function range (start, finish, step) {
    const arr = [];
    const defaultStep = 1;
    if (step == undefined) {
        step = defaultStep;
    }
    if (start <= finish) {
      for (let i = start; i <= finish; i+=step) {
        arr.push(i);
      }
    return arr;
    } else {
        for (let i = start; i >= finish; i+=step) {
            arr.push(i);
          }
    return arr;
    }
  }
  
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total+=arr[i];
    }
    return total;
}

  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55