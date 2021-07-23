function loop (val, testFn, updFn, bodyFn) {
    while (testFn(val)) {
     bodyFn(val);
      val = updFn(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);