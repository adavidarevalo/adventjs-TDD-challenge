export default function checkSledJump(heights: number[]) {
    const max = Math.max(...heights)
    const maxIndex = heights.indexOf(max)

    if(max === heights[heights.length - 1]) return false;      

    for (let i = 0; i < heights.length; i++) {
        if(i < maxIndex && heights[i] < max) {
            if((heights[i] < heights[i + 1]) === false) return false
        } else {
            if(heights[i] === heights[heights.length - 1]) return true
            if ((heights[i] > heights[i + 1]) === false) return false
        }
    }
    return true
}