import IPokemonDetails from './pokemonDetails';

interface ISelectedPokemonDetails {
  pokemon: IPokemonDetails;
  onClose: () => void;
}

export default ISelectedPokemonDetails;
