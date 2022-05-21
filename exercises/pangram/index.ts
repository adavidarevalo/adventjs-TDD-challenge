export default function pangram(letter: string) {  
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    let value = true
    
    alphabet.forEach( abc => {
        if(letter.toLowerCase().includes(abc) === false) {
            value = false
        }
        if(value === false) return false
    })

    return value
}
