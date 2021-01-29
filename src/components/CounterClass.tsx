import React, { Component, Fragment } from 'react';

interface CounterProps {
  name: String;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(this.increase, 1000);
  }

  increase = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <Fragment>
        <h1>{name} counter</h1>
        <div>count value : {count}</div>
      </Fragment>
    );
  }
}

export default Counter;