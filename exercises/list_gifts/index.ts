export const listGifts = (gifts: string) => {
    const result = {}

    const separatedStr = gifts.split(' ')    

    separatedStr.forEach(gift => {
        if(gift.includes('_')) return;

        if(!!result[gift] === false) {
            return result[gift] = 1
        }

        result[gift] += 1
    })

    return result
}