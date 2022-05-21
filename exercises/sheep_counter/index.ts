// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

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
