'use strict';

import React from 'react';

class SmallCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  mouseInLabel() {
    this.timer = setTimeout(() => {
      this.setState({ show: true })
    }, 500)
  }

  mouseOutLabel() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.setState({ show: false })
    }, 500)
  }

  mouseInCard() {
    clearTimeout(this.timer)
  }

  mouseOutCard() {
    this.timer = setTimeout(() => {
      this.setState({ show: false })
    }, 500)
  }

  render() {
    const labelStyle = {
      color: '#FFF',
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '100%',
      backgroundColor: '#00897B',
      borderRadius: '3px', 
      marginBottom: '5px',
      cursor: 'pointer'
    }

    const cardStyle = { 
      width: '350px',
      height: '200px',
      display: this.state.show ? '' : 'none',
      position: 'absolute',
      backgroundColor: '#FFF',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
      borderRadius: '3px',
    }

    return (
      <div>
        <div
          style={labelStyle}
          onMouseOver={() => this.mouseInLabel()}
          onMouseOut={() => this.mouseOutLabel()}
        >
          {this.props.children}
        </div>
        <div 
          className="animated fadeIn" 
          onMouseOver={() => this.mouseInCard()}
          onMouseOut={() => this.mouseOutCard()}
          style={cardStyle}
        >
          <div style={{ borderRadius: '3px 3px 0 0', height: '80px', width: '100%', backgroundColor: '#00897B', position: 'relative' }}>
            <img src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" style={{ position: 'absolute', bottom: -20, left: 15, weight: '60px', height: '60px', backgroundColor: '#FFF', border: '1px solid #AAA'}} />
            <span style={{ color: '#FFF', position: 'absolute', bottom: 15, left: 90, fontWeight: 600, fontSize: '14px' }}>F14CNL3P7401</span>
          </div>
          <div style={{ padding: '15px 15px 15px 90px' }}>
            <div style={{ marginBottom: '7px', wordWrap: 'break-word', wordBreak: 'break-all', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <span>Meta1 Name: </span>
              <span>Metaajkdhkajhdlkadjhalkdjhaldkjhaldhaldkjahsdjkhakd1</span>
            </div>
            <div style={{ marginBottom: '7px' }}>
              <span>Meta2 Name: </span>
              <span>Meta2</span>
            </div>
            <div style={{ marginBottom: '7px' }}>
              <span>Meta3 Name: </span>
              <span>Meta3</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallCard
