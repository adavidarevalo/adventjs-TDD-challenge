export default function getMinJump(obstacles: number[]) {
  const freeObstacles = [0]
  
  for (let i = 1; i <= 10; i++) {
    freeObstacles.push(obstacles.includes(i) ? NaN : i)
  }
  
  for (let i = 1; i <= 10; i++) {
      let value = true
    for (let x = 0; x <= 10; x++) {  
        if(Boolean((x * i) > 10) === false && Number.isNaN(freeObstacles[x * i])) {
            value = false
        }
    }
    
    if (value) return i

  }
}