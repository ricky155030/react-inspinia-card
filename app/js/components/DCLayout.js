'use strict';

import React from 'react';
import SmallCard from './SmallCard';

const definition = {
  A: [
    [{name: 'F14CNL3P7401'},{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7403'}],
    [],
    [{name: 'F14CNL3P7405'}],
    [{name: 'F14CNL3P7407'}],
    [{name: 'F14CNL3P7409'}],
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7402'}]
  ],
  B: [
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7403'}],
    [{name: 'F14CNL3P7402'}],
    [{name: 'F14CNL3P7405'}],
    [{name: 'F14CNL3P7409'}],
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7402'}]
  ],
  C: [
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7403'}],
    [{name: 'F14CNL3P7402'}],
    [{name: 'F14CNL3P7405'}],
    [{name: 'F14CNL3P7407'}],
    [{name: 'F14CNL3P7409'}],
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7402'}]
  ],
  D: [
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7403'}],
    [{name: 'F14CNL3P7402'}],
    [{name: 'F14CNL3P7405'}],
    [{name: 'F14CNL3P7407'}],
    [{name: 'F14CNL3P7409'}],
    [{name: 'F14CNL3P7401'}],
    [{name: 'F14CNL3P7402'}]
  ],
}

const headerStyle = {
  backgroundColor: '#2f4050',
  color: '#FFF',
  textAlign: 'center',
  verticalAlign: 'middle'
}

class DCLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  generateGridNumber(definition) {
    let longestRow = 0
    let result = []

    Object.keys(definition).forEach((key) => {
      const rowLength = definition[key].length
      rowLength > longestRow ? longestRow = rowLength : null
    })

    for(var i = 1; i <= longestRow; i++) {
      result.push((<td style={headerStyle}>{i}</td>))
    }

    return result
  }

  generateGrid(definition) {
    return definition.map((data, index) => {
      return (
        <td
          key={index}
          style={{ backgroundColor: data.length == 0 ? '#DDD' : '' }}
        >
        {data.map((item) => <SmallCard>{item.name}</SmallCard>)}
        </td>
      )
    })
  }

  generateRow(definition) {
    return Object.keys(definition).map((name, index) => {
      return (
        <tr key={index}>
          <td style={headerStyle}>{name}</td>
          {this.generateGrid(definition[name])}
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <th></th>
          {this.generateGridNumber(definition)}
        </thead>
        <tbody>
          {this.generateRow(definition)}
        </tbody>
      </table>
    )
  }
}

export default DCLayout
