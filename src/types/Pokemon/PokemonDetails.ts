interface IPokemonDetails {
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
  onClose?: () => void;
}

export default IPokemonDetails;
