document.addEventListener("DOMContentLoaded", function() {
    function myCountChar(haystack, needle) {
        let counter = 0
        for (let i in needle) {
            if (haystack == needle[i]) {
               counter += 1
            }
        }
        return counter
        
    }
    console.log(myCountChar('i', 'aie miguel'))
});