import React from 'react';
import './App.scss';

import Counter from './components/counter/counter';
import FilterButton from './components/filter_button/filter_button';
import Dropdown from './components/dropdown/dropdown';
import DateInput from './components/date_input/date_input';
import Badge from './components/badge/badge';
import ButtonIcon from './components/btn_icon/btn_icon';
import Tile from './components/tile/tile';

const filterStatus = [{
  id: 1,
  shortLabel: 'Skip',
  longLabel: 'Skip Next Order'
}, {
  id: 2,
  shortLabel: 'Pause',
  longLabel: 'Pause Subscription'
}, {
  id: 3,
  shortLabel: 'Cancel',
  longLabel: 'Cancel Subscription'
}];

const frequency = ['Every 2 weeks', 'Everyday'];

function App() {
  return (
    <div className="App">
      <h1>StyleTiles</h1>
      <div className="container">
        <h2>Quantity Counter</h2>
        <Counter></Counter>
      </div>
     
    </div>
  );
}

export default App;
