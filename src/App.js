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
      <div className="container status_section">
        <h2>Button Status</h2>
        <div>
          <p>Display with default selected value</p>
          <FilterButton 
          data={filterStatus} 
          keyName="longLabel"
          selected={3}
          ></FilterButton>
        </div>
        <div>
          <FilterButton data={filterStatus} keyName="shortLabel"></FilterButton>
        </div>
      </div>
      <div className="container">
        <h2>Dropdown</h2>
        <Dropdown data={frequency}></Dropdown>
      </div>
      <div className="container">
        <h2>Date Selector</h2>
        <DateInput></DateInput>
      </div>
      <div className="container">
        <h2>Badge</h2>
        <Badge 
          label="10% Off!" 
          style={{'backgroundColor': '#000', 'color': 'yellow'}}
        ></Badge>
      </div>
      <div className="container">
        <h2>Link with icon</h2>
        <ButtonIcon label="Edit" image={require('./assets/images/icon-edit.svg')}></ButtonIcon>
        <ButtonIcon label="New Payment Method" image={require('./assets/images/icon-edit.svg')}></ButtonIcon>
      </div>
      <div className="container tile_section">
        <h2>Tile</h2>
        <Tile title="Delivery Details">
          <label>Delivery Address</label>
          <p>Felix Estelle 103/320 Liverpool Street Darlinghurst, NSW, 210</p>
          <ButtonIcon label="Edit" image={require('./assets/images/icon-edit.svg')}></ButtonIcon>
          <div className="method">
            <label>Delivery Method</label>
            <Dropdown data={frequency}></Dropdown>
          </div>
        </Tile>
      </div>
    </div>
  );
}

export default App;
