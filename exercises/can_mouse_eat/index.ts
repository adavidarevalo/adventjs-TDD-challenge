type movement = 'up' | 'down' | 'right' | 'left'

export default function canMouseEat(direction: movement, game: string[][]) {
    let arrWithMouse;
    game.forEach((m, i) => {
        if (m.includes('m')) {
            m.forEach((x, xi) => {
                if (x === 'm') {
                    arrWithMouse = [i, xi]
                }
            })
        }
    })
    const [x1, y1] = arrWithMouse
    
    if (direction === 'up') {
        if(game[x1 - 1][y1] === '*') return true
        return false
    }
    if (direction === 'down') {        
        if(game[x1 + 1][y1] === '*') return true
        return false
    }
    if (direction === 'right') {
        if(game[x1][y1 + 1] === '*') return true
        return false
    }
    if (direction === 'left') {
        if(game[x1][y1 - 1] === '*') return true
        return false
    }
}