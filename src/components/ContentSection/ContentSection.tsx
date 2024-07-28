import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '../Card/Card';
import IPokemonDetails from '../../types/Pokemon/pokemonDetails';
import SelectedCard from '../SelectedCard/SelectedCard';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppContext } from '../../hooks/useAppContext';
import { getPokemonsList } from '../../context/action/action';
import './contentSection.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SelectionFlyout from '../SelectionFlyout/SelectionFlyout';

const ContentSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppContext(state => state.pokemonList);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IPokemonDetails | null>(null);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState(() => {
    const storedSelectedItems = localStorage.getItem('selectedItems');
    return storedSelectedItems ? new Set(JSON.parse(storedSelectedItems)) : new Set();
  });

  const page = Number(searchParams.get('page')) || 1;
  const id = Number(searchParams.get('details'));
  const offset = (page - 1) * 20;

  const handleNextCard = () => {
    setIsLoading(true);

    setTimeout(() => {
      setSearchParams({ page: (page + 1).toString() });
      setIsLoading(false);
    }, 500);
  };

  const handlePreviousCard = () => {
    setIsLoading(true);

    if (offset > 0) {
      setTimeout(() => {
        setSearchParams({ page: (page - 1).toString() });
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify([...selectedItems]));
  }, [selectedItems]);

  useEffect(() => {
    getPokemonsList(offset, dispatch);
  }, [offset, page]);

  useEffect(() => {
    if (Number(page) < 1) {
      navigate('/404');
    }
  }, [navigate]);

  useEffect(() => {
    if (id) {
      const pokemon = pokemonList.find(pokemon => pokemon.id === Number(id));
      if (pokemon) {
        setSelectedCard(pokemon);
        setIsCardSelected(true);
      }
    } else {
      setSelectedCard(null);
      setIsCardSelected(false);
    }
  }, [id, pokemonList]);

  const handleCardClick = (pokemon: IPokemonDetails) => {
    if (pokemon.id) {
      setSearchParams({ page: page.toString(), details: pokemon.id.toString() });
    }
    setIsCardSelected(true);
    setSelectedCard(pokemon);
  };

  const handleClose = () => {
    setSearchParams({ page: page.toString() });
    setIsCardSelected(false);
    setSelectedCard(null);
  };

  const handelContentSectionClick = () => {
    if (selectedCard) {
      setSearchParams({ page: page.toString() });
      setIsCardSelected(false);
      setSelectedCard(null);
    }
  };

  const handleCheckboxChange = (id: number, isSelected: boolean) => {
    setSelectedItems(prevSelectedItems => {
      const updateSelectedItems = new Set(prevSelectedItems);
      if (isSelected) {
        updateSelectedItems.add(id);
      } else {
        updateSelectedItems.delete(id);
      }
      return updateSelectedItems;
    });
  };

  const handelUnselectAll = () => {
    setSelectedItems(new Set());
  };

  const handelOnDownload = () => {
    const selectedPokemons = pokemonList.filter(pokemon => selectedItems.has(pokemon.id));
    const data = selectedPokemons.map(pokemon => ({
      id: pokemon.id ? `${pokemon.id}` : '',
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      hp: pokemon.stats.find(stat => stat.stat.name === 'hp')?.base_stat,
      attack: pokemon.stats.find(stat => stat.stat.name === 'attack')?.base_stat,
      defense: pokemon.stats.find(stat => stat.stat.name === 'defense')?.base_stat,
      specialAttack: pokemon.stats.find(stat => stat.stat.name === 'special-attack')
        ?.base_stat,
      specialDefense: pokemon.stats.find(stat => stat.stat.name === 'special-defense')
        ?.base_stat,
      speed: pokemon.stats.find(stat => stat.stat.name === 'speed')?.base_stat,
      detailsUrl: `${window.location.origin}/?page=${page}&details=${pokemon.id}`,
    }));
    return data;
  };

  return (
    <>
      <div className="button-container">
        <button className="button-next" onClick={handleNextCard}>
          Next
        </button>
        {offset > 0 && (
          <button className="button-previous" onClick={handlePreviousCard}>
            Previous
          </button>
        )}
      </div>
      <div className={`content-section ${isCardSelected ? 'selected-mode' : ''}`}>
        {isLoading && <LoadingSpinner />}
        <div className="cards-container" onClick={handelContentSectionClick}>
          {pokemonList.map(pokemonItem => (
            <Card
              {...pokemonItem}
              key={pokemonItem.id}
              onClick={() => {
                handleCardClick(pokemonItem);
              }}
              selected={selectedItems.has(pokemonItem.id)}
              onSelect={isSelected =>
                pokemonItem.id !== undefined &&
                handleCheckboxChange(pokemonItem.id, isSelected)
              }
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
      {selectedItems.size > 0 && (
        <SelectionFlyout
          onUnselectAll={handelUnselectAll}
          generateDownloadData={handelOnDownload}
          selectedItems={selectedItems.size}
        />
      )}
    </>
  );
};

export default ContentSection;
