import React, { useState } from 'react';
import RegisterForm from '../pages/Registration';
import events from '../Data/Events';

const Navbar = () => {
  const [query, setQuery] = useState('');

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    alert(`Searching for: ${query}`);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>GoCrazy.lol</div>
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          placeholder="Search Query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>
       <button
        onClick={() => setSelectedEvent(events)}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Register
       </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 30px',
    background: '#222',
    color: '#fff',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    margin: '0 20px',
    maxWidth: '500px',
  },
  searchInput: {
    flex: 1,
    padding: '8px',
    borderRadius: '4px 0 0 4px',
    border: 'none',
    outline: 'none',
  },
  searchButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    background: '#555',
    color: '#fff',
    cursor: 'pointer',
  },
  registerButton: {
    padding: '8px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#ff9800',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Navbar;