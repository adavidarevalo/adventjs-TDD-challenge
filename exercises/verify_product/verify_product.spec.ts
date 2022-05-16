import contains from '.'

describe('Verify Product', () => {
    it('It is correct, the product exist in the object.', () => {
        const store = {
            'estanteria1': {
              'cajon1': {
                'producto1': 'coca-cola',
                'producto2': 'fanta',
                'producto3': 'sprite'
              }
            },
            'estanteria2': {
              'cajon1': 'vacio',
              'cajon2': {
                'producto1': 'pantalones',
                'producto2': 'camiseta' // <- ¡Está aquí!
              }
            }
          }
        expect(contains(store, 'camiseta')).toBeTruthy()
    })

    it('It is falsy, the product not exist in the object.', () => {
        const store = {
            'baul': {
              'fondo': {
                'objeto': 'cd-rom',
                'otro-objeto': 'disquette',
                'otra-cosa': 'mando'
              }
            }
          }
        expect(contains(store, 'gameboy')).toBeFalsy()
    })
})