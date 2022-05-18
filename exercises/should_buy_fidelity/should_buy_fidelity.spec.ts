import shouldBuyFidelity from ".";

describe('Should Buy Fidelity', () => {
    it('It`s false, The best option is to buy the ticket.', () => {
        const result = 'false -> Mejor comprar tickets de un sólo uso'

        expect(shouldBuyFidelity(1)).toBeFalsy()
    }),
    it('It`s True, The best option is to buy the fidelity card.', () => {
        const result = 'true -> Mejor comprar tarjeta fidelidad'

        expect(shouldBuyFidelity(100)).toBeTruthy()
    })
})