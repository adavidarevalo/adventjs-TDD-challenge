export function isValid(letter: string): boolean{
    const test = ['()', '{', '}', '{}', '[', ']', '[]']

    if(
        letter.includes('(') === false || 
        letter.includes(')') === false ) {
            return false
        }

    const val = test.filter(item => letter.includes(item))

    return !!val.length === false
}