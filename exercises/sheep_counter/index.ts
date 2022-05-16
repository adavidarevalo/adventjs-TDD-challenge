interface ISheep {
    name: string,
    color: string
}

export function sheepFilter (sheepList: ISheep[], colorForFilter: string) {
    const sheepFiltered = sheepList.filter(sheep => {
        const {name, color} = sheep

        if(colorForFilter !== color) return;

        const nameLoweCase = name.toLowerCase()

        if(nameLoweCase.includes('a') === false) return;

        if(nameLoweCase.includes('n')) return sheep
    })
    return sheepFiltered;
}
