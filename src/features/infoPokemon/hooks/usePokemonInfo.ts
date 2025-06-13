import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPokemonInfo } from '../../../services/getPokemonInfo';
import type { PokemonDetail } from '../types/pokemon';
import { useUserStore } from '../../../app/store/useUserStore';

export default function usePokemonInfo() {
  const { search } = useLocation();
  const user = useUserStore((state) => state.user);
  const params = new URLSearchParams(search);

  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const name = params.get('name');
  const pokemonId = params.get('pokemonid');

  useEffect(() => {
    if (!pokemonId) return;

    const fetchPokemons = async () => {
      const pokemonInfo = await getPokemonInfo(pokemonId ?? '');
      console.log('que trae en el useeffect', pokemonInfo);
      setPokemon(pokemonInfo);
      setLoading(false);
    };

    fetchPokemons();
  }, [pokemonId]);

  return {
    user,
    pokemon,
    loading,
    name,
  };
}
