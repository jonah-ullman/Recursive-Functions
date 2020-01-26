let reverseArray = array => {
    if (array.length == 0) {
        return []
    } else { 
        return reverseArray(a.slice(1)).concat(a[0])
    }
}