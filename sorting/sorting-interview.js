//#1 - Sort 10 schools around your house by distance:
// can probably use non-comparison sorting, as theyre fixed distances
// but theyre overly complex, so rather use something that benefits
// from small data lists, such as insertion sort, and possibly achieve
// O(n) time complexity, and O(1) space complexity

//#2 - eBay sorts listings by the current Bid amount:
//actually maybe radix or counting sort, numbers between certain range
//fixed integers

// need a quick sorting algorithm (as it's current) so something
// most likely nlog(n), and it's an unknown amount of items
// most likely a lot, may want to use merge sort or quick sort
// merge sort is more likely desirable as there may be duplicate values
// which can impede the time complexity of quick sort

//#3 - Sport scores on ESPN
// same idea as above (second point)
// if worried about space complexity, use quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// requires external sorting algorithms, so non-comparison is definitely
// not able to be used. Use something like merge sort. Heapsort is not able
// to be used, as it's unable to externally sort. merge sort is also a
// stable sorting algorithm, which can distinguish smaller time frames
// that for example land on the same day

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// only adding 2 new reviews means the data is most likely already sorted,
// meaning the addition of the reviews would make the data almost sorted.
// using insertion sort is the best idea.

//#6 - Temperature Records for the past 50 years in Canada
// Radix or counting if no decimal integers

// for the past 50 years requires a lot of data, either quick sort
// or merge sort. Depending on how the data will be categorised, it will
// depend, but if unable to be told, then merge sort

//#7 - Large user name database needs to be sorted. Data is very random.
// very random large username database will most likely be best sorted
// with merge sort. constant nlogn time complexity without worry of
// worst case scenario that quick sort has an issue with

//#8 - You want to teach sorting for the first time
// bubble sort or selection sort. maybe both. theyre both good teaching
// tools as theyre the simplest to implement and easy to teach the
// fundamentals
