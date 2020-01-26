let arraySum = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'object') {
        sum += arraySum(arr[i])
      } else {
        sum += arr[i]
      }  
    }
    return sum
  }