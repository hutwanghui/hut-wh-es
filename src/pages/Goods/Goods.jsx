import React, { Component } from 'react';
import ComplexTabTable from './components/ComplexTabTable/ComplexTabTable';

export default class Goods extends Component {
  static displayName = 'Goods';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="goods-page">
        <ComplexTabTable />
      </div>
    );
  }
}
