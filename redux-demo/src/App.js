import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';
import Adding from './Adding.js';

const App = () => {
  return (
    <div className="App">
      <Adding />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;