import React, { Component } from 'react';

import Auxil from '../../hoc/Auxil';

class BurgerBuilder extends Component {
  render () {
    return (
      <Auxil>
        <div>Burger</div>
        <div>Build Controls</div>
      </Auxil>
    );
  }
}

export default BurgerBuilder;
