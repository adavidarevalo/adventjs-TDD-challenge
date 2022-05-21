export default function wrapGifts(gifts: string[]) {
    if(gifts.length === 0) return []
    
    const startAndEnd = '*'.repeat(gifts[0].length + 2)
    const result = [startAndEnd]
    
    gifts.forEach(gift => {
        result.push(`*${gift}*`)
    })
    
  return [...result, startAndEnd]
}