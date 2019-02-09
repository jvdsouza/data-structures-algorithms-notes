const addTo80 = n => {
  console.log('long time')
  return n+80
}

// console.log(addTo80(5));
// addTo80(5)
// addTo80(5) long time would happen 3 times, can solve
//with memoization and caching

// let cache = {}; don't want the cache to be living in the global scope
const memoizedAddTo80 = () => {
  let cache = {}; //do closure instead
  return function(n) {
    if(n in cache) { //or if (cache.n)
      console.log('accessing from cache')
      return cache[n];
    } else {
      cache[n] = addTo80(n)
      return cache[n]
    }
  }
}

const memoized = memoizedAddTo80();
console.log(memoized(5))
console.log(memoized(10))
console.log(memoized(5))
console.log(memoized(10))
console.log(memoized(15))
console.log(memoized(15))
