let strs = 'some random string'
let ch = 'x'

function a1(strs, ch) {
   if (strs.indexOf(ch) >= 0)
      console.log(true)
   else
      console.log(false)
}
a1(strs, ch)