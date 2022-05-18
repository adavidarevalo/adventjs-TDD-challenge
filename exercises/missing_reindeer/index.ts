export default function missingReindeer(ids: number[]) {
    const ArrayLength = Math.max(...ids)
    const idsSort = ids.sort()

    for (let i = 0; i <= ArrayLength + 1; i++) {        
        if(idsSort[i] !== i) {            
            return i;
        }
    }
}