import UserIcon from '../../../assets/user_Icon';
import usePokemonInfo from '../hooks/usePokemonInfo';
import '../styles/InfoPokemon.scss';

const InfoPokemon = () => {
  const { user, pokemon } = usePokemonInfo();
  return (
    <div className="main-container-info-pokemon">
      <div className="header-dashboard">
        <div className="container-user-info">
          <UserIcon />
          <span className="span-header">
            {user?.username ? user?.username : 'Invitado'}
          </span>
        </div>
        <span className="span-logout">Log out</span>
      </div>
      <div className="container-pokemon-info">
        <div className="card-pokemon-info">
          <h1>{pokemon?.name.toUpperCase()}</h1>
          <img
            src={
              pokemon?.sprites.other?.dream_world?.front_default ||
              pokemon?.sprites.front_default
            }
            alt={pokemon?.name}
            width={200}
            height={200}
          />

          <p>Experiencia base: {pokemon?.base_experience}</p>

          <h3>Movimientos:</h3>
          <ul>
            {pokemon?.moves.slice(0, 5).map(({ move }) => (
              <span key={move.name}>{move.name}</span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { InfoPokemon };
