export interface PokemonDetail {
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
    other?: {
      dream_world?: {
        front_default: string;
      };
    };
  };
  moves: { move: { name: string } }[];
}
