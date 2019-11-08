import React from 'react';
import styled from 'styled-components/native';
import {inject} from 'mobx-react';
import StackContainer from '.';

@inject(stores => ({}))
class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.disableYellowBox = true;
  }

  componentDidMount = async () => {};

  render() {
    //render for authorized user
    // return ();

    return <StackContainer />;
  }
}

export default Splash;
