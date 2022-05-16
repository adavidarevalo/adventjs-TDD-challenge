const bodyTree = () => {
    
}

export function createXmasTree(height: number) {
    let result = ''
    let counter = null;
    
    for (let i = height; i >= 1; i--) {
        let space = ''
        let star = ''
        
        space += '_'.repeat(i - 1)
        
        if(counter === null) {
            counter = (space.length * 2) + 1
        }
        
        const starValue = counter - (space.length * 2)

        star += '*'.repeat(starValue)
        
        result += space + star + space + '\n'
    }
    let space = '';
    space += '_'.repeat((counter - 1) / 2)
    result += `${space}#${space}\n`.repeat(2)
  return result
}
