import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/searchBar.module.css"


const SearchBar = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const Navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      redirectToSearch();
      // setSearchTerm('')
    }
  };

  const redirectToSearch = () => {
    if (searchTerm.trim() !== '') {
      Navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    const inputElement = document.getElementById('search-input');
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div className={styles.searchCont}>
      <input
        id="search-input"
        type="text"
        placeholder="Search keyword...."
        value={searchTerm}
        className={styles.searchInput}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={redirectToSearch} className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
