// from https://plot.ly/nodejs for the plotting library
name = 'your name here'
api_key = 'your api key here'
let plotly = require('plotly')('jvdsouza', 'lvb8efndI9eiEdZEunRY');
//comparing fibonacci sequences calculated by recursion through
//use of memoization and exclusion of memoisation
findAtArray = [] //to be used as the independant data
memoizeArray = [] //to be used as dependant data for memoization
nonMemoizedArray = [] //to be used as dependant data for non-memoization

let findAt;
for (let i=0; i<=20; i++) {
  findAtArray.push(i) //add the independant data
  findAt = i; //calculate with current value of i
  //---------------------------------------memoized---------------------------------
  memoizedCalculations = 0; //number of Calculations (dependant data) with
                            //memoization
  const fibonacciFind = () => { //O(n) time
    cache = {};
    return function(n) {
      if(n in cache) {
        return cache[n]
      } else{
        memoizedCalculations++;
        if(n < 2){
          return n
        }
        cache[n] = fibonacci(n-1) + fibonacci(n-2);
        return cache[n]
      }
    }
  }

  const fibonacci = fibonacciFind();
  fibonacci(findAt)
  memoizeArray.push(memoizedCalculations)
  // console.log(`memoized memoizedCalculations at ${findAt}: `, memoizedCalculations);


  //-------------------------------------not memoized-------------------------------
  nonMemoizedCalculations = 0; //number of Calculations (dependant data) without
                               //memoization
  const fibonacciNonMemoized = (n) => { //O(n^2) time
    nonMemoizedCalculations++;
    if (n < 2) {
      return n
    }
    return fibonacciNonMemoized(n-1) + fibonacciNonMemoized(n-2)
  }
  fibonacciNonMemoized(findAt)
  nonMemoizedArray.push(nonMemoizedCalculations)
  // console.log(`non memoized Calculations at ${findAt}: `, nonMemoizedCalculations);
}

// console.log(findAtArray)
// console.log(memoizeArray)
// console.log(nonMemoizedArray)
// console.log('end data')

let memoizedData = {
  x: findAtArray,
  y: memoizeArray,
  name: 'memoized',
  type: 'scatter'
};

let nonMemoizedData = {
  x: findAtArray,
  y: nonMemoizedArray,
  name: 'non memoized',
  type: 'scatter'
};

let data = [memoizedData, nonMemoizedData]

var graphOptions = {filename: "basic-line", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
