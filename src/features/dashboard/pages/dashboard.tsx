import useDashboard from '../hooks/useDashboard';
import UserIcon from '../../../assets/user_Icon';
import { urlPokemonImage } from '../../../services/constants';
import { capitalize } from '../../../shared/utils/capitalize';
import '../styles/Dashboard.scss';

const Dashboard = () => {
  const {
    user,
    loading,
    pokemons,
    getPokemonId,
    currentPage,
    setCurrentPage,
    totalPages,
    handleInfoPokemon,
    handleLogOut,
  } = useDashboard();
  return (
    <div className="dashboard-container">
      <div className="header-dashboard">
        <div className="container-user-info">
          <UserIcon />
          <span className="span-header">
            {user?.username ? user?.username : 'Invitado'}
          </span>
        </div>
        <span className="span-logout" onClick={() => handleLogOut()}>
          Log out
        </span>
      </div>

      <div className="body-dashboard">
        <div className="list-pokemon">
          {loading
            ? 'loading....'
            : pokemons.map((pokemon) => {
                const id = getPokemonId(pokemon.url);
                const imageUrl = `${urlPokemonImage}/${id}.svg`;
                return (
                  <button
                    key={pokemon.name}
                    className="pokemon-card"
                    onClick={() => handleInfoPokemon(pokemon.name, pokemon.url)}
                  >
                    <img
                      src={imageUrl}
                      alt={pokemon.name}
                      width="80"
                      height="80"
                    />
                    <p>{capitalize(pokemon.name)}</p>
                  </button>
                );
              })}
        </div>
      </div>

      <div className="footer-dashboard">
        <div className="pagination">
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Anterior
          </button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages || loading}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
