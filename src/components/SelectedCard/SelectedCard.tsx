import ISelectedPokemonDetails from '../../types/Pokemon/SelectedPokemonDetails';
import Card from '../Card/Card';
import './SelectedCard.css';

const SelectedCard: React.FC<ISelectedPokemonDetails> = ({ pokemon, onClose }) => {
  return (
    <div className="selected-card">
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <Card {...pokemon} />
    </div>
  );
};

export default SelectedCard;
