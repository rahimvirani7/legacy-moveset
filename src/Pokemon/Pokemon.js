import React from 'react'
import './Pokemon.css';
import Moveset from '../Moveset/Moveset';

class Pokemon extends React.Component {



  render() {
    let legacyQuickMove = this.props.currentMon.field_legacy_quick_moves;
    let legacyChargeMove = this.props.currentMon.field_legacy_charge_moves;
    let specialQuickMove = this.props.currentMon.quick_exclusive_moves;
    let specialChargeMove = this.props.currentMon.charge_exclusive_moves;

    return (
      <div className="item">
        <span className="dexno">#{this.props.currentMon.number}</span>
        <p className="mon-name">{this.props.currentMon.title_1}</p> 
        <img alt="icon" className="img-icon" src={this.props.currentMon.uri} />
        <br/>
        { legacyQuickMove ?
          <div className="col-10 col-md-4 move-table-wrapper">
            <Moveset label='Legacy Quick Move' moveset={legacyQuickMove} className="legacyQuick" />
          </div> : null }
        { legacyChargeMove ? 
          <div className="col-10 col-md-4 move-table-wrapper">
            <Moveset label='Legacy Charge Move' moveset={legacyChargeMove} className="legacyCharge" />
          </div> : null }
        { specialQuickMove ?
          <div className="col-10 col-md-4 move-table-wrapper">
            <Moveset label='Special Quick Move' moveset={specialQuickMove} className="specialQuick" />
          </div> : null }
        { specialChargeMove && specialChargeMove !== "Return" ?
          <div className="col-10 col-md-4 move-table-wrapper">
            <Moveset label='Special Charge Move' moveset={specialChargeMove} className="specialCharge" />
          </div> : null }
      </div>
    )
  }
}

export default Pokemon;