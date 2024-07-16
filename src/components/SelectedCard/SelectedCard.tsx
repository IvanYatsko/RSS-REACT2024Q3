import ISelectedPokemonDetails from '../../types/Pokemon/SelectedPokemonDetails';
import Card from '../Card/Card';

const SelectedCard: React.FC<ISelectedPokemonDetails> = ({ pokemon, onClose }) => {
  return (
    <div className="selected-card">
      <Card {...pokemon} onClose={onClose} />
    </div>
  );
};
