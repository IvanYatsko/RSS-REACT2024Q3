import ISelectedPokemonDetails from '../../types/Pokemon/selectedPokemonDetails';
import Card from '../Card/Card';
import './selectedCard.css';

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
