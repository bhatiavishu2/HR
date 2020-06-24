import React from 'react';
import logo from './logo.svg';
import './App.css';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const GET_NEWS_FEED = gql`
{
  allNews{
    author
  }
}
`;

function App() {
  const { loading, error, data } = useQuery(GET_NEWS_FEED);

  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error.message}`;
  console.log('test', data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
