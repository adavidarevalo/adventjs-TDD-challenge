import {listGifts} from '.'

test('Validate the list Gifts', () => {
  
  const result = {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  }

  const cart = 'bici coche balón _playstation bici coche peluche'  

  expect(listGifts(cart)).toEqual(result);
});
