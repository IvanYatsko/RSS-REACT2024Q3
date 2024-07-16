import { useContext, useState } from 'react';
import './SearchSection.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ButtonError from '../ButtonError';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { HAS_CYRILLIC, HAS_SPACES } from '../../constants/validationConstants';
import { AppContext } from '../../context/AppContext';

const SearchSection: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(dispatch({ type: 'increment', payload: 1 }))

  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [pokemons, setPokemons] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('searchValue', searchValue);

    setIsLoading(true);

    if (HAS_SPACES.test(searchValue)) {
      setErrorMessage('Search field cannot contain spaces');
      setIsLoading(false);
    } else if (HAS_CYRILLIC.test(searchValue)) {
      setErrorMessage('Search field cannot contain Cyrillic characters');
      setIsLoading(false);
    }
  };

  const onClick = () => {
    console.log('Error simulation');
  };

  return (
    <>
      <div className="search-section">
        <fieldset className="search-section_container">
          <legend className="search-section_legend">Find your pokemon</legend>
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search"
          />
        </fieldset>
        <button onClick={handleSearch} className="search-section_button">
          Search
        </button>
        <ButtonError onClick={onClick}></ButtonError>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage}></ErrorMessage>}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default SearchSection;
