export interface Pokemon {
  name: string;
  url: string;
}

export interface DataPokemonGet {
  count: number;
  results: Pokemon[];
  next: string | null;
  previous: string | null;
}
