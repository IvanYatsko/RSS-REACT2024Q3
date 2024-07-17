import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ButtonError from '../ButtonError';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { setInitialSearchValue, setSearchValue } from '../../context/action/action';
import './SearchSection.css';
import { useAppContext } from '../../hooks/useAppContext';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { HAS_CYRILLIC, HAS_SPACES } from '../../constants/validation';

const SearchSection: React.FC = () => {
  const searchValue = useAppContext(state => state.searchValue);
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', event.target.value);
    dispatch(setSearchValue(event.target.value));
  };

  const handleSearch = () => {
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

  useEffect(() => {
    dispatch(setInitialSearchValue(localStorage.getItem('searchValue') || ''));
  }, []);

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
