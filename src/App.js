import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './Pokemon/Pokemon';
//import _ from 'lodash';
import PokeJSON from './Static/pokemon-data-full-en-PoGO.json';
//import MoveJSON from './Static/move-data-full-PoGO.json';

import './App.css';


const completeDataSet = PokeJSON;
//const completeMoveSet = MoveJSON;

let myDataSet = completeDataSet.filter(
  obj => obj.field_legacy_charge_moves !== ""
  || obj.field_legacy_quick_moves !== ""
  || (obj.charge_exclusive_moves !== "" &&  obj.charge_exclusive_moves !== "Return")
  || obj.quick_exclusive_moves !== ""
  );

class App extends Component {

  // constructor() {
  //   super();
  // }

  componentDidMount() {
    
  }

  render() {
    //console.log(completeMoveSet);
    return (
        <div className="App">
          <header className="App-header">
            <h1>Legacy Movesets</h1>

            <nav>
              <ul className="outer-table col-11 col-md-10 col-lg-6 m-auto">
                {
                  myDataSet
                    .map((mon, index) => {
                    return (
                      
                      <li key={index}>
                        <Pokemon index={index} currentMon={mon} />
                      </li>
                    );
                  })
                }
              </ul>
            </nav>
          </header>
        </div>
    )
  };
}

export default App;
