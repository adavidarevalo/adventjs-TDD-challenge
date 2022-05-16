import {sheepFilter} from '.'

test('Validate the sheep filter', () => {
  const sheep = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo'},
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo'}
    ]
  
  const result = [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
  ]

  expect(sheepFilter(sheep, 'rojo')).toEqual(result);
});
