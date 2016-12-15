'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

class Clicker extends React.Component {
  constructor() {
    super();
}

  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
};

ReactDOM.render(<Clicker />,
		document.getElementById('react-container'));
