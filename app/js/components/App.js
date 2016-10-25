'use strict';

import React from 'react';
import DCLayout from './DCLayout';

const pageWrapperStyle = {
  minHeight: '966px',
}

const pageStyle = {
  width: '100%',
  position: 'absolute',
  top: '64px'
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="wrapper">
        <div className="gray-bg" id="page-wrapper">
          <div style={{ padding: '20px', backgroundColor: '#FFF' }}>
            <DCLayout /> 
          </div>
        </div>
      </div>
    )
  }
}

export default App
