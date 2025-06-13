import { urlPokemon } from './constants';

const getPokemonInfo = async (id: string) => {
  const url = `${urlPokemon}/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching Pokémon data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return {};
  }
};

export { getPokemonInfo };
