const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
}

export default function decodeNumber(symbols: string) {
    let result = 0;
    for (let i = 0; i < symbols.length; i++) {
        const actualValue = values[symbols.charAt(i)]
        if(!!actualValue === false) return NaN
        if(actualValue > values[symbols.charAt(i - 1)]) {
            result = result + (actualValue - values[symbols.charAt(i - 1)] * 2)
        } else {
            result = result + actualValue    
        }
    }
  return result
}