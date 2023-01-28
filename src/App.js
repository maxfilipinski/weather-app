import './App.css';
import { useState } from 'react';
import config from './config.json';

function App() {
  const [query, setQuery] = useState('');

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      fetch(`${config.API_URL}?q=${query}&appid=${config.API_KEY}`)
        .then((res) => res.json())
        .then((res) => {
          setQuery('');
          console.log(res);
        });
    }
  };

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default App;
