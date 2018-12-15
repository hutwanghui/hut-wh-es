import React, { Component } from 'react';
import RealTimeStatistics from './components/RealTimeStatistics';
import InfiniteCard from './components/InfiniteCard';
import ExpandedTable from './components/ExpandedTable';

export default class Order extends Component {
  static displayName = 'Order';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="order-page">
        <RealTimeStatistics />
        <InfiniteCard />
        <ExpandedTable />
      </div>
    );
  }
}
