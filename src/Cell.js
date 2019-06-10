// @format
import React, {Component} from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
    };
  }
  render() {
    const colorDict = {
      1: 'white',
      2: 'pink',
      3: 'blue',
      4: 'red',
      5: 'yellow',
      6: 'purple',
      7: 'aqua',
    };

    return <div className={colorDict[this.props.jewel]}>""</div>;
  }
}

export default Cell;
