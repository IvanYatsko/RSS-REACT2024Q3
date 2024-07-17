import IPokemonDetails from './PokemonDetails';

interface ISelectedPokemonDetails {
  pokemon: IPokemonDetails;
  onClose: () => void;
}

export default ISelectedPokemonDetails;
