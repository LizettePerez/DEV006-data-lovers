

import { sortPokemon } from '../src/data.js';

describe('sortPokemon', () => {
  it('Ordenar los Pokémon por nombre de forma ascendente', () => {
    const optionValue = 'name-asc';
    const unSortedData = [{ name: 'Pikachu' }, { name: 'Bulbasaur' }, { name: 'Charizard' }];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([{ name: 'Bulbasaur' }, { name: 'Charizard' }, { name: 'Pikachu' }]);
  });

  it('Ordenar los Pokémon por nombre de forma descendente', () => {
    const optionValue = 'name-desc';
    const unSortedData = [{ name: 'Pikachu' }, { name: 'Bulbasaur' }, { name: 'Charizard' }];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([{ name: 'Pikachu' }, { name: 'Charizard' }, { name: 'Bulbasaur' }]);
  });

  it('Ordenar los Pokémon por número de forma ascendente', () => {
    const optionValue = 'num-asc';
    const unSortedData = [{ num: 25 }, { num: 1 }, { num: 6 }];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([{ num: 1 }, { num: 6 }, { num: 25 }]);
  });

  it('Ordenar los Pokémon por número de forma descendente', () => {
    const optionValue = 'num-desc';
    const unSortedData = [{ num: 25 }, { num: 1 }, { num: 6 }];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([{ num: 25 }, { num: 6 }, { num: 1 }]);
  });
});



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
