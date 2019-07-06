import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  state = { level: 500 };
  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={this.changeLevel}
          step={100}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer.. eventually */}
      </div>
    );
  }
}

export default Palette;
