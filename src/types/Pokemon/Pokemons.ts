export interface IPokemonResult {
  name: string;
  url: string;
}

export interface IPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonResult[];
}

export interface IPokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
