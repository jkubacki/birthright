import React from 'react'
import { HexGrid } from 'react-hexgrid';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    let boardConfig = {
      width: 800, height: 800,
      layout: { width: 5, height: 5, flat: true, spacing: 1.1 },
      origin: { x: 0, y: 0 },
      map: 'hexagon',
      mapProps: [ 4 ]
    }
    let grid = HexGrid.generate(boardConfig);
    this.state = { grid, config: boardConfig };
  }

  render() {
    let { grid, config } = this.state;

    return (
      <div className="Board">
        <HexGrid width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}
