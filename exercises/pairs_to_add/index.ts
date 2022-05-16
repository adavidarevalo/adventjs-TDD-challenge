export default function sumPairs (numbers, result, counter = 1){
    // if(counter > numbers.length) return null
    // if(result.length > 0) return result
    
    // const value = newArray.find(x => newArray[counter] + x === result)
    
    // if(value) {
    //     result = [value, numbers[counter]]
    // }
    
    // return sumPairs(numbers, result, counter + 1)
    let value = null
    
    numbers.forEach((x, i) => {
        if(!!value) return;
        const newArray = [...numbers]
        newArray.splice(i, 1)
        newArray.forEach(y => {
            if(x + y === result) {
                value = [x, y]
            }
        })
    })
    
    return value
}
