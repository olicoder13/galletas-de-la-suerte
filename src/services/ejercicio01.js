const fibonacci = limit => {
    // code here
    const fibonacciNumbers = [];
    let first = 1;
  let second = -1;
  let now = 0;
  const result = [];
  while((first + second) <= limit ){
    now = first + second;
    result.push(now);
    second = first;
    first = now;
    
  }
  return result;
};

console.log(fibonacci(12));