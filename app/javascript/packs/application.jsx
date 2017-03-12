/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import { HexGrid } from 'react-hexgrid';

class App extends React.Component {
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
      <div className="App">
        <HexGrid width={config.width} height={config.height} hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
