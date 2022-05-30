import React from 'react';
import './App.css';
import {User_c} from './components/user_c';
import {Results_c} from './components/results_c';
import {SearchForm_c} from './components/search_form_c';

export function App() {
  return (
    <div className="App">
      <User_c name={'joe'} avatarURLL={''}/>
      <SearchForm_c/>
      <Results_c/>
    </div>
  );
}
