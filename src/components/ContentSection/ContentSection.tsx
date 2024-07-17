import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '../Card/Card';
import { IPokemonDetails } from '../../types/Pokemon/Pokemons';
import './ContentSection.css';
import SelectedCard from '../SelectedCard/SelectedCard';
import { getPokemonsList } from '../../context/action/action';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppContext } from '../../hooks/useAppContext';

const ContentSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppContext(state => state.pokemonList);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IPokemonDetails | null>(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleCardClick = (pokemon: IPokemonDetails) => {
    setIsCardSelected(true);
    setSelectedCard(pokemon);
  };

  const handleClose = () => {
    setIsCardSelected(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    getPokemonsList(20, dispatch);
  }, []);

  return (
    <div className="content-section">
      {isLoading && <LoadingSpinner />}
      <div className="cards-container">
        {pokemonList.map((pokemonItem, index) => (
          <Card
            {...pokemonItem}
            key={index}
            onClick={() => handleCardClick(pokemonItem)}
          />
        ))}
      </div>
      {isCardSelected && selectedCard && (
        <>
          <div className="divider"></div>
          <div className="selected-card-container">
            <SelectedCard pokemon={selectedCard} onClose={handleClose} />
          </div>
        </>
      )}
    </div>
  );
};

export default ContentSection;
