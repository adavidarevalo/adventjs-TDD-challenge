const validateAlphabet = (str: string) => {
    const valueRepeat = []

 for (let i = 0; i < str.length; i++) {
    if(!!valueRepeat.find(x => x === test[i]) === false) {
        valueRepeat.push(str[i])
    } 
 }

 return str.length === valueRepeat.length 
}

export default function canReconfigure(from: string, to: string) {
 if (from.length !== to.length) return false
 const fromStr = validateAlphabet(from) 
 const toStr = validateAlphabet(to)
 if(fromStr === false || toStr === false) return false

 
  return true
}