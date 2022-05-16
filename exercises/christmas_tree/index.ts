const treeBody = (sizeTree: number, counter: number, value: string) => {
    if(sizeTree === 0) return value;
    let result = value
    let space = ''
    let star = ''
    
    space += '_'.repeat(sizeTree - 1)
        
    const starNumber = counter - (space.length * 2)

    star += '*'.repeat(starNumber)
        
    result += space + star + space + '\n'
    
    return treeBody(sizeTree - 1, counter, result)
}

export function createXmasTree(height: number) {
    const counter = (height * 2) - 1;
    let result = ''
    let space = '';
    
    result = treeBody(height, counter, '')

    space += '_'.repeat((counter - 1) / 2)
    result += `${space}#${space}\n`.repeat(2)
  return result
}
