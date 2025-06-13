import { urlPokemon } from './constants';

const getPokemons = async (offset = 1, limit = 10) => {
  const url = `${urlPokemon}?offset=${offset}&limit=${limit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching Pokémon data');
    }

    const data = await response.json();
    return {
      count: data.count,
      results: data.results,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      count: 0,
      results: [],
      next: null,
      previous: null,
    };
  }
};

export { getPokemons };
