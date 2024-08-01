import IPokemonDetails from './Pokemon/pokemonDetails';

interface ICardProps extends IPokemonDetails {
  onClick?: () => void;
  onSelect?: (isSelected: boolean) => void;
  selected: boolean;
}
export default ICardProps;
