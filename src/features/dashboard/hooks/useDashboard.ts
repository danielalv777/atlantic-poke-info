import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../app/store/useUserStore';
import { getPokemons } from '../../../services/getPokemon';
import type { DataPokemonGet, Pokemon } from '../types/pokemon';

export default function useDashboard() {
  const user = useUserStore((state) => state.user);
  const { clearUser } = useUserStore();
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const limit = 10;
  const offset = (currentPage - 1) * limit;
  const totalPages = Math.ceil(totalCount / limit);

  const getPokemonId = (url: string): string => {
    const segments = url.split('/').filter(Boolean);
    return segments[segments.length - 1];
  };

  const handleInfoPokemon = (namePokemon: string, urlPokemon: string) => {
    const id = getPokemonId(urlPokemon);
    navigate(`/pokemonInfo?name=${namePokemon}&pokemonid=${id}`);
  };

  const handleLogOut = () => {
    clearUser();
    navigate('/');
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData: DataPokemonGet = await getPokemons(offset, limit);
      console.log('que trae en el useeffect', pokemonData);
      setPokemons(pokemonData?.results);
      setLoading(false);
      setTotalCount(pokemonData.count);
    };

    fetchPokemons();
  }, [currentPage]);

  return {
    user,
    loading,
    pokemons,
    getPokemonId,
    currentPage,
    setCurrentPage,
    totalPages,
    handleInfoPokemon,
    handleLogOut,
  };
}
