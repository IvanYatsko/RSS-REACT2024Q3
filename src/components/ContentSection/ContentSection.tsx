import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '../Card/Card';
import { fetchPokemonDetails, fetchPokemonsList } from '../../api/api';
import { IPokemonResult } from '../../types/Pokemon/Pokemons';
import IPokemonDetails from '../../types/Pokemon/PokemonDetails';
import './ContentSection.css';

const ContentSection: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response: IPokemonResult[] = await fetchPokemonsList(offset, limit);
        const pokemonDetailsRequests = response.map(pokemon =>
          fetchPokemonDetails(pokemon.url),
        );
        const PokemonDetails = await Promise.all(pokemonDetailsRequests);

        setPokemon(PokemonDetails);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [offset, limit]);

  return (
    <div className="content-section">
      {isLoading && <LoadingSpinner />}
      {pokemon.map((pokemonItem, index) => (
        <Card {...pokemonItem} key={index} />
      ))}
    </div>
  );
};

export default ContentSection;
