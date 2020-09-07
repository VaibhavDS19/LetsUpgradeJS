let arr = ['apples', 'bananas', 'carrots']
let searchval = 'apples'
let i

function a3() {
   for (i = 0; i < arr.length; arr++)
      if (arr[i] = searchval) {
         console.log("Search element found at position " + (i + 1))
         break;
      }
   if (i == arr.length)
      console.log("Search element not found")
}