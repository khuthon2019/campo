/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import colors from '../../../colors/colors';

@inject(stores => ({
  navTo: stores.nav.navTo,
}))
class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location:'강원도 평창군 대관령면'
    };
  }

  render() {
    const {location} = this.state;

    return (
      <Container>
        <MapIcon />
        <LocationText>
          {location}
        </LocationText>
      </Container>
    );
  }
}

Location.propTypes = {
};

Location.defaultProps = {
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const MapIcon = styled.Image`
  width: 8px;
  height: 11px;
  background-color: white;
  margin-right: 5px;
`;
const LocationText = styled.Text`
  color: white;
`;

export default Location;
